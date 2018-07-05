import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.scss']
})
export class ColumnChartComponent {
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
    // Create chart instance
let chart = am4core.create('columnchartdiv', am4charts.XYChart3D);

// Add data
chart.data = [{
  'country': 'Lithuania',
  'litres': 501.9,
  'units': 250
}, {
  'country': 'Czech Republic',
  'litres': 301.9,
  'units': 222
}, {
  'country': 'Ireland',
  'litres': 201.1,
  'units': 170
}, {
  'country': 'Germany',
  'litres': 165.8,
  'units': 122
}, {
  'country': 'Australia',
  'litres': 139.9,
  'units': 99
}, {
  'country': 'Austria',
  'litres': 128.3,
  'units': 85
}, {
  'country': 'UK',
  'litres': 99,
  'units': 93
}, {
  'country': 'Belgium',
  'litres': 60,
  'units': 50
}, {
  'country': 'The Netherlands',
  'litres': 50,
  'units': 42
}];
// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = 'country';
categoryAxis.title.text = 'Countries';

let  valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = 'Litres sold (M)';

// Create series
let series = chart.series.push(new am4charts.ColumnSeries3D());
series.dataFields.valueY = 'litres';
series.dataFields.categoryX = 'country';
series.name = 'Sales';
series.tooltipText = '{name}: [bold]{valueY}[/]';

let series2 = chart.series.push(new am4charts.ColumnSeries3D());
series2.dataFields.valueY = 'units';
series2.dataFields.categoryX = 'country';
series2.name = 'Units';
series2.tooltipText = '{name}: [bold]{valueY}[/]';

// Add cursor
chart.cursor = new am4charts.XYCursor();


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