import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2OdometerModule } from 'ng2-odometer';

import { MatModule } from './material.module';
import { LayoutModule } from '@angular/cdk/layout';

import { MyNavComponent } from './my-nav/my-nav.component';
import { LoaderComponent } from './loader/loader.component';

import { FirstPageComponent } from './pages/first-page/first-page.component';
import { SecondPageComponent } from './pages/second-page/second-page.component';
import { ThirdPageComponent } from './pages/third-page/third-page.component';
import { FourthPageComponent } from './pages/fourth-page/fourth-page.component';


import { ColumnChartComponent } from './charts/column-chart/column-chart.component';
import { PieChartComponent } from './charts/pie-chart/pie-chart.component';
import { CircleChartComponent } from './charts/circle-chart/circle-chart.component';
import { XyChartComponent } from './charts/xy-chart/xy-chart.component';
import { RoundedChartComponent } from './charts/rounded-chart/rounded-chart.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '',   redirectTo: '/first-page', pathMatch: 'full' },
  { path: 'first-page', component: FirstPageComponent},
  { path: 'second-page', component: SecondPageComponent},
  { path: 'third-page', component: ThirdPageComponent},
  { path: 'fourth-page', component: FourthPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    FirstPageComponent,
    SecondPageComponent,
    ThirdPageComponent,
    FourthPageComponent,
    ColumnChartComponent,
    PieChartComponent,
    CircleChartComponent,
    XyChartComponent,
    RoundedChartComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    LayoutModule,
    Ng2OdometerModule,
    MatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
