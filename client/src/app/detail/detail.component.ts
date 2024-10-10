import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  organizer = ""
  caption = ""
  targetFunding = ""
  currentFunding = ""
  city = ""
  category = ""
  status = ""

  constructor(
    private api: ApiService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((res: any) => {
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

  handleDonateClick() {
    alert("This feature is under contruction")
  }
}
