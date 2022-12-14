import { Component, OnInit } from '@angular/core';

type Index_l = {
  name: string;
  user_id: string;
  sex: string;
  age: number;
  residence: string;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor() { }

  Findmode: string = '';

  index_list: Index_l[] = [
    {
      name: '김현우',
      user_id: 'dkansckj',
      sex: '남성',
      age: 25,
      residence: '광주광역시 어딘가'
    },
    {
      name: '박설빈',
      user_id: '선글라스',
      sex: '여성',
      age: 33,
      residence: '광주광역시 어떤 학교 어딘가'
    },
    {
      name: '김예은',
      user_id: 'Yes_kim',
      sex: '여성',
      age: 29,
      residence: '광주광역시 광산구 어딘가'
    },
    {
      name: '유저4',
      user_id: 'blueberry_fago',
      sex: '여성',
      age: 27,
      residence: '광주광역시 서동 어딘가'
    },
    {
      name: '유저5',
      user_id: 'whoami',
      sex: '남성',
      age: 34,
      residence: '광주광역시 나는 누구'
    },
    {
      name: '유저6',
      user_id: 'whereami',
      sex: '남성',
      age: 21,
      residence: '광주광역시 여긴 어딘가 나는 누구'
    },
    {
      name: '유저7',
      user_id: 'Imyoung',
      sex: '여성',
      age: 20,
      residence: '광주광역시 양림동 어딘가'
    },
    {
      name: '유저8',
      user_id: 'apgujeong',
      sex: '여성',
      age: 44,
      residence: '서울특별시 압구정동 어딘가'
    },
    {
      name: '유저9',
      user_id: 'tamla',
      sex: '남성',
      age: 33,
      residence: '제주특별자치도 노형동 어딘가'
    },
    {
      name: '유저10',
      user_id: 'test',
      sex: '여성',
      age: 22,
      residence: '광주광역시 어딘가'
    },
  ];


  // public modal: boolean = false;

  // clickedModalClose() {
  //   this.modal = false;
  // }

  // clickedModal(){
  //   this.modal = true;
  // }
  ngOnInit(): void {
  }
}
