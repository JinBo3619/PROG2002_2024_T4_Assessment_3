import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  organizer = ""
  city = ""
  category = ""
  fundraisers: any = []
  categories: any = []
  errorMsg = ""

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getCategories().subscribe(res => {
      this.categories = res
    })
  }

  searchFundraisers(): void {
    console.log("searchFundraisers method");
    if (!this.organizer && !this.city && !this.category) {
      alert("Please select at least one search condition.");
      return;
    }

    this.api.searchFundraisers(this.organizer, this.city, this.category).subscribe((res: any) => {
      this.errorMsg = ""
      if (res.length > 0) {
        this.fundraisers = res
      } else {
        this.errorMsg = "No fundraisers found. Please try different search criteria."
      }
    })
  }

  clearCheckboxes(): void {
    this.organizer = ""
    this.city = ""
    this.category = ""
    this.fundraisers = []
  }
}
