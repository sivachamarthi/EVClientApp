import { Component, OnInit } from '@angular/core';
import { FundingService } from '../services/funding.service';
import { Funding } from '../_models/Funding';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.css']
})
export class FundingComponent implements OnInit {

  fundings : Funding[];
  constructor(private fundingService : FundingService) { }

  ngOnInit() {
     this.fundingService.getFundings().subscribe( fundings => this.fundings = fundings);
  }

  public invest(id: number){
    //update investment with investment amount
    //console.log("Invest called for : "+id );
    var amount = prompt("Please enter the amount to invest (100 to 10,000) : ");

    var funding = new Funding();
    funding.id = id;
    funding.isInvested = true;
    funding.investmentAmount = +amount;

    this.fundingService.updateFunding(funding).subscribe(
      funding => {
        this.ngOnInit();
      },
      error => {
        alert(error+" -- Investment amount should be between 100 and 10,000");
      }
    );
  }
}
