import { NgModule } from '@angular/core';
import { RequestService } from './request.service';
import { PortalModule } from '@angular/cdk/portal';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavPortalComponent } from '../layout/nav-bar/nav-portal/nav-portal.component';
import { ImageErrorDirective } from './image-error/image-error.directive';
import { MatSelectModule } from '@angular/material/select';
import { YearSelectorComponent } from '../features/search-results/year-selector/year-selector.component';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    PortalModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatDialogModule
  ],
  declarations: [
    NavPortalComponent,
    YearSelectorComponent,
    ImageErrorDirective,
  ],
  providers: [
    RequestService
  ],
  exports: [
    PortalModule,
    FormsModule,
    CommonModule,
    NavPortalComponent,
    YearSelectorComponent,
    ImageErrorDirective,
  ],
  entryComponents: [
    NavPortalComponent
  ]
})
export class SharedModule { }
