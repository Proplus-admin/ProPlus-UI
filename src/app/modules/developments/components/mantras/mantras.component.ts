import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { EToaster } from 'src/app/shell/enums/toaster';
import { CommunicationService } from 'src/app/shell/services/communication/communication.service';

@Component({
  selector: 'app-mantras',
  templateUrl: './mantras.component.html',
  styleUrls: ['./mantras.component.scss'],
})
export class MantrasComponent implements OnInit {

  image = '../../../../../assets/images/view10.jpg';

  scheduleForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private commService: CommunicationService,
  ) { }

  ngOnInit(): void {
    this.scheduleForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  submit(): void {
    const { name, email, phone, message } = this.scheduleForm.value;
    const payload = {
      subject: `Mantras: ProPlus`,
      htmlBody: `
      <p>${message}</p>
      <p style="margin: 0;"> Name: ${name}</p>
      <p style="margin: 0;"> Phone: ${phone}</p>
      <p style="margin: 0;"> Email: ${email}</p>`,
    };
    this.sharedService.sendEmail(payload).subscribe((res) => {
      this.commService.showToaster({ type: EToaster.Success, message: 'Mail sent Successfully' });
    }, () => {
      this.commService.showToaster({ type: EToaster.Failed, message: 'Failed to send mail' });
    });
  }

}
