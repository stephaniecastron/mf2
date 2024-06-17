import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProposalComponent } from './pages/proposal/proposal.component';
import { loadRemoteModule } from '@angular-architects/module-federation';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/proposal/proposal.module').then(m => m.ProposalModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
