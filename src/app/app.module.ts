import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrbitListComponent } from './orbit-list/orbit-list.component';
import { OrbitCountsComponent } from './orbit-counts/orbit-counts.component';

@NgModule({
  declarations: [
    AppComponent,
    OrbitListComponent,
    OrbitCountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
