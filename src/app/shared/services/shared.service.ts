import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/core/base-service/base.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService extends BaseService {

  sendEmail(payload: any): Observable<any> {
    return this.http.post<any>('https://app65.azurewebsites.net/api/Email', payload);
  }

}
