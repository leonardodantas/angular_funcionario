import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFuncComponent } from './table-func.component';

describe('TableFuncComponent', () => {
  let component: TableFuncComponent;
  let fixture: ComponentFixture<TableFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
