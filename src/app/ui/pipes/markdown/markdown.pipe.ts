import { Pipe, PipeTransform } from '@angular/core';
import * as MarkdownIt from 'markdown-it';

@Pipe({
  name: 'markdown',
})
export class MarkdownPipe implements PipeTransform {
  transform(value: string): string {
    const html = new MarkdownIt({
      linkify: true,
    }).render(value);
    if (html.startsWith('<p>')) {
      return html.slice(3, -5);
    }

    return html;
  }
}
