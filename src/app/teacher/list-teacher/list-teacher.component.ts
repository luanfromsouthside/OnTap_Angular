import { TeacherService } from './../../service/teacher.service';
import { Teacher } from './../../service/teacher.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent implements OnInit {
  teachers: Teacher[]
  constructor(private teacherSV: TeacherService) { }

  ngOnInit(): void {
    this.teachers = this.teacherSV.teachers;
  }

}
