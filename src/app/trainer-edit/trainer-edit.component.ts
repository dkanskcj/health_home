import { Component, OnInit } from '@angular/core';

type Index_l = {
  name: string;
  trainer_id: string;
  gender: string;
  age: number;
  residence: string;
}
type prize_l = {
  name: string;
  prize: string;
  group: string;
  check: boolean;
}

@Component({
  selector: 'app-trainer-edit',
  templateUrl: './trainer-edit.component.html',
  styleUrls: ['./trainer-edit.component.scss']
})
export class TrainerEditComponent implements OnInit {

  constructor() { }
  
  isModalOpen = false;

  setOpen(isOpen: boolean) {
      return this.isModalOpen = isOpen;
  }

  ngOnInit(): void {
  }


  prize_list: prize_l[] = [
    {
      name: '2022년',
      prize: 'MC, 개그맨',
      group: '안테나',
      check: true
    },
    {
      name: '2021년',
      prize: '백상예술대상 TV부문 대상',
      group: '방송국',
      check: false
    },
    {
      name: '2020년',
      prize: '방송연예대상 대상 (놀면 뭐하니?)',
      group: 'MBC, 놀면 뭐하니',
      check: false
    },
  ]
  searchText: any;
  index_list: Index_l[] = [
    {
      name: '김예은',
      trainer_id: '헬스짱짱',
      gender: '여성',
      age: 29,
      residence: '광주광역시 어딘가'
    },
    {
      name: '박설빈',
      trainer_id: '운동은밥먹듯이',
      gender: '여성',
      age: 33,
      residence: '광주광역시 어딘가'
    },
    {
      name: '김현우',
      trainer_id: 'dkanskcj',
      gender: '남성',
      age: 25,
      residence: '광주광역시 어딘가'
    },
  ]
}
