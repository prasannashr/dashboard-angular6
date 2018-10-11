import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddResiliencyGroupsAndNodesComponent } from './add-resiliency-groups-and-nodes.component';

describe('AddResiliencyGroupsAndNodesComponent', () => {
  let component: AddResiliencyGroupsAndNodesComponent;
  let fixture: ComponentFixture<AddResiliencyGroupsAndNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddResiliencyGroupsAndNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddResiliencyGroupsAndNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
