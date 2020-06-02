import { Component } from '@angular/core';
import { ListComponent } from './list/list.component';
import { ModalConfig, ModalController } from '@kirbydesign/designsystem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private modalController: ModalController) {}

  showModal() {
    const config: ModalConfig = {
      title: 'List in  modal',
      flavor: 'modal',
      component: ListComponent
    };
    this.modalController.showModal(config);
  }
}
