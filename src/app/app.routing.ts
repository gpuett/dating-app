import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SwipeComponent } from './swipe/swipe.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse',
    component: SwipeComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'detail/:id',
    component: UserDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
