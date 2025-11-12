import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendOverview } from './backend-overview';

describe('BackendOverview', () => {
  let component: BackendOverview;
  let fixture: ComponentFixture<BackendOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BackendOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackendOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
