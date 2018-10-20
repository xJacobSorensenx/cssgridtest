import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { K1Component } from './k1/k1.component';
import { K2Component } from './k2/k2.component';
import { K3Component } from './k3/k3.component';
import { TopComponent } from './top/top.component';
import { BundComponent } from './bund/bund.component';

@NgModule({
  declarations: [
    AppComponent,
    K1Component,
    K2Component,
    K3Component,
    TopComponent,
    BundComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
