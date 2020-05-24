import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  constructor(private authServer:AuthService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authServer.logout();
  }
}
