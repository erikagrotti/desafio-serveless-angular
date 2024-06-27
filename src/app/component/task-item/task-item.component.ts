import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task.models';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
@Component({
selector: 'app-task-item',
templateUrl: './task-item.component.html',
styleUrls: ['./task-item.component.scss'],
standalone: true,
imports: [CommonModule, MatCheckboxModule, FormsModule, MatListModule],
})
export class TaskItemComponent {
@Input() task!: Task;
@Output() taskChange = new EventEmitter<Task>();

updateStatus(completed: boolean, index?: number) {
  if (index !== undefined && this.task.subtasks) {
    this.task.subtasks[index].status = completed;
    // Atualiza o estado da tarefa pai (verificação se todos os filhos estão completos)
    this.task.status = this.task.subtasks.every(t => t.status);
  } else {
    this.task.status = completed;
    this.taskChange.emit(this.task);
    // Atualiza o estado de todos os filhos (se a tarefa pai for marcada)
    this.task.subtasks?.forEach(t => (t.status = completed));
  }
  this.taskChange.emit(this.task);
}


isIndeterminate(): boolean {
  return !!this.task.subtasks &&
    this.task.subtasks.some(t => t.status) &&
    !this.task.subtasks.every(t => t.status);
}

}