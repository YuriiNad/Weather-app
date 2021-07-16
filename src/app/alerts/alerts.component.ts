import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  erroalert() {  
    Swal.fire({  
      icon: 'error',  
      title: 'Something went wrong!',  
      text: 'Input is empty, or incorrect city name! Please try again!',  
      allowOutsideClick: false,
      confirmButtonColor: "#F27474",
    })
  }  
}  
