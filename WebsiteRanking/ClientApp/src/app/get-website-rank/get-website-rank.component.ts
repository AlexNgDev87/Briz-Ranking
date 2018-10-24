import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-website-rank',
  templateUrl: './get-website-rank.component.html',
  styleUrls: ['./get-website-rank.component.css']
})
export class GetWebsiteRankComponent implements OnInit {

  @Output() searchInitiated = new EventEmitter<any>();
  @Input() searchInfo: any;
  public results: string;
  
  constructor() { 
    this.clearSearchInfo();
  }

  ngOnInit() {
  }

  private clearSearchInfo = function() {
    
    this.searchInfo = {
      Url: '',
      Keyword: ''
    };
  };

  public getWebsiteRank = function(event) {
    // Emit the event of that the HomeComponent is binding to
    this.searchInitiated.emit(this.searchInfo);
    this.clearSearchInfo();
  };

  public displayRanking = function(rankings) {
    this.results = rankings.join(', ');
  }
}
