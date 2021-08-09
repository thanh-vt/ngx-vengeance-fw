import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { VgToastModule, VgControlModule, VgTreeTableModule } from 'projects/ngx-vengeance-lib/src/public-api';
// import { VgToastModule, VgControlModule, VgTreeTableModule } from 'ngx-vengeance-lib';
import {TestModule} from "./test/test.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    VgControlModule,
    VgTreeTableModule,
    VgToastModule,
    TestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
