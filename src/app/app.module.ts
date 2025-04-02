import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/views/details/details.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/views/home/home.component';
import { MatIconModule } from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { PokemonSimpleCardComponent } from './components/views/home/pokemon-simple-card/pokemon-simple-card.component';
import { LoadingSpinnerComponent } from './components/layout/loading-spinner/loading-spinner.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarComponent } from './components/views/home/search-bar/search-bar.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MyhoverDirective } from './directives/myhover.directive';
import {MatTabsModule} from '@angular/material/tabs';
import { StatsChartComponent } from './components/views/details/stats-chart/stats-chart.component';
import { MyErrorInterceptor } from './interceptors/myError.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DetailsComponent,
    PokemonSimpleCardComponent,
    LoadingSpinnerComponent,
    SearchBarComponent,
    MyhoverDirective,
    StatsChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTooltipModule,
    MatTabsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
