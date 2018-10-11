import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiliencyLandingPageComponent } from './resiliency-landing-page.component';

describe('ResiliencyLandingPageComponent', () => {
  let component: ResiliencyLandingPageComponent;
  let fixture: ComponentFixture<ResiliencyLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiliencyLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiliencyLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
