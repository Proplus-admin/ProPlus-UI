import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppContants } from 'src/app/app.constant';
import { SharedService } from 'src/app/shared/services/shared.service';
import { EToaster } from 'src/app/shell/enums/toaster';
import { CommunicationService } from 'src/app/shell/services/communication/communication.service';

@Component({
  selector: 'app-contact-agent',
  templateUrl: './contact-agent.component.html',
  styleUrls: ['./contact-agent.component.scss'],
})
export class ContactAgentComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private sharedService: SharedService,
    private commService: CommunicationService,
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      location: '',
      propertyType: '',
      priceRange: '',
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      additionalInfo: '',
    });
  }

  submit(): void {
    const {
      location,
      propertyType,
      priceRange,
      name,
      email,
      phone,
      additionalInfo,
    } = this.contactForm.value;
    const payload = {
      subject: `For Agent: ProPlus`,
      htmlBody: `
      <p>${additionalInfo}</p>
      <p style="margin: 0;"> Name: ${name}</p>
      <p style="margin: 0;"> Phone: ${phone}</p>
      <p style="margin: 0;"> Email: ${email}</p>
      <p style="margin: 0;"> Location: ${location}</p>
      <p style="margin: 0;"> Property Type: ${propertyType}</p>
      <p style="margin: 0;"> Price Range: ${priceRange}</p>`,
    };
    this.sharedService.sendEmail(payload).subscribe((res) => {
      this.commService.showToaster({ type: EToaster.Success, message: 'Mail sent Successfully' });
    }, () => {
      this.commService.showToaster({ type: EToaster.Failed, message: 'Failed to send mail' });
    });
  }

}
