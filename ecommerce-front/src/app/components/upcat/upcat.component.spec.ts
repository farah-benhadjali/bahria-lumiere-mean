import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcatComponent } from './upcat.component';

describe('UpcatComponent', () => {
  let component: UpcatComponent;
  let fixture: ComponentFixture<UpcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
