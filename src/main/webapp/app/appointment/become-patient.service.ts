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
        return this.http.post<IPatient>(this.resourceUrl, patient, { observe: 'response' });
    }
}
