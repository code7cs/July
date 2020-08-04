/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-04 11:44:11
 * @LastEditTime: 2020-08-04 12:07:53
 */
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChartModule } from "angular-highcharts";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ChartModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
