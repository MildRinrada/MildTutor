import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    // Define a property to track the image source
    imageSrc: string = './assets/Twitter_icon.png';
    imageSrc2: string = './assets/Instagram_icon.png';
    imageSrc3: string = './assets/Facebook_icon.png';
    imageSrc4: string = './assets/Youtube_icon.png';
    isActive: boolean = false;
  
    // Method to toggle the image source and active state
    toggleImage() {
      this.isActive = !this.isActive;
      this.imageSrc = this.isActive ? './assets/Twitter_icon2.png' : './assets/Twitter_icon.png';
    }
    toggleImage2() {
      this.isActive = !this.isActive;
      this.imageSrc2 = this.isActive ? './assets/Instagram_icon2.png' : './assets/Instagram_icon.png';
    }
    toggleImage3() {
      this.isActive = !this.isActive;
      this.imageSrc3 = this.isActive ? './assets/Facebook_icon2.png' : './assets/Facebook_icon.png';
    }
    toggleImage4() {
      this.isActive = !this.isActive;
      this.imageSrc4 = this.isActive ? './assets/Youtube_icon2.png' : './assets/Youtube_icon.png';
    }
}
