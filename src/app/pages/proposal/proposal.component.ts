import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrl: './proposal.component.scss'
})
export class ProposalComponent {

  constructor(private route: ActivatedRoute) {
    const params = this.route.snapshot.queryParams;
    console.log(params);
  }

}
