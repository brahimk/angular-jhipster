import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { BecomePatient, IPatient } from 'app/shared/model/patient.model';
import { map, catchError } from 'rxjs/operators';

type EntityResponseType = HttpResponse<IPatient>;

@Injectable({ providedIn: 'root' })
export class BecomePatientService {
    private resourceUrl = SERVER_API_URL + 'api/become-patient';

    constructor(private http: HttpClient) {}

    save(patient: BecomePatient): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

        //return this.http.post<IPatient>(this.resourceUrl, patient, { headers, observe: 'response' });

        return this.http.post(this.resourceUrl, patient, { headers }).pipe(
            map((response: HttpResponse<any>) => {
                // to get a new csrf token call the api
                console.log('Je suis un super !!');
                return response;
            }),
            catchError(val => `I caught: ${val}`)
        );
    }
}
