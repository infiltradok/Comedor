import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaBeneficiarios } from './lista-beneficiarios';

describe('ListaBeneficiarios', () => {
  let component: ListaBeneficiarios;
  let fixture: ComponentFixture<ListaBeneficiarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaBeneficiarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaBeneficiarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
