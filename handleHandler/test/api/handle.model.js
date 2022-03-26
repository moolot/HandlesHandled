const mongoose = require('mongoose');
const validator = require('validator');

const deleteAtPath = (obj, path, index) => {
    if (index === path.length - 1) {
        delete obj[path[index]];
        return;
    }
    deleteAtPath(obj[path[index]], path, index + 1);
}
const toJson = (schema) => {
    let transform;
    if (schema.options.toJSON && schema.options.toJSON.transform) {
        transform = schema.options.toJSON.transform;
    }

    schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
        transform(doc, ret, options) {
            Object.keys(schema.paths).forEach((path) => {
                if (schema.paths[path].options && schema.paths[path].options.private) {
                    deleteAtPath(ret, path.split('.'), 0);
                }
            });

            ret.id = ret._id.toString();
            delete ret._id;
            delete ret.__v;
            delete ret.createdAt;
            if (transform) {
                return transform(doc, ret, options);
            }
        },
    });
}

const paginate = (schema) => {
    schema.statics.paginate = async function (filter, options) {
    let sort = '';
    if (options.sortBy) {
        const sortingCriteria = [];
        options.sortBy.split(',').forEach((sortOption) => {
        const [key, order] = sortOption.split(':');
        sortingCriteria.push((order === 'desc' ? '-' : '') + key);
        });
        sort = sortingCriteria.join(' ');
    } else {
        sort = 'createdAt';
    }

    const limit = options.limit && parseInt(options.limit, 10) > 0 ? parseInt(options.limit, 10) : 10;
    const page = options.page && parseInt(options.page, 10) > 0 ? parseInt(options.page, 10) : 1;
    const skip = (page - 1) * limit;

    const countPromise = this.countDocuments(filter).exec();
    let docsPromise = this.find(filter).sort(sort).skip(skip).limit(limit);

    if (options.populate) {
        options.populate.split(',').forEach((populateOption) => {
        docsPromise = docsPromise.populate(
            populateOption
            .split('.')
            .reverse()
            .reduce((a, b) => ({ path: b, populate: a }))
        );
        });
    }

    docsPromise = docsPromise.exec();

    return Promise.all([countPromise, docsPromise]).then((values) => {
        const [totalResults, results] = values;
        const totalPages = Math.ceil(totalResults / limit);
        const result = {
        results,
        page,
        limit,
        totalPages,
        totalResults,
        };
        return Promise.resolve(result);
    });
    };
};
const handleSchema = mongoose.Schema(
    {
        handleID: {
            type: String,
            required: true,
            trim: true,
        },
        handleName: {
            type: String,
            required: true,
            trim: true,
        },
        platform: {
            type: String,
            required: true,
            trim: true,
        },
        seller: {
            type: String,
            required: false,
            trim: true
        },
        price: {
            type: String,
            required: false,
            trim: true
        },
        Availability: {
            type: String,
            required: false,
            trim: true
        }
    },
    {
        timestamps: true,
    }
);
handleSchema.plugin(toJson);
handleSchema.plugin(paginate);
const Handle = mongoose.model('Handle', handleSchema);
module.exports = Handle;