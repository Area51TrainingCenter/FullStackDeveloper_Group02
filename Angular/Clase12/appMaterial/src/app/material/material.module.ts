import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material"
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule,
	MatCardModule,
	MatFormFieldModule,
	MatInputModule,
	MatExpansionModule,
	MatListModule
  ],
  exports: [
	  MatButtonModule,
	  MatSidenavModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatMenuModule,
	  MatCardModule,
	  MatFormFieldModule,
	  MatInputModule,
	  MatExpansionModule,
	  MatListModule
  ],
  declarations: []
})
export class MaterialModule { }
