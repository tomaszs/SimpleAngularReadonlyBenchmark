
import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  navigationStartTime = 0;
  navigationEndTime = 0;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.navigationStartTime = performance.now();
      } else if (event instanceof NavigationEnd) {
        this.navigationEndTime = performance.now();
        console.log(`Page Navigation Time: ${(this.navigationEndTime - this.navigationStartTime).toFixed(2)}ms`);
      }
    });
  }
}
