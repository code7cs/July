import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeyupComponent } from './keyup/keyup.component';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FormsModule } from '@angular/forms';
import { ViewChildCompComponent } from './view-child-comp/view-child-comp.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    KeyupComponent,
    ExponentialStrengthPipe,
    ViewChildCompComponent,
    CounterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
