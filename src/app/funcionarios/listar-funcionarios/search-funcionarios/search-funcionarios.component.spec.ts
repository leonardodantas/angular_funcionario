import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFuncionariosComponent } from './search-funcionarios.component';

describe('SearchFuncionariosComponent', () => {
  let component: SearchFuncionariosComponent;
  let fixture: ComponentFixture<SearchFuncionariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFuncionariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFuncionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
