import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandlesComponent } from './handles/handles.component';
import { MarketComponent } from './market/market.component';
import { ModeratorComponent } from './moderator/moderator.component';


const routes: Routes = [
  {
    path: 'market', component: MarketComponent
  },
  {
    path: 'handles', component: HandlesComponent
  },
  {
    path: 'moderator', component: ModeratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }