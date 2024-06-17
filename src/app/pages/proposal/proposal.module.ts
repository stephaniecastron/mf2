import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { proposalRoutingModule } from './proposal-routing.module';
import { ProposalComponent } from './proposal.component';


@NgModule({
  declarations: [ProposalComponent],
  imports: [
    CommonModule,
    proposalRoutingModule
  ]
})
export class ProposalModule { }
