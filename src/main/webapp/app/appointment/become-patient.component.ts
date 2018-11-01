import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BecomePatientService } from 'app/appointment/become-patient.service';
import { HttpResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Component({
    selector: 'jhi-home',
    template: `
        <div class="row">
            <div class="col-md-3">
                <span class="hipster img-fluid rounded"></span>
            </div>
            <div class="col-md-9">
                <h1 class="display-4">Welcome, Hipster!</h1>
                <p class="lead">This is the become a patient, please fill the form below to join my hospital </p>

                <form name="becomePatient" role="form" novalidate [formGroup]="becomePatientForm">
                    <h2 id="jhi-patient-heading">Become a Patient</h2>
                    <div>
                        <jhi-alert-error></jhi-alert-error>
                        <div *ngIf="isSuccess" class="alert alert-success" role="alert">
                            This is a success! The doctor will check it ASAP
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="field_name">Name</label>
                            <input type="text" class="form-control" name="name" id="field_name"
                                   formControlName="name"/>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="field_location">Location</label>
                            <input type="text" class="form-control" name="location" id="field_location"
                                   formControlName="location"/>
                        </div>
                        <div class="form-group">
                            <label class="form-control-label" for="field_age">Age</label>
                            <input type="number" class="form-control" name="age" id="field_age"
                                   formControlName="age"/>
                        </div>
                    </div>
                    <div>
                        <button type="button" id="cancel-save" class="btn btn-secondary"
                                (click)="reset()">
                            <fa-icon [icon]="'ban'"></fa-icon>&nbsp;<span>Reset</span>
                        </button>
                        <button type="submit" id="save-entity"
                                (click)="save()"
                                [disabled]="becomePatientForm.invalid || isSaving"
                                class="btn btn-primary">
                            <fa-icon [icon]="'save'"></fa-icon>&nbsp;<span>Save</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    `,
    styles: []
})
export class BecomePatientComponent implements OnInit {
    becomePatientForm: FormGroup;

    isSaving = false;
    isSuccess = false;

    constructor(private fb: FormBuilder, private becomePatientService: BecomePatientService) {}

    ngOnInit() {
        this.becomePatientForm = this.fb.group({
            name: [null, Validators.required],
            location: [null, Validators.required],
            age: [null, Validators.required]
        });
    }

    reset() {
        this.becomePatientForm.reset();
        this.isSuccess = false;
        this.isSaving = false;
    }

    save() {
        debugger;
        this.isSaving = true;
        this.becomePatientService.save(this.becomePatientForm.getRawValue()).pipe(
            map(response => {
                // to get a new csrf token call the api
                console.log('Je suis un super !!');
                return response;
            }),
            catchError(val => `I caught: ${val}`)
        );

        /**
         * Inject BecomePatientService and save the patient
         */
    }
}
