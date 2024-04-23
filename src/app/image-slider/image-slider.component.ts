import { Component,Input } from '@angular/core';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  hidden = false;
  @Input() slides: any[] = [];
  @Input() indicatorVisible = true;
  @Input() animationSpeed = 500;
  currentSlide = 0;
  next() {
    let currentSlide = (this.currentSlide + 1) % this.slides.length;
    this.jumpToSlide(currentSlide)
  }
  previous(){
    let currentSlide = (this.currentSlide - 1) % this.slides.length;
    this.jumpToSlide(currentSlide)
  }
  jumpToSlide(index: number){
    this.hidden = true;
    setTimeout(() => {
    this.currentSlide = index;
    this.hidden = false;
    }, this.animationSpeed);
  }


}
