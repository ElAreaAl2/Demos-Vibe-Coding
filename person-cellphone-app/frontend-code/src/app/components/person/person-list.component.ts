import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Person } from '../../models/person.model';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons: Person[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadPersons();
  }

  loadPersons(): void {
    this.apiService.getAllPersons().subscribe(data => {
      this.persons = data;
    });
  }

  deletePerson(id: string): void {
    if(confirm("Are you sure to delete this person?")) {
      this.apiService.deletePerson(id).subscribe(() => {
        this.loadPersons();
      });
    }
  }
}
