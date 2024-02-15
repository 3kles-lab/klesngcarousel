# @3kles/kles-ng-carousel
@3kles/kles-ng-carousel is a angular library to create carousel.

## Changelog

Check out the [changelog](./CHANGELOG.md) to check all the latest changes.

## Models

### Interfaces

#### KlesSlide

Interface to set the src of the image to display

- <b>src</b>: string -> Source of the image to display

#### AnimationType

Enum to define the animation between images

- <b>Scale</b>
- <b>Fade</b>
- <b>Flip</b>
- <b>JackInTheBox</b>

#### IndicatorsPosition

Enum to define the position of the indicators

- <b>Below</b>
- <b>On</b>

### Components

- <b>KlesCarouselComponent</b> -> Component to create a carousel

## Install

### npm

```
npm install --save @3kles/kles-ng-carousel
```

## How to use
In the module
```javascript
import { KlesCarouselModule } from '@3kles/kles-ng-carousel';
...
@NgModule({
  imports: [
    KlesCarouselModule,
    ...
  ]
  ...
})
```

Check the [`documentation`](https://doc.3kles-consulting.com) to use component and directive.

## Tests

```
npm install
npm test
```

## License

[`MIT`](./LICENSE.md)
