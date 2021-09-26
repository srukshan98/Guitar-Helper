import { Component } from '@angular/core';

@Component({
  selector: 'app-dialog-header',
  template: `<div class="row pt-2 mb-1 bg-light"><ng-content></ng-content></div>`,
  styles: [
    `.bg-light {
      background-color: #eee !important;
      border-radius: 5px 5px 0 0;
    }`
  ]
})
export class DialogHeaderComponent {}
