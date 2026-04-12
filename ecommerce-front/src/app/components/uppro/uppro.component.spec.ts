import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpproComponent } from './uppro.component';

describe('UpproComponent', () => {
  let component: UpproComponent;
  let fixture: ComponentFixture<UpproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
