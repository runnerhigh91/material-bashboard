import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-circle-chart',
  templateUrl: './circle-chart.component.html',
  styleUrls: ['./circle-chart.component.scss']
})
export class CircleChartComponent {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
let chart = am4core.create('circlechartdiv', am4charts.PieChart);

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
}, {
  'country': 'Australia',
  'litres': 139.9
}, {
  'country': 'Austria',
  'litres': 128.3
}, {
  'country': 'UK',
  'litres': 99
}, {
  'country': 'Belgium',
  'litres': 60
}, {
  'country': 'The Netherlands',
  'litres': 50
}];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = 'litres';
pieSeries.dataFields.category = 'country';

// Let's cut a hole in our Pie chart the size of 40% the radius
chart.innerRadius = am4core.percent(40);

// Put a thick white border around each Slice
pieSeries.slices.template.stroke = am4core.color('#4a2abb');
pieSeries.slices.template.strokeWidth = 2;
pieSeries.slices.template.strokeOpacity = 1;


      
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