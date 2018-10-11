import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosNodesComponent } from './cos-nodes.component';

describe('CosNodesComponent', () => {
  let component: CosNodesComponent;
  let fixture: ComponentFixture<CosNodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosNodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosNodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
