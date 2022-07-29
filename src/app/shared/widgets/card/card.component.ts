import { Component, Input, OnInit } from '@angular/core';
import { stringToKeyValue } from '@angular/flex-layout/extended/style/style-transforms';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() label:string;
  @Input() total:string;
  @Input() percentage:string;
  @Input() chartdata : Highcharts.SeriesOptionsType []= [];
  
  constructor() {
    this.label = "";
    this.total="";
    this.percentage="0";
    
   }
  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; 
  chartOptions: Highcharts.Options = {}; //required

   ngOnInit(): void {
    this.chartOptions = {   
      chart: {
      type: 'area',
      backgroundColor: 'black',
      borderWidth: 0,
      margin:[2,2,2,2],
      height:100,
  },
  title: {
      text: ''
  },
  credits:{enabled:false},
  exporting:{enabled:false},
  tooltip:{
    split:true,
    outside:true
  },
  legend:{
    enabled:false
  },
  xAxis:{
    labels:{
      enabled:false,
    }
  },
  series: this.chartdata,
 }; // required

HC_exporting(Highcharts);


}
}
