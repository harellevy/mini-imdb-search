import { NgModule } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SharedModule } from '../shared/shared.module';
import { PortalModule } from '@angular/cdk/portal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadroomModule } from '@ctrl/ngx-headroom';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    HeadroomModule,
    SharedModule,
    PortalModule
  ],
  declarations: [
    NavBarComponent
  ],
  providers: [],
  exports: [
    NavBarComponent
  ]
})
export class LayoutModule { }
