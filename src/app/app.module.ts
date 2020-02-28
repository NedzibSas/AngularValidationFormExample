import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: 'text',    component: TextComponent }
]; 

export class AppRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
