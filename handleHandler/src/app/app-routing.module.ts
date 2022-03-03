import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HandlesComponent } from './handles/handles.component';
import { LoginComponent } from './login/login.component';
import { MarketComponent } from './market/market.component';
import { ModeratorComponent } from './moderator/moderator.component';


const routes: Routes = [
  {
    path: '', component: FooterComponent
  },
  {
    path: 'market', component: MarketComponent
  },
  {
    path: 'handles', component: HandlesComponent
  },
  {
    path: 'login', component: LoginComponent
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