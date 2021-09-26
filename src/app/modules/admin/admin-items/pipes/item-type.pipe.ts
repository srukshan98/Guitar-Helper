import { ItemTypes } from './../../../../config/item.types';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'itemType'
})
export class ItemTypePipe implements PipeTransform {

  transform(value: number): unknown {
    return ItemTypes[value];
  }

}
