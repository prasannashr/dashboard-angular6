import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesLandingPageComponent } from './nodes-landing-page.component';

describe('NodesLandingPageComponent', () => {
  let component: NodesLandingPageComponent;
  let fixture: ComponentFixture<NodesLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
