import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Funding } from '../_models/Funding';

@Injectable({
  providedIn: 'root'
})
export class FundingService {

  constructor(private http: HttpClient) {

   }

   getFundings(){
     return this.http.get<Funding[]>(`${environment.apiUrl}/funding/getall`)
      .pipe(map(fundings => {
          //console.log(fundings);
          return fundings;
    }));
   }

   getFunding(id: number){
    return this.http.get<Funding>(`${environment.apiUrl}/funding/${id}`)
     .pipe(map(funding => {
         return funding;
   }));
  }

   updateFunding(funding: Funding){
      return this.http.put<Funding>(`${environment.apiUrl}/funding/update`, funding)
      .pipe(map(funding => {
          return funding;
    }));
   }
}
