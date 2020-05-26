import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { HomeComponent } from './front/home/home.component';
import { AboutComponent } from './front/about/about.component';
import { ServicesComponent } from './front/services/services.component';
import { ContactComponent } from './front/contact/contact.component';
import { MenuComponent } from './commun/menu/menu.component';
import { FooterComponent } from './commun/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      [
        { path : "", component : HomeComponent},
        { path : "about", component : AboutComponent},
        { path : "services" , component : ServicesComponent},
        { path : "contact", component : ContactComponent}
      ]
    ),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
