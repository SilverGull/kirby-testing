import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { OnPushComponent } from './on-push/on-push.component';
import { DefaultComponent } from './default/default.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KirbyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
