import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HandlesComponent } from './handles/handles.component';
import { MarketPsuedoComponent } from './market-psuedo/market-psuedo.component';
import { MarketComponent } from './market/market.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { TOSComponent } from './tos/tos.component';


const routes: Routes = [
  {
    path: '', component: MarketPsuedoComponent
  },
  {
    path: 'handles', component: HandlesComponent
  },
  {
    path: 'market', component: MarketComponent
  },
  {
    path: 'moderator', component: ModeratorComponent
  },
  {
    path: 'about-us', component: AboutUsComponent
  },
  {
    path: 'tos', component: TOSComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }