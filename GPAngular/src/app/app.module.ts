import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GPABySubtractionComponent } from './gpa-by-subtraction/gpa-by-subtraction.component';
import { GPAForCollegeComponent } from './gpa-for-college/gpa-for-college.component';
import { GPAForSemesterComponent } from './gpa-for-semester/gpa-for-semester.component';
import { GPAForClassComponent } from './gpa-for-class/gpa-for-class.component';

@NgModule({
  declarations: [
    AppComponent,
    GPABySubtractionComponent,
    GPAForCollegeComponent,
    GPAForSemesterComponent,
    GPAForClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
