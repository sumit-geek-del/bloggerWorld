import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { ViewComponent } from './view/view.component';
import {MatTableModule} from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreatePostComponent } from './create-post/create-post.component';

import { FormsModule } from '@angular/forms';
// import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    ViewComponent,
    CreatePostComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    // QuillModule
  ]
})
export class CreateModule { }
