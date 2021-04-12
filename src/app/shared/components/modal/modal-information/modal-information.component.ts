import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from './../../../services/modal.service';

@Component({
  selector: 'app-modal-information',
  templateUrl: './modal-information.component.html',
  styleUrls: ['./modal-information.component.scss'],
})
export class ModalInformationComponent {
  @Input() message = '';

  constructor(public modalService: ModalService) {}

  onSuccess(): void {
    this.modalService.isShow = false;
  }
}
