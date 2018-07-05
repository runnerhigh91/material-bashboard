import { NgModule } from '@angular/core';
import { ColumnChartComponent } from './column-chart/column-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { CircleChartComponent } from './circle-chart/circle-chart.component';
import { XyChartComponent } from './xy-chart/xy-chart.component';
import { RoundedChartComponent } from './rounded-chart/rounded-chart.component';

@NgModule({
    imports: [
        ColumnChartComponent,
        PieChartComponent,
        CircleChartComponent,
        XyChartComponent,
        RoundedChartComponent,
    ],
    exports: [
        ColumnChartComponent,
        PieChartComponent,
        CircleChartComponent,
        XyChartComponent,
        RoundedChartComponent,
    ],
    providers: [
    ]
})
export class ChartsModule { }
