import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { ProposalModule } from './pages/proposal/proposal.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    ProposalModule,
    AppRoutingModule
  ],
  bootstrap: [
    AppComponent
]
})
export class AppModule { }
