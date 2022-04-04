import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';


interface IImage {
  image: string;
  caption?: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit, OnChanges, OnDestroy {
  @Input() images: IImage[] = [];
  @Input() caption: boolean = false;
  @Input() randomTrans: boolean = false;
  @Input() slideAnimationClass = 'animate__fadeInRight';

  oldImage: IImage | null = null;
  newImage: IImage | null = null;
  imageIndex = 0;

  sliderImageAnimation = [
    'animate__fadeIn',
    'animate__fadeInLeft',
    'animate__fadeInRight',
    'animate__fadeInDown',
    'animate__fadeInUp',
    'animate__slideInLeft',
    'animate__slideInUp',
    'animate__zoomIn',
    'animate__zoomIn',
  ];

  isCompDestroyed = false;


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.setImage();
  }

  ngOnDestroy(): void {
    this.isCompDestroyed = true;
  }

  changeImage(): void {
    this.imageIndex = this.imageIndex + 1;
    this.setImage();
  }

  setImage(): void {
    if (this.images.length === this.imageIndex) {
      this.imageIndex = 0;
    }
    if (this.randomTrans) {
      this.slideAnimationClass = this.sliderImageAnimation[Math.floor(Math.random() * this.sliderImageAnimation.length)];
    }
    this.newImage = this.images[this.imageIndex];
    setTimeout(() => {
      this.oldImage = this.newImage;
      this.newImage = null;
      setTimeout(() => {
        if (!this.isCompDestroyed) {
          this.changeImage();
        }
      }, 100);
    }, 3000);
  }

}
