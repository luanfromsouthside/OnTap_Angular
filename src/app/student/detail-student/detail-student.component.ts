import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../../service/student.service';
import { Student } from './../../service/student.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrls: ['./detail-student.component.css']
})
export class DetailStudentComponent implements OnInit {
  std: Student | undefined;
  id: number = 0;
  constructor(
    private studentSV: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.id = +params['id'];
        this.std = this.studentSV.selectStd(this.id);
      }
    )
  }

  onEdit() {
    this.router.navigateByUrl('/student/edit/'+this.id)
  }

  onDelete() {
    this.studentSV.deleteStudent(this.id);
    console.log(this.id)
  }

}
