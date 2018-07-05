import { Component, NgZone } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';


am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-rounded-chart',
  templateUrl: './rounded-chart.component.html',
  styleUrls: ['./rounded-chart.component.scss']
})
export class RoundedChartComponent {
  private chart: am4charts.PieChart;

  constructor(private zone: NgZone) {}
  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      // Create chart instance
      let chart = am4core.create('roundedchartdiv', am4charts.PieChart);
      chart.data = [
        {
          country: 'Lithuania',
          value: 401
        },
        {
          country: 'Czech Republic',
          value: 300
        },
        {
          country: 'Ireland',
          value: 200
        },
        {
          country: 'Germany',
          value: 165
        },
        {
          country: 'Australia',
          value: 139
        },
        {
          country: 'Austria',
          value: 128
        }
      ];
      chart.radius = am4core.percent(70);
      chart.innerRadius = am4core.percent(40);
      chart.startAngle = 180;
      chart.endAngle = 360;  
      
      let series = chart.series.push(new am4charts.PieSeries());
      series.dataFields.value = 'value';
      series.dataFields.category = 'country';
      
      series.slices.template.cornerRadius = 10;
      series.slices.template.innerCornerRadius = 7;
      series.slices.template.draggable = true;
      series.slices.template.inert = true;
      
      series.hiddenState.properties.startAngle = 90;
      series.hiddenState.properties.endAngle = 90;
      
      chart.legend = new am4charts.Legend();

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