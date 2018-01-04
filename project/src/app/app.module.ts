import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TodoComponent } from './todo/todo.component';
import { AppRoutingModule } from './/app-routing.module';
import { TodoService } from './todo.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
