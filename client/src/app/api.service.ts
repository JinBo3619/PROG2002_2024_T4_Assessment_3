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

  createDonation(giver: string, amount: number, fundraiseId: number) {
    return this.http.post("/api/fundraiser/donations", {
      giver,
      amount,
      fundraiseId
    })
  }

  createFundraiser(organizer: string, caption: string, targetFunding: number, currentFunding: number, city: string, categoryId: number, active: number) {
    return this.http.post("/api/fundraiser", {
      organizer,
      caption,
      targetFunding,
      currentFunding,
      city,
      categoryId,
      active,
    })
  }

  updateFundraiser(id: number, organizer: string, caption: string, targetFunding: number, currentFunding: number, city: string, categoryId: number, active: number) {
    return this.http.put("/api/fundraiser/" + id, {
      organizer,
      caption,
      targetFunding,
      currentFunding,
      city,
      categoryId,
      active,
    })
  }

  deleteFundraiser(id: number) {
    return this.http.delete("/api/fundraiser/" + id)
  }
}
