import { ListTeacherComponent } from './teacher/list-teacher/list-teacher.component';
import { EditStudentComponent } from './student/edit-student/edit-student.component';
import { DetailStudentComponent } from './student/detail-student/detail-student.component';
import { StudentComponent } from './student/student.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/student',
    pathMatch: 'full'
  },
  {
    path: 'student',
    component: StudentComponent,
    children: [
      {
        path: '', component: DetailStudentComponent
      },
      {
        path:'detail/:id',component:DetailStudentComponent,
      },
      {
        path:'edit/:id', component: EditStudentComponent
      },
      {
        path: 'new', component: EditStudentComponent
      },
    ]
  },
  {
    path: 'teacher',
    component: ListTeacherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
