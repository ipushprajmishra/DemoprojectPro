import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HtmlAttributeSelectorComponent } from './html-attribute-selector/html-attribute-selector.component';
import { CssClasseSelectorComponent } from './css-classe-selector/css-classe-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HtmlAttributeSelectorComponent,
    CssClasseSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
