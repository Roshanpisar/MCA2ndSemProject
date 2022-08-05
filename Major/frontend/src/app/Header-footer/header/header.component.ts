import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user=JSON.parse(sessionStorage.getItem('user'));
  userName=this.user.name;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  //For clear session
logout(){
  sessionStorage.removeItem('user');
  localStorage.removeItem('user');
  localStorage.removeItem('rememberMe');
  this.router.navigate(['/login']);
}
}
