import { StudentService } from './../../service/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  id!:number;
  editMode = false;
  formStd: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private studentSV: StudentService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  initForm() {
    let idStd = '';
    let nameStd = '';
    let birthStd = '';

    if(this.editMode) {
      const std = this.studentSV.selectStd(this.id);
      idStd = std.id;
      nameStd = std.name;
      birthStd = std.birth;
    }

    this.formStd = this.fb.group({
      id: [idStd, [Validators.required]],
      name: [nameStd, [Validators.required]],
      birth: [birthStd, [
        Validators.required,
        Validators.pattern(/^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/)
      ]]
    })
  }

  onSubmit() {
    if(this.editMode) {
      this.studentSV.updateStudent(this.id, this.formStd.value)
    }
    else {
      this.studentSV.addStudent(this.formStd.value)
    }
  }

  onCancel() {
    this.router.navigateByUrl('/student')
  }

  getConfig(ctrl: string) {
    return this.formStd.get(ctrl)?.invalid && this.formStd.get(ctrl)?.touched
  }
}
