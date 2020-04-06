import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirFuncoesComponent } from './inserir-funcoes.component';

describe('InserirFuncoesComponent', () => {
  let component: InserirFuncoesComponent;
  let fixture: ComponentFixture<InserirFuncoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserirFuncoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InserirFuncoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
