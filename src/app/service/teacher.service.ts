import { Teacher } from './teacher.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private TeacherData: Teacher[] = [
    {
      id: '112244',
      name: 'Giao Vien A'
    },
    {
      id: '112244',
      name: 'Giao Vien B'
    },
    {
      id: '112244',
      name: 'Giao Vien C'
    },
    {
      id: '112244',
      name: 'Giao Vien D'
    },
  ]
  constructor() { }

  get teachers() {
    return this.TeacherData;
  }
}
