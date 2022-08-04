import { Component, OnInit } from '@angular/core';

type target_l = {
  date: string,
  name: string,
  present: number,
  ex_target: number,
  achive: boolean;
}

type target_t ={
  date: string,
  name: string,
  present: string,
  ex_target: string,
  achive: boolean;
}

type food_l ={
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
  constructor() { }

  ngOnInit(): void {
  }


  u_target_list: target_l[] =[
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

  t_target_list: target_t[] =[
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

  food_list: food_l[] =[
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
