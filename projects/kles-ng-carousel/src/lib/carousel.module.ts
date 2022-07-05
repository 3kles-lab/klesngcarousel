import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { KlesCarouselComponent } from "./carousel.component";

const components = [KlesCarouselComponent];


@NgModule({
    declarations: [
        components
    ],
    imports: [BrowserModule, FormsModule, BrowserAnimationsModule],
    entryComponents: [
        components
    ],
    exports: [
        components,
    ],
})
export class KlesCarouselModule { }