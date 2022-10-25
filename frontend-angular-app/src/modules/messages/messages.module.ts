import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewMessagesPageComponent } from './pages/view-messages-page/view-messages-page.component';
import { MessagesRoutes } from './messages.routes';
import { RouterModule } from '@angular/router';
import { MessagesTableComponent } from './componens/messages-table/messages-table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ViewMessagesPageComponent,
    MessagesTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MessagesRoutes),
    MatPaginatorModule,
    MatTableModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule
  ]
})
export class MessagesModule { }
