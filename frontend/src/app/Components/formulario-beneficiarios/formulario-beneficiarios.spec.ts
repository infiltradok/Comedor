import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioBeneficiariosComponent } from './formulario-beneficiarios';

describe('FormularioBeneficiarios', () => {
  let component: FormularioBeneficiariosComponent;
  let fixture: ComponentFixture<FormularioBeneficiariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormularioBeneficiariosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioBeneficiariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
