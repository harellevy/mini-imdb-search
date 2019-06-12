import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Inject,
  Injector, OnDestroy,
  ViewChild
} from '@angular/core';
import { CdkPortal, DomPortalOutlet } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'mini-imdb-nav-portal',
  templateUrl: './nav-portal.component.html',
  styleUrls: []
})
export class NavPortalComponent implements AfterViewInit, OnDestroy {
  @ViewChild(CdkPortal, {read: CdkPortal, static: false}) portal: CdkPortal;
  host: DomPortalOutlet;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {

  }
  ngAfterViewInit() {
    // load host component in id
    this.host = new DomPortalOutlet(
      this.document.getElementById('nav-portal'),
      this.cfr,
      this.appRef,
      this.injector
    );
    this.host.attach(this.portal);
  }
  ngOnDestroy(): void {
    this.host.detach();
  }
}
