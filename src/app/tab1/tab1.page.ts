import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormGroup,FormBuilder, FormControl, Validators} from '@angular/forms'
import * as moment from 'moment';
import {HttpClient} from '@angular/common/http';
import {DataService} from '../data.service'
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  data = localStorage.getItem('id');

 public minDate = moment().format()
today = new Date()
year = this.today.getFullYear()
month = this.today.getMonth()
day = this.today.getDate()
time = this.today.getTime()





  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private http: HttpClient,
              private _dataservice: DataService,
              private altCtrl: AlertController                      



    ) { }
  
  requestForm = this.formBuilder.group({
    destination: new FormControl('', Validators.required),
    date: new Date(this.year),
    purpose: new FormControl('', Validators.required),
    no_of_people: new FormControl('',Validators.required),
    due_time: new Date(this.time), 
    appuser_id: new FormControl(this.data,Validators.required), 
  });
   



  ngOnInit() {
  
   
  }

requestDriver(requestDetails:any){
  console.log(requestDetails);
  console.log(this.data)
  
  this._dataservice.Request(requestDetails).subscribe(
    async (res:any) => {
       if (res){
        
        const alert = await this.altCtrl.create({
          header: 'Alert',
          message: 'Request sent',
          buttons: ['Ok']
        });
        await alert.present()
       }
      
     this.resetForm()
     
    } 
  )

}


logout(){
  localStorage.removeItem('userData');
  this.router.navigate(['/home']);
}


resetForm(){
 this.requestForm.reset()
 
}


}

