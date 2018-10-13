import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HackjamJhipsterSharedModule } from 'app/shared';

import {
    accountState,
    ActivateComponent,
    PasswordComponent,
    PasswordResetFinishComponent,
    PasswordResetInitComponent,
    PasswordStrengthBarComponent,
    RegisterComponent,
    SessionsComponent,
    SettingsComponent
} from './';

@NgModule({
    imports: [HackjamJhipsterSharedModule, RouterModule.forChild(accountState)],
    declarations: [
        ActivateComponent,
        RegisterComponent,
        PasswordComponent,
        PasswordStrengthBarComponent,
        PasswordResetInitComponent,
        PasswordResetFinishComponent,
        SessionsComponent,
        SettingsComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HackjamJhipsterAccountModule {}
