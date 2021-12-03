import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekenmachine',
  templateUrl: './rekenmachine.component.html',
  styleUrls: ['./rekenmachine.component.css']
})
export class RekenmachineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
invoer: number;
som: string; 
eerstegetal: number; 
tweedegetal: number; 

}