import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResiliencyGroupsComponent } from './resiliency-groups.component';

describe('ResiliencyGroupsComponent', () => {
  let component: ResiliencyGroupsComponent;
  let fixture: ComponentFixture<ResiliencyGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResiliencyGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResiliencyGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
