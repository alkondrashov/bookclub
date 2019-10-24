import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { BookComponent } from 'src/book/book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookServiceService } from './book-service.service';

@NgModule({
  declarations: [
	AppComponent,
    DashboardComponent,
    HeaderComponent,
	ContainerComponent,
	BookComponent
  ],
  imports: [
    BrowserModule,
  AppRoutingModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
