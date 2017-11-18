import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from "@angular/material"
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  imports: [
	CommonModule,
	MatButtonModule,
	MatSidenavModule,
	MatToolbarModule,
	MatIconModule,
	MatMenuModule
  ],
  exports: [
	  MatButtonModule,
	  MatSidenavModule,
	  MatToolbarModule,
	  MatIconModule,
	  MatMenuModule
  ],
  declarations: []
})
export class MaterialModule { }
