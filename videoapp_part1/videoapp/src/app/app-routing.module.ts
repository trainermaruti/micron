import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { HomeComponent } from './home/home.component';
import { VideolistComponent } from './videolist/videolist.component';

const routes: Routes = [
  {path:'basic',component:BasicComponent},
  {path:'home',component:HomeComponent},
  {path:'videos',component:VideolistComponent},  
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
