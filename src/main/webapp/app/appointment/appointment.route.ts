import { Route } from '@angular/router';

import { BecomePatientComponent } from './';

export const BECOME_PATIENT_ROUTE: Route = {
    path: 'become-patient',
    component: BecomePatientComponent,
    data: {
        authorities: [],
        pageTitle: 'Become a patient'
    }
};

/**
 * Add here the NEW_APPPOINTMENT_ROUTE with the path /new-appointment
 */
export const NEW_APPPOINTMENT_ROUTE: Route = {};
