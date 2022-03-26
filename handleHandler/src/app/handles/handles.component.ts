//   ngOnInit() {
//     this.handleForm = new FormGroup({
//       handle: new FormControl("@"),
//       platform: new FormControl(""),
//       seller: new FormControl("@"),
//       price: new FormControl("$"),
//       availability: new FormControl("")
//     });
//   }
  
//   onClickSubmit(data: any) { this.handle = data.handle }
// }
import { Component, OnInit } from '@angular/core';
import { Handle } from './handle';
import { HandleService } from './handle.service';

@Component({
  selector: 'app-handles',
  templateUrl: './handles.component.html'
})
export class HandlesComponent implements OnInit {
  addingHandle = false;
  handles: any = [];
  selectedHandle: any | Handle | null ;

  constructor(private handleService: HandleService) {}

  ngOnInit() {
    this.getHandles();
  }

  cancel() {
    this.addingHandle = false;
    this.selectedHandle = null;
  }

  deleteHandle(handle: Handle) {
    this.handleService.deleteHandle(handle).subscribe(res => {
      this.handles = this.handles.filter((h: Handle) => h !== handle);
      if (this.selectedHandle === handle) {
        this.selectedHandle = null;
      }
    });
  }

  getHandles() {
    return this.handleService.getHandles().subscribe(handles => {
      this.handles = handles;
    });
  }

  enableAddMode() {
    this.addingHandle = true;
    this.selectedHandle = new Handle();
  }

  onSelect(handle: Handle) {
    this.addingHandle = false;
    this.selectedHandle = handle;
  }

  save() {
    if (this.addingHandle) {
      this.handleService.addHandle(this.selectedHandle).subscribe(handle => {
        this.addingHandle = false;
        this.selectedHandle = null;
        this.handles.push(handle);
      });
    } else {
      this.handleService.updateHandle(this.selectedHandle).subscribe(handle => {
        this.addingHandle = false;
        this.selectedHandle = null;
      });
    }
  }
}