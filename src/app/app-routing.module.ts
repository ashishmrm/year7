import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {path: '', redirectTo: '/english', pathMatch: 'full'},
  {path: 'english', loadChildren: () => import('./english/english.module').then(m => m.EnglishModule)},
  {path: 'maths', loadChildren: () => import('./maths/maths.module').then(m => m.MathsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
