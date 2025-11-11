import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBeneficiarios } from './formulario-beneficiarios';

describe('FormularioBeneficiarios', () => {
  let component: FormularioBeneficiarios;
  let fixture: ComponentFixture<FormularioBeneficiarios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioBeneficiarios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBeneficiarios);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
