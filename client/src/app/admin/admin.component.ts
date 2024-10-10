import { Component } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  fundraisers: any = []

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getFundraisers()
  }

  getFundraisers() {
    this.api.getFundraisers().subscribe(res => {
      this.fundraisers = res
    })
  }

  deleteFundraiser(id: number) {
    this.api.deleteFundraiser(id).subscribe(res => {
      alert("Delete Success.")
      this.getFundraisers()
    })
  }
}
