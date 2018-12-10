import { Component, AfterContentInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-cmp',
  template: '<p>Noah</p>'
})
export class ChildComponent implements AfterContentInit {

  @Output()
  public changer = new EventEmitter<any>();

  public ngAfterContentInit() {
    this.changer.emit({
      content: 'content'
    });
  }
}
