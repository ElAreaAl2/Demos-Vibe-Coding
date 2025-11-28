import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { Person } from '../../models/person.model';
import { CellPhone } from '../../models/cellphone.model';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person: Person = {
    firstName: '',
    lastName: '',
    age: 0
  };
  cellPhones: CellPhone[] = [];
  isEditMode = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadCellPhones();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.apiService.getPersonById(id).subscribe(data => {
        this.person = data;
      });
    }
  }

  loadCellPhones(): void {
    this.apiService.getAllCellPhones().subscribe(data => {
      this.cellPhones = data;
    });
  }

  savePerson(): void {
    if (this.isEditMode) {
      this.apiService.updatePerson(this.person.id!, this.person).subscribe(() => {
        this.router.navigate(['/persons']);
      });
    } else {
      this.apiService.createPerson(this.person).subscribe(() => {
        this.router.navigate(['/persons']);
      });
    }
  }

  compareCellPhones(c1: CellPhone, c2: CellPhone): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
