import { Component, OnInit } from '@angular/core';
import { ActionSheetController, ModalController } from '@ionic/angular';

type Index_l = {
  name: string;
  user_id: string;
  gender: string;
  age: number;
  residence: string;
}

// <block:config:0>
const config = {
  type: 'line',
  data: {
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
      data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
      label: "Africa",
      borderColor: "#3e95cd",
      fill: false
    }, {
      data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
      label: "Asia",
      borderColor: "#8e5ea2",
      fill: false
    }, {
      data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
      label: "Europe",
      borderColor: "#3cba9f",
      fill: false
    }, {
      data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
      label: "Latin America",
      borderColor: "#e8c3b9",
      fill: false
    }, {
      data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
      label: "North America",
      borderColor: "#c45850",
      fill: false
    }
    ]
  },
};

@Component({
  selector: 'app-user-profile-edit',
  templateUrl: './user-profile-edit.component.html',
  styleUrls: ['./user-profile-edit.component.scss']
})
export class UserProfileEditComponent implements OnInit {
  modalCtrl: any;
  presentingElement: undefined;

  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  constructor(public modalController: ModalController, private actionSheetCtrl: ActionSheetController) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      cssClass: 'my-custom-class',
    });
    return await modal.present();
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: ModalPage,
  //     cssClass: 'my-custom-class',
  //     componentProps: {
  //       'firstName': 'Douglas',
  //       'lastName': 'Adams',
  //       'middleInitial': 'N'
  //     }
  //   });
  //   return await modal.present();
  // }


  ngOnInit(): void {
    this.presentingElement = document.querySelector('.ion-page');
  }
  canDismiss = async () => {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Are you sure?',
      buttons: [
        {
          text: 'Yes',
          role: 'confirm',
        },
        {
          text: 'No',
          role: 'cancel',
        },
      ],
    });

    actionSheet.present();

    const { role } = await actionSheet.onWillDismiss();

    return role === 'confirm';
  };


  query: string = '';
  searchText: any;



  index_list: Index_l[] = [
    {
      name: '김현우',
      user_id: 'dkanskcj',
      gender: '남성',
      age: 25,
      residence: '광주광역시 어딘가'
    },
    {
      name: '박설빈',
      user_id: '선글라스',
      gender: '여성',
      age: 33,
      residence: '광주광역시 어떤 학교 어딘가'
    },
    {
      name: '김예은',
      user_id: 'Yes_kim',
      gender: '여성',
      age: 29,
      residence: '광주광역시 광산구 어딘가'
    },
    {
      name: '유저4',
      user_id: 'blueberry_fago',
      gender: '여성',
      age: 27,
      residence: '광주광역시 서동 어딘가'
    },
    {
      name: '유저5',
      user_id: 'whoami',
      gender: '남성',
      age: 34,
      residence: '광주광역시 나는 누구'
    },
    {
      name: '유저6',
      user_id: 'whereami',
      gender: '남성',
      age: 21,
      residence: '광주광역시 여긴 어딘가 나는 누구'
    },
    {
      name: '유저7',
      user_id: 'Imyoung',
      gender: '여성',
      age: 20,
      residence: '광주광역시 양림동 어딘가'
    },
    {
      name: '유저8',
      user_id: 'apgujeong',
      gender: '여성',
      age: 44,
      residence: '서울특별시 압구정동 어딘가'
    },
    {
      name: '유저9',
      user_id: 'tamla',
      gender: '남성',
      age: 33,
      residence: '제주특별자치도 노형동 어딘가'
    },
    {
      name: '유저10',
      user_id: 'test',
      gender: '여성',
      age: 22,
      residence: '광주광역시 어딘가'
    },
  ];

  openModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }

}

function ModalPage(ModalPage: any) {
  throw new Error('Function not implemented.');
}

