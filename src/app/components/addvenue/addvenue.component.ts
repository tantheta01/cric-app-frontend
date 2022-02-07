import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FormService } from '../../form.service';
import { venue } from '../../venue';

@Component({
  selector: 'app-addvenue',
  templateUrl: './addvenue.component.html',
  styleUrls: ['./addvenue.component.scss'],
})

export class ContactFormComponent implements OnInit {
  venueForm =  new FormGroup({
    venue_name: new FormControl('',[Validators.required]),
    city_name: new FormControl('', [Validators.required]),
    country_name: new FormControl('',[Validators.required]),
    capacity: new FormControl('',[Validators.required]),
  });

  validResponse =  new FormGroup({
    venue_name: new FormControl('',[Validators.required]),
    city_name: new FormControl('', [Validators.required]),
    country_name: new FormControl('',[Validators.required]),
    capacity: new FormControl('',[Validators.required]),
  });

  constructor(private formService: FormService, private fb:FormBuilder){}

  ngOnInit() {
    this.getValue();
  } 
  message = '';
  showMsg = false;
  success = false;
  getValue()
  {
    this.formService
      .getValue()
      .subscribe(
        (venue:any) =>{
          this.venueForm = this.fb.group(venue);
          this.success = true;
          this.message = 'Form Retrieved successfully';
          this.showMsg=true;
        },
        (error:any) => {
          this.success = false;
          this.message = 'Form Retrieval failed';
          this.showMsg=true;
        }
        );
  }
  
  onSubmit() {
    this.showMsg = false;
    if(this.venueForm.valid){
    this.formService
      .submit(this.venueForm.value)
      .subscribe(
        (venue:any) => {
          this.message = 'Form successfully submitted';
          this.success = true;
          this.showMsg = true;
          this.validResponse =  this.fb.group(venue);
          // this.contactForm.reset();
        },
        (error:any) => {
          this.message = 'Form submission failed';
          this.success = false;
          this.showMsg = true;
        }
        );
  }
}
}