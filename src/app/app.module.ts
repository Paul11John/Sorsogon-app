import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BackgroundComponent } from './background/background.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivitiesComponent } from './activities/activities.component';
import { OthersComponent } from './others/others.component';
import { EventComponent } from './event/event.component';
import { BookingComponent } from './booking/booking.component';
import { EatComponent } from './eat/eat.component';
import { ProductComponent } from './product/product.component';
import { StayComponent } from './stay/stay.component';
import { VenuesComponent } from './venues/venues.component';
import { VisitComponent } from './visit/visit.component';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SignInComponent,
    BackgroundComponent,
    ActivitiesComponent,
    OthersComponent,
    EventComponent,
    BookingComponent,
    EatComponent,
    ProductComponent,
    StayComponent,
    VenuesComponent,
    VisitComponent,
    WeatherComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
