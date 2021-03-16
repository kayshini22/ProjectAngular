import { CommonModule } from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { userService } from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { EncrDecrServiceService } from './services/encr-decr-service.service';
import { ProfileComponent } from './profile/profile.component';
import { AddcomponentComponent } from './addcomponent/addcomponent.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FlightService } from './services/flight.service';
import { GetflightsComponent } from './getflights/getflights.component';
import { AddflightComponent } from './addflight/addflight.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SchedulelistComponent } from './schedulelist/schedulelist.component';
import { UpdatescheduleComponent } from './updateschedule/updateschedule.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { SearchFlightComponent } from './flightsearch/flightsearch.component';
import { SeatLayoutComponent } from './seatlayout/seatlayout.component';
import { SeatLayoutService } from "./services/seatLayout.service";
import { FlightsearchService } from "./services/flightsearch.service";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { DisplayflightsComponent } from './displayflights/displayflights.component';
import { PassengerService } from "./services/passenger.service";
import { TicketComponent } from './ticket/ticket.component';
import { BookingService } from "./services/booking.service";
import { TicketService } from "./services/ticket.service";
import { TicketpdfComponent } from './ticketpdf/ticketpdf.component';
import { ReturnflightsService } from "./services/returnflights.service";
import { SeatlayoutreturnComponent } from './seatlayoutreturn/seatlayoutreturn.component';
import { RevisedupdateflightComponent } from './revisedupdateflight/revisedupdateflight.component';
import { ReturnticketService } from "./services/returnticket.service";
import { BookinghistoryComponent } from './bookinghistory/bookinghistory.component';
import { CancelticketService } from "./services/cancelticket.service";
import { BookinghistoryService } from "./services/bookinghistory.service";
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { CancelledComponent } from './cancelled/cancelled.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FareComponent } from './fare/fare.component';
import { FareService } from "./services/fare.service";
import { ReturnfareService } from "./services/returnfare.service";
import { ForgetpasswordService } from "./services/forgetpassword.service";
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    AddcomponentComponent,
    CheckoutComponent,
    GetflightsComponent,
    AddflightComponent,
    ScheduleComponent,
    SchedulelistComponent,
    UpdatescheduleComponent,
    AdminComponent,
    AdminloginComponent,
    SearchFlightComponent,
    SeatLayoutComponent,
    DisplayflightsComponent,
    TicketComponent,
    TicketpdfComponent,
    SeatlayoutreturnComponent,
    RevisedupdateflightComponent,
    BookinghistoryComponent,
    ConfirmedComponent,
    CancelledComponent,
    HeaderComponent,
    FooterComponent,
    FareComponent,
    ForgetpasswordComponent,
    ResetpasswordComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TooltipModule.forRoot()
  ],
  providers: [userService,EncrDecrServiceService,FlightService,SeatLayoutService,FlightsearchService,PassengerService,BookingService,
  TicketService,ReturnflightsService,ReturnticketService,CancelticketService,BookinghistoryService,FareService,ReturnfareService,ForgetpasswordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
