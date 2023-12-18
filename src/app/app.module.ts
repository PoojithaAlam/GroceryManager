import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppGroceryComponent } from './app-grocery/app-grocery.component';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AppGroceryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppGroceryComponent]
})
export class AppModule { }
