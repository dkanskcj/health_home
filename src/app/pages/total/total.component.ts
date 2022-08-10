import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {

  chart: Chart;

  config = {
    type: 'doughnut',
    data: {

    },
    option: {}
  };

  labels = [
  ];
  data = {};

  constructor() { }

  ngOnInit(): void {
    this.labels;
    this.chart = new Chart("charts", {
      type: 'doughnut',
      data: {
        labels: ['신용카드', '현금', '체크카드'],
        datasets: [
          {
            label: '현재 체중',
            data: [400, 30, 100],
            backgroundColor: [
              'rgb(100, 100, 253)',
              'rgb(122, 210, 130)',
              'rgb(255, 160, 161)'
            ],
            borderColor: [
              'rgb(100, 100, 253)',
              'rgb(122, 210, 130)',
              'rgb(255, 160, 161)'
            ],
            hoverOffset: 4
          },
        ]
      },
      options: {
        maintainAspectRatio: false,
        // responsive:false,
        scales: {
        }
      }
    });
    
  }

}
