import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { AdvanceHighLightDirective } from './advance-high-light.directive';
import { BasicHighLightDirective } from './basic-high-light.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AdvanceHighLightDirective,
    BasicHighLightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
