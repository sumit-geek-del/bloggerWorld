import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'signup', component:SignupComponent
  },
  {
    path:'layout', loadChildren:()=> import('./layout/layout.module').then(m => m.LayoutModule).catch((err=> {throw new err}))
  },
  {
    path:'create', loadChildren:()=> import('./create/create.module').then(m=> m.CreateModule).catch((err=> {throw new err}))
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
