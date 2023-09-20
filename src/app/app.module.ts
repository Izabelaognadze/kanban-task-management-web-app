import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DesignSystemModule } from './design-system/design-system.module'
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesignSystemModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
