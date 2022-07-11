import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KlesCarouselComponent } from './carousel.component';

const components = [KlesCarouselComponent];


@NgModule({
    declarations: [
        components
    ],
    imports: [CommonModule, FormsModule],
    entryComponents: [
        components
    ],
    exports: [
        components,
    ],
})
export class KlesCarouselModule { }