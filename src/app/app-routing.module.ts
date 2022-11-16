import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriedComponent } from './components/categories/dried/dried.component';
import { ExoticComponent } from './components/categories/exotic/exotic.component';
import { FreshComponent } from './components/categories/fresh/fresh.component';
import { FruitsComponent } from './components/categories/fruits/fruits.component';
import { NutsComponent } from './components/categories/nuts/nuts.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryComponent } from './components/category/category.component';

const routes: Routes = [
  
  { path: '', redirectTo: '/shop', pathMatch: 'full'},
  { path: 'shop/categories', component: CategoryComponent},
  { path: 'shop/categories/dried', component: DriedComponent },
  { path: 'shop/categories/exotic', component: ExoticComponent },
  { path: 'shop/categories/fresh', component: FreshComponent },
  { path: 'shop/categories/fruits', component: FruitsComponent },
  { path: 'shop/categories/nuts', component: NutsComponent },
  { path: 'shop', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/* casi

    children: [
      { path: 'shop/categories/dried', component: DriedComponent },
      { path: 'shop/categories/exotic', component: ExoticComponent },
      { path: 'shop/categories/fresh', component: FreshComponent },
      { path: 'shop/categories/fruits', component: FruitsComponent },
      { path: 'shop/categories/nuts', component: NutsComponent },
    ]
   */