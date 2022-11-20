import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';
import { MatTableModule} from '@angular/material/table'


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule,
  MatTableModule
] 

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
