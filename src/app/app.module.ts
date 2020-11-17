import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ScullyLibModule } from '@scullyio/ng-lib';

import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { PageComponent } from './page/page/page.component';

@NgModule({
  declarations: [AppComponent, PageComponent],
  imports: [BrowserModule, ComponentsModule, AppRoutingModule, ScullyLibModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
