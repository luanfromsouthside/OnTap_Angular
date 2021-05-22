import { ActivatedRoute } from '@angular/router';
import { StudentService } from './../../../service/student.service';
import { Student } from './../../../service/student.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.css']
})
export class StudentItemComponent implements OnInit {
  @Input() std!: Student;
  @Input() index!: number | undefined;
  constructor( ) { }

  ngOnInit(): void {
  }

}
