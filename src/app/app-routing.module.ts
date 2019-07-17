import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './pages/list/list.component';
import { ContactDetailComponent } from './pages/contact-detail/contact-detail.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/list' },
  { path: 'list', component: ListComponent },
  { path: 'detail', component: ContactDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
