import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SwipeComponent } from './swipe/swipe.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'browse',
    component: SwipeComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
