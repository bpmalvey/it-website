import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { SidebarModule } from './sidebar/sidebar.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { NguiMapModule} from '@ngui/map';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { MobilityComponent }   from './mobility/mobility.component';
import { TableComponent }   from './table/table.component';
import { TypographyComponent }   from './typography/typography.component';
import { FAQComponent }   from './faq/faq.component';
import { MapsComponent }   from './maps/maps.component';
import { UpgradeComponent }   from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MobilityComponent,
    TableComponent,
    TypographyComponent,
    FAQComponent,
    MapsComponent,
    UpgradeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    SidebarModule,
    NavbarModule,
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
