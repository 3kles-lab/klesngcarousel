import { Component, ViewChild } from '@angular/core';
import { KlesCarouselComponent, AnimationType, KlesSlide, IndicatorsPosition } from 'kles-ng-carousel';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(KlesCarouselComponent) carousel: KlesCarouselComponent;

  animationType = AnimationType.Fade;
  indicatorsPosition = IndicatorsPosition.On;

  animationTypes = [
    {
      name: 'Scale',
      value: AnimationType.Scale
    },
    {
      name: 'Fade',
      value: AnimationType.Fade
    },
    {
      name: 'Flip',
      value: AnimationType.Flip
    },
    {
      name: 'Jack In The Box',
      value: AnimationType.JackInTheBox
    }
  ];
  slides: KlesSlide[] = [
    {
      src:
        'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'
    },
    {
      src:
        'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    },
    {
      src:
        'https://images.unsplash.com/photo-1557800634-7bf3c7305596?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2001&q=80'
    },
    {
      src:
        'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80'
    }
  ];

  constructor() { }

  setAnimationType(type) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
