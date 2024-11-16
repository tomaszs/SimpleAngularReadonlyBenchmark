
import { Component } from '@angular/core';
import { Status } from '../../enums/status.enum';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
})
export class PageOneComponent {
  statuses: Status[] = [Status.Active, Status.Inactive, Status.Pending];

  getStatusColor(status: Status): string {
    switch (status) {
      case Status.Active: return 'green';
      case Status.Inactive: return 'red';
      case Status.Pending: return 'orange';
      default: return 'black';
    }
  }
}
