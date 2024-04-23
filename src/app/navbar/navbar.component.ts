import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;


  isSidebarOpen: boolean = false;

  toggleMenu() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  menu: any;

  imageSrc1: string = './assets/twitter.png';
  imageSrc2: string = './assets/ig.png';
  imageSrc3: string = './assets/fb.png';
  imageSrc4: string = './assets/youtube.png';

  changeImage1(newSrc: string) {
    this.imageSrc1 = newSrc;
  }

  changeImage2(newSrc: string) {
    this.imageSrc2 = newSrc;
  }

  changeImage3(newSrc: string) {
    this.imageSrc3 = newSrc;
  }

  changeImage4(newSrc: string) {
    this.imageSrc4 = newSrc;
  }
  
  
}
