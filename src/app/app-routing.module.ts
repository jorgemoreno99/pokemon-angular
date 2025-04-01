import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/views/home/home.component';
import { DetailsComponent } from './components/views/details/details.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent
  },
  {
    path:'details/:id', component: DetailsComponent
  },
  {
    path:'**', component: HomeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
