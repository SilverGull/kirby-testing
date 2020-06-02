import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KirbyModule } from '@kirbydesign/designsystem';
import { OnPushComponent } from './on-push/on-push.component';
import { DefaultComponent } from './default/default.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    OnPushComponent,
    DefaultComponent,
    ListComponent
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
