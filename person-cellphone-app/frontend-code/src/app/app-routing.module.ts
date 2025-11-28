import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person/person-list.component';
import { PersonFormComponent } from './components/person/person-form.component';
import { CellPhoneListComponent } from './components/cellphone/cellphone-list.component';
import { CellPhoneFormComponent } from './components/cellphone/cellphone-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/persons', pathMatch: 'full' },
  { path: 'persons', component: PersonListComponent },
  { path: 'persons/add', component: PersonFormComponent },
  { path: 'persons/edit/:id', component: PersonFormComponent },
  { path: 'cellphones', component: CellPhoneListComponent },
  { path: 'cellphones/add', component: CellPhoneFormComponent },
  { path: 'cellphones/edit/:id', component: CellPhoneFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
