import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PresentationComponentComponent } from './presentation-component/presentation-component.component';
import { KirbyModule } from '@kirbydesign/designsystem';

@NgModule({
  declarations: [
    AppComponent,
    PresentationComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KirbyModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
