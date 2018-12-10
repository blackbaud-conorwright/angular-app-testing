import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent-cmp',
  template: '<ng-content></ng-content>'
})
export class ParentComponent implements AfterViewInit {
  public ngAfterViewInit() {
    console.log('after view init');
  }
}
