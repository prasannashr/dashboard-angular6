import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosServiceStatusComponent } from './cos-service-status.component';

describe('CosServiceStatusComponent', () => {
  let component: CosServiceStatusComponent;
  let fixture: ComponentFixture<CosServiceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosServiceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosServiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
