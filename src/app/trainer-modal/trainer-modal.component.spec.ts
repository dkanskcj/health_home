import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainerModalComponent } from './trainer-modal.component';

describe('TrainerModalComponent', () => {
  let component: TrainerModalComponent;
  let fixture: ComponentFixture<TrainerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrainerModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
