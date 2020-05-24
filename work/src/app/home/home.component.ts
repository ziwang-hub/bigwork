import { Component, OnInit } from '@angular/core';
import { MENUS, PRODUCTS } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menus = MENUS;

  products = PRODUCTS;
  

  constructor() { }

  ngOnInit(): void {
  }

}
