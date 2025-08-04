import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus: 'online' | 'offline' | 'unknown' = 'online';
  // private interval?: NodeJS.Timeout;
  private interval?: ReturnType<typeof setInterval>;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      const rnd = Math.random();

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 9.0) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearTimeout(this.interval);
    }
  }
}
