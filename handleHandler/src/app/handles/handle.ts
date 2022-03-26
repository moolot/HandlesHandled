export class Handle {
    uid!: { type: Number, required: true, unique: true };
    handle!: String;
    platform!: String;
    seller!: String;
    price!: String;
    availability!: String;
}