import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardsComponent } from './components/cards/cards.component';
import {
  CarouselComponent,
  CarouselInnerComponent,
  CarouselIndicatorsComponent,
  CarouselCaptionComponent,
  CarouselItemComponent,
} from '@coreui/angular';
@NgModule({
  declarations: [AppComponent, MenuBarComponent, HomeComponent, CardsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselComponent,
    CarouselCaptionComponent,
    CarouselIndicatorsComponent,
    CarouselItemComponent,
    CarouselInnerComponent,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
