import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private changeDet: ChangeDetectorRef) {}

  public onChange(event: any) {
    this.title = event.content;
    this.changeDet.detectChanges();
  }
}
