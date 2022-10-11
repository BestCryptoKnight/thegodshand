import { Injectable } from '@angular/core';
import { LogLevel } from './loggerModel.model';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  logLevel: LogLevel = new LogLevel();

  constructor() {}

  info(msg: string): void {
    this.logWith(this.logLevel.Info, msg);
  }

  warn(msg: string): void {
    this.logWith(this.logLevel.Warn, msg);
  }

  error(msg: string): void {
    this.logWith(this.logLevel.Error, msg);
  }

  private logWith(level: any, msg: any): void {
    if (level <= this.logLevel.Error) {
      switch (level) {
        case this.logLevel.None:
          return console.log(msg);
        case this.logLevel.Info:
          return console.info(msg);
        case this.logLevel.Warn:
          return console.warn( msg);
        case this.logLevel.Error:
          return console.error(msg);
        default:
          console.debug(msg);
      }
    }
  }
}