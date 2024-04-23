import { Component } from '@angular/core';

@Component({
  selector: 'app-lower',
  templateUrl: './lower.component.html',
  styleUrls: ['./lower.component.css']
})
export class LowerComponent {
  imageSrc1: string = './assets/big_teacher.png';
  imageSrc2: string = './assets/big_question.png';
  imageSrc3: string = './assets/big_group.png';
  imageSrc4: string = './assets/big_social.png';

  isHovered1: boolean = false;
  isHovered2: boolean = false;
  isHovered3: boolean = false;
  isHovered4: boolean = false;

  toggleHover1() {
    this.isHovered1 = !this.isHovered1;
  }

  toggleHover2() {
    this.isHovered2 = !this.isHovered2;
  }

  toggleHover3() {
    this.isHovered3 = !this.isHovered3;
  }

  toggleHover4() {
    this.isHovered4 = !this.isHovered4;
  }
}
