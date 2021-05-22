import { Student } from './../../service/student.model';
import { StudentService } from './../../service/student.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
  students: Student[] = [];
  constructor(
    private studentSV: StudentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.students = this.studentSV.student;
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo:this.route})
  }

}
