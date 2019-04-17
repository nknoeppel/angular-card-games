import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'black-jack',
    loadChildren: 'src/app/black-jack/black-jack.module#BlackJackModule'
  },
  {
    path: 'solitaire',
    loadChildren: 'src/app/solitaire/solitaire.module#SolitaireModule'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
