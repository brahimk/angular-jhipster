import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';
import { BECOME_PATIENT_ROUTE } from 'app/appointment';

const LAYOUT_ROUTES = [navbarRoute, ...errorRoute];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                ...LAYOUT_ROUTES,
                BECOME_PATIENT_ROUTE,
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#HackjamJhipsterAdminModule'
                }
            ],
            { useHash: true, enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [RouterModule]
})
export class HackjamJhipsterAppRoutingModule {}
