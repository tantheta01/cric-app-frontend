import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,  Validators } from '@angular/forms';
import { CricketService } from '../cricket.service';
@Component({
  selector: 'app-addvenue',
  templateUrl: './addvenue.component.html',
  styleUrls: ['./addvenue.component.scss']
})
export class AddvenueComponent implements OnInit {

  add_venue = new FormGroup({
		venue_name : new FormControl('', [Validators.required]),
		city_name : new FormControl('', [Validators.required]),
		
    country_name : new FormControl('', [Validators.required]),
    capacity : new FormControl(0, [Validators.required]),
  })
  constructor(public cricserv : CricketService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log("haan bhai sahi hai");
    if(this.add_venue.valid){
      console.log("is Valid");
      this.cricserv.addVenue(this.add_venue.controls['venue_name'].value, this.add_venue.controls['city_name'].value, this.add_venue.controls['country_name'].value, this.add_venue.controls['capacity'].value).subscribe({
        next : answer => {
          window.alert(JSON.stringify(answer));
        },
        error : err => {
          window.alert(JSON.stringify(err));
        }
      })
    }
  }

}
