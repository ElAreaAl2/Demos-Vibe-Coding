import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CellPhone } from '../../models/cellphone.model';

@Component({
  selector: 'app-cellphone-list',
  templateUrl: './cellphone-list.component.html',
  styleUrls: ['./cellphone-list.component.css']
})
export class CellPhoneListComponent implements OnInit {
  cellPhones: CellPhone[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadCellPhones();
  }

  loadCellPhones(): void {
    this.apiService.getAllCellPhones().subscribe(data => {
      this.cellPhones = data;
    });
  }

  deleteCellPhone(id: string): void {
    if(confirm("Are you sure to delete this cellphone?")) {
      this.apiService.deleteCellPhone(id).subscribe(() => {
        this.loadCellPhones();
      });
    }
  }
}
