import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {DetailComponent} from "./detail/detail.component";
import {SearchComponent} from "./search/search.component";
import {DonateComponent} from "./donate/donate.component";
import {AdminComponent} from "./admin/admin.component";
import {CreateFundraiserComponent} from "./create-fundraiser/create-fundraiser.component";

const routes: Routes = [
  {
    path: 'donation/:id',
    component: DonateComponent
  },
  {
    path: 'create-fundraiser',
    component: CreateFundraiserComponent
  },
  {
    path: 'edit-fundraiser/:id',
    component: CreateFundraiserComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
