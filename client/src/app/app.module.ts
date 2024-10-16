import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DonateComponent } from './donate/donate.component';
import { AdminComponent } from './admin/admin.component';
import { CreateFundraiserComponent } from './create-fundraiser/create-fundraiser.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    DetailComponent,
    SearchComponent,
    DonateComponent,
    AdminComponent,
    CreateFundraiserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
