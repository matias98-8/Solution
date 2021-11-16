import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasoDevolucionComponent } from './caso-devolucion.component';

describe('CasoDevolucionComponent', () => {
  let component: CasoDevolucionComponent;
  let fixture: ComponentFixture<CasoDevolucionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasoDevolucionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasoDevolucionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
