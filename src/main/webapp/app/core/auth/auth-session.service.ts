import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';

@Injectable({ providedIn: 'root' })
export class AuthServerProvider {
    constructor(private http: HttpClient) {}

    login(credentials): Observable<any> {
        const data =
            'j_username=' +
            encodeURIComponent(credentials.username) +
            '&j_password=' +
            encodeURIComponent(credentials.password) +
            '&remember-me=' +
            credentials.rememberMe +
            '&submit=Login';
        const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(SERVER_API_URL + 'api/authentication', data, { headers });
    }

    save(): Observable<any> {
        const data =
            'name=' +
            encodeURIComponent('name') +
            '&location=' +
            encodeURIComponent('patient.location') +
            '&age=' +
            'patient.age' +
            'j_username=' +
            encodeURIComponent('admin') +
            '&j_password=' +
            encodeURIComponent('admin');

        const headers2 = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

        return this.http.post('api/become-patient', data, { headers }).pipe(
            map((response: HttpResponse<any>) => {
                // to get a new csrf token call the api
                console.log('Je suis un super !!');
                return response;
            }),
            catchError(val => `I caught: ${val}`)
        );

        //return this.http.post<IPatient>(this.resourceUrl, patient, { headers, observe: 'response' });
    }

    logout(): Observable<any> {
        debugger;

        this.save().subscribe(
            data => {
                console.log('Je suis un super !!');
                return 'OKKKKKKKKKKKKKK';
            },
            err => {
                console.log('NULLLLLLLL ' + err);
                return 'cb(err)';
            }
        );

        // logout from the server
        return this.http.post(SERVER_API_URL + 'api/logout', {}, { observe: 'response' }).pipe(
            map((response: HttpResponse<any>) => {
                // to get a new csrf token call the api
                this.http.get(SERVER_API_URL + 'api/account').subscribe(() => {}, () => {});
                return response;
            })
        );
    }
}
