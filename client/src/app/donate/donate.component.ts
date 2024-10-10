import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent {
  id = ""
  organizer = ""
  caption = ""
  targetFunding = ""
  currentFunding = ""
  city = ""
  category = ""
  status = ""

  giver = ""
  amount = 5

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((res: any) => {
      this.id = res.id
      this.api.getFundraiserById(res.id).subscribe((res1: any) => {
        this.organizer = res1.ORGANIZER;
        this.caption = res1.CAPTION;
        this.targetFunding = res1.TARGET_FUNDING;
        this.currentFunding = res1.CURRENT_FUNDING;
        this.city = res1.CITY;
        this.category = res1.CATEGORY_NAME;
        this.status = res1.ACTIVE === 1 ? 'Active' : 'Inactive';
      })
    })
  }

  submitDonation() {
    if (this.giver && this.amount) {
      if (this.amount < 5) {
        alert("The minimum of donation is 5 AUD")
      } else {
        this.api.createDonation(this.giver, this.amount, Number(this.id)).subscribe(res => {
          alert("Thank you for your donation to " + this.caption)
          this.giver = ""
          this.amount = 5
        })
      }
    } else {
      alert("Please enter giver and amount.")
    }
  }
}
