import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: ':lang',
    component: ContainerComponent,
    children: [
      { path: 'a1', component: CompAComponent },
      { path: 'b1', component: CompBComponent }
    ]
  },
  {
    path: '', redirectTo: 'en/a1', pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
