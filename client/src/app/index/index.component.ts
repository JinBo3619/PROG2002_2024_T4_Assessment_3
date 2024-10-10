import {Component, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent implements OnInit{
  fundraisers: any = []

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getFundraisers().subscribe(res => {
      this.fundraisers = res
    })
  }

}
