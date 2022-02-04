import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AppService } from './app.service';
import { AppConfigService } from './appconfig.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,  OnDestroy {

  constructor(private appService: AppService,
    private appConfigService: AppConfigService) {}

  title = 'angular-nodejs-example';

  todoForm = new FormGroup({
    handle: new FormControl('', Validators.nullValidator && Validators.required),
    assignee: new FormControl('', Validators.nullValidator && Validators.required),
    price: new FormControl('', Validators.nullValidator && Validators.required),
    status: new FormControl('', Validators.nullValidator && Validators.required)
  });

  handles: any[] = [];
  settings: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  onSubmit() {
    console.log(this.todoForm.value);
    this.appService.addHandle(this.todoForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.getHandles();
      this.todoForm.reset();
    });
  }

  deleteHandle(handleid: number) {
    console.log('deleting this handle:::', handleid);
    this.appService.deleteHandle(handleid).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.getHandles();
    });
  }

  editHandle(handle: any) {
    console.log('editing this handle:::', handle);
    this.appService.editHandle(handle).pipe(takeUntil(this.destroy$)).subscribe(data => {
      console.log('message::::', data);
      this.getHandles();
    });
  }

  getHandles() {
    this.appService.getHandles().pipe(takeUntil(this.destroy$)).subscribe((handles: any[]) => {
      this.handles = handles;
    });
  }

  getAppSettings() {
    this.settings = this.appConfigService.settings;
  }

  ngOnInit() {
    this.getHandles();
    this.getAppSettings();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
