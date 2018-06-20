import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SwipeComponent } from './swipe/swipe.component';
import { UserComponent } from './user/user.component';
import{LoginComponent} from './login/login.component';

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
    path: 'users',
    component: UserComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
