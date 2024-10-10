import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index/index.component";
import {DetailComponent} from "./detail/detail.component";
import {SearchComponent} from "./search/search.component";

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: 'search',
    component: SearchComponent
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
