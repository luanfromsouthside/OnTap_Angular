import { Student } from './student.model';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private StudentData: Student[] = [
    {
      id: '18DH110523',
      name: 'Nguyen Van A',
      birth: '13/02/2000'
    },
    {
      id: '18DH110853',
      name: 'Nguyen Van B',
      birth: '13/02/2000'
    },
    {
      id: '18DH110247',
      name: 'Nguyen Van C',
      birth: '13/02/2000'
    },
    {
      id: '18DH110456',
      name: 'Nguyen Van D',
      birth: '13/02/2000'
    },
  ]

  selectStudent = new EventEmitter<Student>();
  constructor() { }

  get student(){
    return this.StudentData;
  }

  selectStd(index: number) {
    return this.StudentData[index];
  }

  addStudent(std: Student){
    this.StudentData.push(std);
  }

  updateStudent(index: number, std: Student) {
    this.StudentData[index] = std;
  }

  deleteStudent(index: number) {
    this.StudentData.splice(index,1);
    console.log(this.StudentData)
  }
}
