import { Component, OnInit } from '@angular/core';
import { EToaster } from '../../enums/toaster';
import { IToaster } from '../../models/toaster-model';
import { CommunicationService } from '../../services/communication/communication.service';

@Component({
  selector: 'app-shell-home',
  templateUrl: './shell-home.component.html',
  styleUrls: ['./shell-home.component.scss']
})
export class ShellHomeComponent implements OnInit {

  logo = '../../../../assets/images/logo.png';

  isSideNavOpened = false;

  toaster!: IToaster | any;
  showToaster = false;

  constructor(
    private commService: CommunicationService,
  ) { }

  ngOnInit(): void {
    this.listenToaster();
  }

  listenToaster(): void {
    this.commService.toaster$.subscribe((res) => {
      this.toaster = res;
      this.showToaster = true;
      setTimeout(() => {
        this.showToaster = false;
        this.toaster = null;
      }, 3000);
    });
  }

  toasterType(): string {
    if (this.toaster) {
      switch (this.toaster.type) {
        case EToaster.Failed:
          return 'bg-danger';
        case EToaster.Success:
          return 'bg-success';
        case EToaster.Warning:
          return 'bg-warning';
      }
    }
    return '';
  }

}
