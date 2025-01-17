import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskEditCardComponent } from './task-edit-card.component';

describe('TaskEditCardComponent', () => {
  let component: TaskEditCardComponent;
  let fixture: ComponentFixture<TaskEditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskEditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
