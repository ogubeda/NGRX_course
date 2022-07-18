import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';


@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: string): Todo[] {
    const selector: any = {
      all: () => todos,
      active: () => todos.filter(todo => !todo.completed),
      completed: () => todos.filter(todo => todo.completed)
    }

    return selector[filter]() || todos
  }

}
