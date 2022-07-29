import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart()
  {
    return [{
      data: [1502, 6350, 809,947,1402,3634,5268],
      type: 'line',
      name: 'ASIA'
    },{
      data: [106, 107, 111, 133, 221, 767, 1766],
      type: 'line',
      name: 'Africa'
    }, {
      data: [163, 203, 276, 408, 547, 729, 628],
      type: 'line',
      name: 'Europe',
  }, {
      name: 'America',
      data: [18, 31, 54, 156, 339, 818, 1201],
      type: 'area',
  
  }, {
      name: 'Oceania',
      data: [2, 2, 2, 6, 13, 30, 46],
      type: 'line',
  }];
  }
  cardChart()
  {
    return [{
      data: [502, 635,3634,1254, 2582, 5268],
      type: 'line',   
    }];
  }
  pieChart()
  {
    return [{
      name: 'Share',
      data: [
        { name: 'Chrome', y: 61.41 },
        { name: 'Internet Explorer', y: 11.84 },
        { name: 'Firefox', y: 10.85 },
        { name: 'Edge', y: 4.67 },
        { name: 'Safari', y: 4.18 },
        { name: 'Other', y: 7.05 }
    ],
      type:'pie',
    }];
  }
}
