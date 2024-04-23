import { Component } from '@angular/core';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent {
  // Define a property to track the image source
  imageSrc: string = './assets/คลิกเพื่อสมัครคอร์สเรียน.png';
  imageSrc2: string = './assets/ดูคอร์สเรียน.png';
  imageSrc3: string = './assets/6 เทคนิค.png';
  isActive: boolean = false;

  // Method to toggle the image source and active state
  toggleImage() {
    this.isActive = !this.isActive;
    this.imageSrc = this.isActive ? './assets/คลิกเพื่อสมัครคอร์สเรียน2.png' : './assets/คลิกเพื่อสมัครคอร์สเรียน.png';
  }
  toggleImage2() {
    this.isActive = !this.isActive;
    this.imageSrc2 = this.isActive ? './assets/ดูคอร์สเรียน2.png' : './assets/ดูคอร์สเรียน.png';
  }
  toggleImage3() {
    this.isActive = !this.isActive;
    this.imageSrc3 = this.isActive ? './assets/6 เทคนิค2.png' : './assets/6 เทคนิค.png';
  }
}
