import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  id = ""
  organizer = ""
  caption = ""
  targetFunding = ""
  currentFunding = ""
  city = ""
  category = ""
  status = ""

  donations: any = []

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

  ngOnInit(): void {
    this.api.getFundraiserDonations(Number(this.id)).subscribe(res => {
      this.donations = res
    })
  }

  handleDonateClick() {
    // alert("This feature is under contruction")

    this.router.navigate(['/donation/' + this.id])
  }
}
