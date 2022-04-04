import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/shared/services/shared.service';
import { EToaster } from 'src/app/shell/enums/toaster';
import { CommunicationService } from 'src/app/shell/services/communication/communication.service';

@Component({
  selector: 'app-contact-home',
  templateUrl: './contact-home.component.html',
  styleUrls: ['./contact-home.component.scss'],
})
export class ContactHomeComponent implements OnInit {

  image = '../../../../../assets/images/view3.jpg';

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private commService: CommunicationService,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      message: '',
    });
  }

  submit(): void {
    const { name, email, phone, message } = this.contactForm.value;
    const payload = {
      subject: `Contact: ProPlus`,
      htmlBody: `
      <p>${message}</p>
      <p style="margin: 0;"> Name: ${name}</p>
      <p style="margin: 0;">Phone: ${phone}</p>
      <p style="margin: 0;">Email: ${email}</p>`,
    };
    this.sharedService.sendEmail(payload).subscribe((res) => {
      this.contactForm.reset();
      this.commService.showToaster({ type: EToaster.Success, message: 'Mail sent Successfully' });
    }, () => {
      this.commService.showToaster({ type: EToaster.Failed, message: 'Failed to send mail' });
    });
  }

}
