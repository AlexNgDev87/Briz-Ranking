
import { ViewChild } from '@angular/core';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { SeorankService } from '../seorank/seorank.service';
import { GetWebsiteRankComponent } from '../get-website-rank/get-website-rank.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() resultReceived = new EventEmitter<any>();
  public status: number;
  public searchCriteria: any;

  @ViewChild(GetWebsiteRankComponent)
  private websiteRankComponent: GetWebsiteRankComponent;


  constructor(private seoRankService: SeorankService) {
    this.status = -1;
    this.searchCriteria = this.setInitialValuesForSearchData();
  }

  private setInitialValuesForSearchData() {
    return {
      Url: '',
      Keyword: ''
    }
  }

  ngOnInit() {

  }

  public getRanking = function (searchCriteria: any) {
    // Make an API call to retrieve the rankings based on provided Url and Keyword
    this.seoRankService.send(searchCriteria).subscribe(
      response => {
        this.websiteRankComponent.displayRanking(response);
      }
    );
  };
}
