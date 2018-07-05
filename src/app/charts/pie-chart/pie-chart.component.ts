import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
let chart = am4core.create('piechartdiv', am4charts.PieChart);

     // Add data
chart.data = [{
  'country': 'Lithuania',
  'litres': 501.9
}, {
  'country': 'Czech Republic',
  'litres': 301.9
}, {
  'country': 'Ireland',
  'litres': 201.1
}, {
  'country': 'Germany',
  'litres': 165.8
}];

    // Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";  

});
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}