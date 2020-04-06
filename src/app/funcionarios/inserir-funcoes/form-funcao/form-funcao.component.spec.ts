import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFuncaoComponent } from './form-funcao.component';

describe('FormFuncaoComponent', () => {
  let component: FormFuncaoComponent;
  let fixture: ComponentFixture<FormFuncaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormFuncaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
