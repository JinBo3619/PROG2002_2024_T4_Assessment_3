import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFundraisers() {
    console.log("fetchFundraisers method");
    return this.http.get("/api/fundraisers")
  }

  getFundraiserById(id: number) {
    return this.http.get("/api/fundraiser/" + id)
  }

  searchFundraisers(organizer: string, city: string, category: string) {
    console.log("searchFundraisers method");
    return this.http.get(`/api/search?organizer=${organizer}&city=${city}&category=${category}`)
  }

  getCategories() {
    return this.http.get("/api/categories")
  }

  getFundraiserDonations(id: number) {
    return this.http.get(`/api/fundraiser/${id}/donations`)
  }
}
