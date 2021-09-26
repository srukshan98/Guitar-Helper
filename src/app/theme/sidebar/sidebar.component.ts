import { RouteInfo } from './../../model/route-info.model';
import { RouteConfig } from './../../config/route.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: RouteInfo[];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = RouteConfig.filter(menuItem => menuItem);
  }
  
  isMobileMenu(): boolean {
      if (window.innerWidth > 991) {
          return false;
      }
      return true;
  };
}
