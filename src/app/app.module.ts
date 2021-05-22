import { DropdownDirective } from './directive/dropdown.directive';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { StudentComponent } from './student/student.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { StudentItemComponent } from './student/list-student/student-item/student-item.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListTeacherComponent,
    ListStudentComponent,
    StudentComponent,
    EditStudentComponent,
    DetailStudentComponent,
    StudentItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
