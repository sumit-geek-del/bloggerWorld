import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {
    path:'', component:ViewComponent
  },
  {
    path:'create', component:CreatePostComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateRoutingModule { }
