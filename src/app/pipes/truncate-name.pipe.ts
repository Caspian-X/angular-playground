import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateName',
  standalone: true
})
export class TruncateNamePipe implements PipeTransform {

  transform(value: string, maxLength: number = 16, ellipsis: string = "...", ...args: unknown[]): unknown {
    if (value.length > maxLength) {
		return value.slice(0, maxLength).concat(ellipsis);
	}

	return value;
  }

}
