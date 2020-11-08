import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltamarcadorComponent } from './altamarcador.component';

describe('AltamarcadorComponent', () => {
  let component: AltamarcadorComponent;
  let fixture: ComponentFixture<AltamarcadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltamarcadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltamarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
