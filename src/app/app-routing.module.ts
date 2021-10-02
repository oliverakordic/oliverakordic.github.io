import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { IndexComponent } from './index/index.component'

const routes: Routes = [
  {path: 'form', component: MycomponentComponent},
  {path: 'card', component: CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ArrayOfComponents = [MycomponentComponent, CardComponent, IndexComponent]
