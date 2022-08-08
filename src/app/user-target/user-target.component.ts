import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

type target_l = {
  date: string,
  name: string,
  present: number,
  ex_target: number,
  achive: boolean;
}

type target_t = {
  date: string,
  name: string,
  present: string,
  ex_target: string,
  achive: boolean;
}

type food_l = {
  date: string,
  morning: string,
  lunch: string,
  dinner: string,
  other: string;
}


@Component({
  selector: 'app-user-target',
  templateUrl: './user-target.component.html',
  styleUrls: ['./user-target.component.scss']
})
export class UserTargetComponent implements OnInit {

  u_query: any;
  t_query: any;
  f_query: any;

  config = {
    type: 'line',
    data: {
      
    },
    options: {}
  };

  labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  data = {};

  constructor() { }
  
  // myLineChart = new Chart(ctx, config);

  ngOnInit(): void {
    this.data = {
      labels: this.labels,
      datasets: [{
        label: 'My First dataset',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: [0, 10, 5, 2, 20, 30, 45],
      }]
    };
    // let ctx = document.getElementById("myChart");
    // let myChart = new Chart(ctx, {});
  }


  u_target_list: target_l[] = [
    {
      date: '2022년 7월 28일',
      name: '윗몸일으키기',
      present: 10,
      ex_target: 20,
      achive: false
    },
    {
      date: '2022년 7월 27일',
      name: '팔굽혀펴기',
      present: 25,
      ex_target: 20,
      achive: true
    },
  ];

  t_target_list: target_t[] = [
    {
      date: '2021년 7월 30일',
      name: '스쿼트',
      present: '100KG, 3회',
      ex_target: '100KG, 5회',
      achive: false
    },
    {
      date: '2022년 3월 25일',
      name: '윗몸일으키기',
      present: '23회',
      ex_target: '35회',
      achive: true
    },
  ];

  food_list: food_l[] = [
    {
      date: '2022년 7월 28일',
      morning: '바나나 2개, 방울 토마토 3알',
      lunch: '사과 2조각, 고구마 3개',
      dinner: '닭가슴살 300g',
      other: '단백질 쉐이크 500ml'
    },
    {
      date: '2020년 2월 4일',
      morning: '피자 3조각',
      lunch: '파인애플 5조각, 감자 4개',
      dinner: '닭가슴살 400g',
      other: '단백질 쉐이크 500ml'
    },
  ]





}

// export class LineChartComponent implements AfterViewInit {
//   @ViewChild('lineCanvas') lineCanvas: ElementRef;
//   lineChart: any;

//   constructor() { }

//   ngAfterViewInit(): void {
//     this.lineChartMethod();
//   }

//   lineChartMethod() {
//     this.lineChart = new Chart(this.lineCanvas.nativeElement, {
//       type: 'line',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
//         datasets: [
//           {
//             label: 'Sell per week',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
//             spanGaps: false,
//           }
//         ]
//       }
//     });
//   }

// }