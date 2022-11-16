import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './components/home/home.component';
import { FruitsComponent } from './components/categories/fruits/fruits.component';
import { DriedComponent } from './components/categories/dried/dried.component';
import { FreshComponent } from './components/categories/fresh/fresh.component';
import { ExoticComponent } from './components/categories/exotic/exotic.component';
import { NutsComponent } from './components/categories/nuts/nuts.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryDetailComponent } from './components/category-detail/category-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CardComponent,
    FooterComponent,
    SearchBarComponent,
    HomeComponent,
    FruitsComponent,
    DriedComponent,
    FreshComponent,
    ExoticComponent,
    NutsComponent,
    CategoryComponent,
    CategoryDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatInputModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
