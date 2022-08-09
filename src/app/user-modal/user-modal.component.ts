import { Component, OnInit } from '@angular/core';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  // @ViewChild(IonModal) modal: IonModal;

  message = '';
  name: string = 'string';

  
  // cancel(){
  //   this.modal.dismiss(null, 'cancel');
  // }
  // confirm(){
  //   this.modal.dismiss(this.name, 'confirm');
  // }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = 'Hello, ${ev.detail.data}!';
    }
  }



  constructor(public modalController: ModalController) { }

  // constructor(
  //   private modalContorller: ModalController
  // ) { }

  ngOnInit(): void {
  }

  // async createModal() {
  //   const modal = await this.modalContorller.create({
  //     component: UserModalComponent,
  //   })
  //   modal.present();
  // }
}