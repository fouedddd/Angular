import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VetementsComponent } from './vetements/vetements.component';
import { AddVetementComponent } from './add-vetement/add-vetement.component';
import { FormsModule } from '@angular/forms';
import { UpdateVetementComponent } from './update-vetement/update-vetement.component';

@NgModule({
  declarations: [
    AppComponent,
    VetementsComponent,
    AddVetementComponent,
    UpdateVetementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
