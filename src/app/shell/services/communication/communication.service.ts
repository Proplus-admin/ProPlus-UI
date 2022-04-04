import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IToaster } from '../../models/toaster-model';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {

  private toasterSubject = new Subject<IToaster>();
  toaster$ = this.toasterSubject.asObservable();

  constructor() { }

  showToaster(toaster: IToaster): void {
    this.toasterSubject.next(toaster);
  }
}
