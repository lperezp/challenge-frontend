import { Component, OnInit } from '@angular/core';

import { AppSettings } from './../../../../shared/app.settings';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.scss'],
})
export class AdminHeaderComponent implements OnInit {
  menu = AppSettings.MENU;
  isMenuVisible = false;
  constructor() {}

  ngOnInit(): void {}

  closeMenu(): void {
    this.isMenuVisible = false;
  }
  openMenu(): void {
    this.isMenuVisible = true;
  }
}
