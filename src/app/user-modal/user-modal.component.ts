import { Component, Input, OnInit } from '@angular/core';
// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})

export class UserModalComponent implements OnInit {

  // @Input() name;

  // constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
// @Component({selector: 'ngbd-modal-component', templateUrl: './modal-component.html'})
// export class NgbdModalComponent {
//   constructor() {}

//   open() {
//     const modalRef = this.modalService.open(NgbdModalContent);
//     modalRef.componentInstance.name = 'World';
//   }
// }