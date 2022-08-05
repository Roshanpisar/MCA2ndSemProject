import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatBadgeModule} from '@angular/material/badge';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkTableModule} from '@angular/cdk/table';
import { MatSelectModule } from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';


const material=[  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatBadgeModule,MatCheckboxModule,
  MatProgressSpinnerModule,MatRadioModule,DragDropModule ,ScrollingModule,CdkTableModule,MatSelectModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDatepickerModule,
    material
  ],
  exports:[material]
})
export class MaterialModule { }
