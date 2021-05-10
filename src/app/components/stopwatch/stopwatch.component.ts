import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss'],
})
export class StopwatchComponent {
  public timeBegan = null;
  public timeStopped: any = null;
  public stoppedDuration: any = 0;
  public started = null;
  public isRunning = false;
  public blankTime = '00.00';
  public time = '00.00';
  start() {
    if (this.isRunning) return;
    if (this.timeBegan === null) {
      this.reset();
      this.timeBegan = new Date();
    }
    if (this.timeStopped !== null) {
      let newStoppedDuration: any = +new Date() - this.timeStopped;
      this.stoppedDuration = this.stoppedDuration + newStoppedDuration;
    }
    this.started = setInterval(this.clockRunning.bind(this), 20);
    this.isRunning = true;
  }

  stop() {
    this.isRunning = false;
    this.timeStopped = new Date();
    clearInterval(this.started);
  }

  reset() {
    this.isRunning = false;
    clearInterval(this.started);
    this.stoppedDuration = 0;
    this.timeBegan = null;
    this.timeStopped = null;
    this.time = this.blankTime;
  }

  clockRunning() {
    let currentTime: any = new Date();
    let timeElapsed: any = new Date(
      currentTime - this.timeBegan - this.stoppedDuration
    );

    let hours = timeElapsed.getUTCHours();
    let mins = timeElapsed.getUTCMinutes();
    let sec = timeElapsed.getUTCSeconds();
    let ms = timeElapsed.getUTCMilliseconds();

    this.time =
      sec.toString().padStart(2, '0') +
      '.' +
      ms.toString().padStart(2, '0').substring(0, 2);
  }
}
