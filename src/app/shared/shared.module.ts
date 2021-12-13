import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon'
import {MatDividerModule} from '@angular/material/divider'
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';

import { CustomInputDirective } from './directives/custom-input-directive';
import { MaxCharactersMaskDirective } from './directives/max-characters-mask-directive';
import { AlphanumericMaskDirective } from './directives/alphanumeric-mask.directive';
import {MatFormFieldModule,} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CustomImputComponent } from './components/custom-imput/custom-imput.component';
import { DialogsComponent } from './components/dialogs/dialogs.component';
import { ShowMessageBaseAmountComponent } from './components/show-message-base-amount/show-message-base-amount.component';
import { CustomSelectComponent } from './components/custom-select/custom-select.component';
import {MatSelectModule} from '@angular/material/select';
import { TableComponent } from './components/table/table.component';

const MATERIAL_COMPONENTS=[
  MatProgressBarModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule,
  MatToolbarModule,
  MatTabsModule,
  MatSidenavModule,
  MatCardModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule

]

@NgModule({
  declarations: [
    NavBarComponent,
    CustomImputComponent,
    MaxCharactersMaskDirective,
    CustomInputDirective,
    AlphanumericMaskDirective,
    DialogsComponent,
    ShowMessageBaseAmountComponent,
    CustomSelectComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MATERIAL_COMPONENTS
  ],

  exports:[
    NavBarComponent,
    CustomImputComponent,
    DialogsComponent,
    ReactiveFormsModule,
    ShowMessageBaseAmountComponent,
    CustomSelectComponent,
    TableComponent,
    MATERIAL_COMPONENTS,

  ]
})
export class SharedModule { }
