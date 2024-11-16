
import { Component } from '@angular/core';
import { Status } from '../../enums/status.enum';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
})
export class PageTwoComponent {
  statuses: Status[] = [Status.Pending, Status.Active, Status.Inactive];

  getStatusText(status: Status): string {
    return `Current status is: ${status}`;
  }
}
