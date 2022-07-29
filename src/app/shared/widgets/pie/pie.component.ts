import { Component, OnInit, Input} from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting'


@Component({
  selector: 'app-widget-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent implements OnInit {

    @Input() data : Highcharts.SeriesOptionsType[] = [];

    constructor() { }

    Highcharts: typeof Highcharts = Highcharts; // required
    chartConstructor: string = 'chart'; 
    chartOptions: Highcharts.Options = {}; //required
    pieColor: string = "#85edff";


    // Make monochrome colors
    pieColors() : any  {
    var colors = [],
        base = this.pieColor,
        i;

    for (i = 0; i < 10; i += 1) {
        // Start out with a darkened base color (negative brighten), and end
        // up with a much brighter color
        colors.push(Highcharts.color(base).brighten((i - 3) / 7).get());
    }
    return colors;
    }

  ngOnInit(): void {

    this.chartOptions = {
      chart: {
      plotBackgroundColor: undefined,
      plotBorderWidth: undefined,
      plotShadow: false,
      type: 'pie'
  },
  title: {
      text: 'Browser market shares at a specific website, 2014'
  },
  tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  accessibility: {
      point: {
          valueSuffix: '%'
      }
  },
  plotOptions: {
      pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          colors: this.pieColors(),
          dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
              distance: -50,
              filter: {
                  property: 'percentage',
                  operator: '>',
                  value: 4
              }
          }
      }
  },
  series: this.data,
};
  }



}

