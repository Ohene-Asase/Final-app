import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpPageRoutingModule } from './sign-up-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { SignUpPage } from './sign-up.page';

import {HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpPageRoutingModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [SignUpPage]
})
export class SignUpPageModule {}
