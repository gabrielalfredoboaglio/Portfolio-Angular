import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MIperfilComponent } from './miperfil.component';

describe('MIperfilComponent', () => {
  let component: MIperfilComponent;
  let fixture: ComponentFixture<MIperfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MIperfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MIperfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
