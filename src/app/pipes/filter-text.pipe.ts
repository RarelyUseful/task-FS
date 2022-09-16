import { Pipe, PipeTransform } from '@angular/core';
import { Tasks } from '../interfaces/tasks';

@Pipe({
  name: 'filterText',
})
export class FilterTextPipe implements PipeTransform {
  transform(value: Tasks[], searchPhrase: string): Tasks[] {
    if (searchPhrase.length > 0) {
      let filteredList: Tasks[] = [];
      value.forEach((task) => {
        if (
          task.description
            .toLocaleLowerCase()
            .includes(searchPhrase.toLocaleLowerCase())
        ) {
          filteredList.push(task);
        }
      });
      return filteredList;
    }
    return value;
  }
}
