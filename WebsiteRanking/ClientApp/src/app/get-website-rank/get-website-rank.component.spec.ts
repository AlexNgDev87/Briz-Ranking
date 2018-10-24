import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetWebsiteRankComponent } from './get-website-rank.component';

describe('GetWebsiteRankComponent', () => {
  let component: GetWebsiteRankComponent;
  let fixture: ComponentFixture<GetWebsiteRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetWebsiteRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetWebsiteRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
