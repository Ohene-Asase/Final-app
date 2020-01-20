import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { async } from '@angular/core/testing';
import { duration } from 'moment';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  tobeposted = this.formbuilder.group({
    name: '',
    email: '',
    phone_no: '',
    password: '',
    department: '',
    user_type: ''

  });






  constructor(
              private _dataservice: DataService,
              private formbuilder: FormBuilder,
              private http: HttpClient,
              public toastController: ToastController,
              private router: Router
  ) { }

  ngOnInit() {
  }


   Registor(formData:any){
console.log(formData)
this._dataservice.Registor(formData).subscribe(
  async (res:any) => {
    if(res) {
      const toast = await this.toastController.create({
        message:'Account created now sign in',
        duration:4000,
        color:'success',
        position: 'top'
      });
      toast.present()
      this.router.navigate(['/home']);

      this.resetForm()
    }
  },
  async (error) => {

 if(error.status === 401) {
   const toast = await this.toastController.create({
    message:'complete form or check email format',
    duration: 3000,
    color: 'danger',
    position: 'top',
   });
   toast.present();

 }



  }
)

 }


  resetForm(){
    this.tobeposted.reset();
  }




}
