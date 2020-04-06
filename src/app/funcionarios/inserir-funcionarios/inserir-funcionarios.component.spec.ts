import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFuncionariosComponent } from './inserir-funcionarios.component';

describe('InserirFuncionariosComponent', () => {
  let component: InserirFuncionariosComponent;
  let fixture: ComponentFixture<InserirFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
