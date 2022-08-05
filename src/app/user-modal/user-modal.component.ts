import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent implements OnInit {

  constructor(
    private modalContorller: ModalController
  ) { }

  ngOnInit(): void {
  }
  
  async createModal() {
    const modal = await this.modalContorller.create({
      component: UserModalComponent,
    })
    modal.present();
  }
}