import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private lin : LoginserviceService,private router : Router) { }

  ngOnInit(): void {
  }


}
