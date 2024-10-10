import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-fundraiser',
  templateUrl: './create-fundraiser.component.html',
  styleUrl: './create-fundraiser.component.css'
})
export class CreateFundraiserComponent {
  id = ""
  organizer = ""
  caption = ""
  targetFunding = ""
  currentFunding = ""
  city = ""
  category = 0
  status = 0

  categories: any = []

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(res => {
      if (res['id']) {
        this.id = res['id']
        this.api.getFundraiserById(res['id']).subscribe((res: any) => {
          this.organizer = res.ORGANIZER;
          this.caption = res.CAPTION;
          this.targetFunding = res.TARGET_FUNDING;
          this.currentFunding = res.CURRENT_FUNDING;
          this.city = res.CITY;
          this.category = res.CATEGORY_NAME;
          this.status = res.ACTIVE;
        })
      }
    })
  }

  ngOnInit(): void {
    this.api.getCategories().subscribe(res => {
      this.categories = res
    })
  }

  create() {
    if (!this.organizer || !this.caption || !this.targetFunding || !this.currentFunding || !this.city || !this.category) {
      alert("Please input all fields.");
      return;
    }

    if (Number(this.targetFunding) < 10 || Number(this.currentFunding) < 10) {
      alert("Funding should over 10.");
      return;
    }

    if (this.id) {
      this.api.updateFundraiser(Number(this.id), this.organizer, this.caption, Number(this.targetFunding), Number(this.currentFunding), this.city, this.category, this.status).subscribe(res => {
        alert("Update Success!");
        this.router.navigate(['/admin'])
      })
    } else {
      this.api.createFundraiser(this.organizer, this.caption, Number(this.targetFunding), Number(this.currentFunding), this.city, this.category, this.status).subscribe(res => {
        alert("Create Success!");
        this.router.navigate(['/admin'])
      })
    }

  }
}
