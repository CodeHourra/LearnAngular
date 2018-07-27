import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], filterFiled: string, keyword: string): any {
    if(!filterFiled || !keyword){
      return list;
    }
    return list.filter( item => {
      let filedValue = item[filterFiled];
      return filedValue.indexOf(keyword) >= 0;
    });
  }

}
