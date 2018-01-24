import { Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MobilityComponent }   from './mobility/mobility.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { FAQComponent }   from './faq/faq.component';
import { MapsComponent }   from './maps/maps.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'mobility',
        component: MobilityComponent
    },
    {
        path: 'table',
        component: TableComponent
    },
    {
        path: 'typography',
        component: TypographyComponent
    },
    {
        path: 'faq',
        component: FAQComponent
    },
    {
        path: 'contact',
        component: MapsComponent
    },
    {
        path: 'bugzilla',
        component: UpgradeComponent
    }
]
