import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4themes_kelly from '@amcharts/amcharts4/themes/kelly';

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_kelly);


@Component({
  selector: 'app-xy-chart',
  templateUrl: './xy-chart.component.html',
  styleUrls: ['./xy-chart.component.scss']
})
export class XyChartComponent {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create('xychartdiv', am4charts.XYChart);

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


// Create axes
let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = 'country';
categoryAxis.renderer.minGridDistance = 40;
categoryAxis.title.text = 'Countries';

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.title.text = 'Litres sold (M)';

// Create series
let series = chart.series.push(new am4charts.ColumnSeries());
series.dataFields.valueY = 'litres';
series.dataFields.categoryX = 'country';
series.name = 'Sales';
series.tooltipText = '{name}: [bold]{valueY}[/]';

let series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = 'units';
series2.dataFields.categoryX = 'country';
series2.name = 'Units';
series2.tooltipText = '{name}: [bold]{valueY}[/]';
series2.strokeWidth = 3;

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();

// Add simple vertical scrollbar
chart.scrollbarY = new am4core.Scrollbar();

// Add horizotal scrollbar with preview
let scrollbarX = new am4charts.XYChartScrollbar();
scrollbarX.series.push(series);
chart.scrollbarX = scrollbarX;


      
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