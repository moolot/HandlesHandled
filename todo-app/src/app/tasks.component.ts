import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class HandlesComponent implements OnInit {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private route: ActivatedRoute,
    private router: Router, private appService: AppService) { }

  @Input() handles: any[];
  @Output() deleteHandle = new EventEmitter<any>();
  @Output() editHandle = new EventEmitter<any>();

  editingId: any;

  editForm = new FormGroup({
    handle: new FormControl('', Validators.nullValidator && Validators.required),
    seller: new FormControl('', Validators.nullValidator && Validators.required),
    price: new FormControl('', Validators.nullValidator && Validators.required),
    availability: new FormControl('', Validators.nullValidator && Validators.required)
  });

  ngOnInit(): void {
  }

  gotoDetail(handle) {
    localStorage.setItem('handle', JSON.stringify(handle));
    this.router.navigate(['detail']);
  }

  onSubmit() {
    console.log(this.editForm.value);
    this.modalService.hide(1);
    this.editHandle.emit(this.editForm.value);
  }

  delHandle(handle) {
    this.deleteHandle.emit(handle);
  }

  openModal(template: TemplateRef<any>, handle) {
    this.editingId = handle.id;
    this.editForm.setValue({id: handle.id, handle: handle.handle, seller: handle.seller, price: handle.price, availability: handle.availability});
    this.modalRef = this.modalService.show(template);
  }

}
