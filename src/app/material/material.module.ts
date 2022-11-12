import { NgModule } from '@angular/core';
import { MatButtonModule} from '@angular/material/button';
import { MatIconModule} from '@angular/material/icon';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatCardModule} from '@angular/material/card';


const MaterialComponents = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatGridListModule,
  MatCardModule
] 

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
