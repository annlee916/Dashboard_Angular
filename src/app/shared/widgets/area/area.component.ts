import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})


export class AreaComponent implements OnInit {

  @Input() data : Highcharts.SeriesOptionsType[] = [];

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; 
  chartOptions: Highcharts.Options = {}; //required
 
  constructor() { }

  ngOnInit(): void {

    this.chartOptions = {   chart: {
      type: 'area'
  },
  title: {
      text: 'Historic and Estimated Worldwide Population Growth by Region'
  },
  subtitle: {
      text: 'Demo '
  },
  xAxis: {
      categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      tickmarkPlacement: 'on'
      
  },
  yAxis: {
      title: {text: 'billion'}
  },
  tooltip: {
      split: true,
      valueSuffix: ' millions'
  },
  credits:{
    enabled:false
  },
  exporting:{
    enabled:true,
  },
  plotOptions: {
      area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
              lineWidth: 1,
              lineColor: '#666666'
          }
      }
  },
  series: this.data,
 }; // required

HC_exporting(Highcharts);

 setTimeout(() => 
 {
  window.dispatchEvent(new Event('resize'));
 },300);
}
}