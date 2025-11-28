import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CellPhone } from '../../models/cellphone.model';

@Component({
  selector: 'app-cellphone-form',
  templateUrl: './cellphone-form.component.html',
  styleUrls: ['./cellphone-form.component.css']
})
export class CellPhoneFormComponent implements OnInit {
  cellPhone: CellPhone = {
    number: '',
    brand: '',
    model: ''
  };
  isEditMode = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.apiService.getCellPhoneById(id).subscribe(data => {
        this.cellPhone = data;
      });
    }
  }

  saveCellPhone(): void {
    if (this.isEditMode) {
      this.apiService.updateCellPhone(this.cellPhone.id!, this.cellPhone).subscribe(() => {
        this.router.navigate(['/cellphones']);
      });
    } else {
      this.apiService.createCellPhone(this.cellPhone).subscribe(() => {
        this.router.navigate(['/cellphones']);
      });
    }
  }
}
