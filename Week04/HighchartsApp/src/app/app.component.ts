/*
 * @Author: Hanfan Wang
 * @Date: 2020-08-04 11:44:11
 * @LastEditTime: 2020-08-04 12:05:34
 */
import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
import { Chart } from "angular-highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "HighchartsApp";

  chart = new Chart({
    chart: {
      plotBorderWidth: null,
      plotShadow: false,
    },
    title: {
      text: "Browser market shares at a specific website, 2020",
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ["50%", "50%"],
        size: "45%",
        innerSize: "20%",
      },
    },
    series: [
      {
        type: "pie",
        name: "Browser share",
        data: [
          ["Firefox", 45.0],
          ["IE", 26.8],
          {
            name: "Chrome",
            y: 12.8,
            sliced: true,
            selected: true,
          },
          ["Safari", 8.5],
          ["Opera", 6.2],
          ["Others", 0.7],
        ],
      },
    ],
  });
}
