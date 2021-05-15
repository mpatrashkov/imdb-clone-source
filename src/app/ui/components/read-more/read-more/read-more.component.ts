import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
})
export class ReadMoreComponent implements OnInit {
  @Input() content: string;
  @Input() length: number;

  @Output() readMore = new EventEmitter();

  showedContent: string;

  show: boolean = false;

  ngOnInit() {
    this.showLess();
  }

  showMore() {
    this.readMore.emit();
    this.showedContent = this.content;
    this.show = true;
  }

  showLess() {
    if (this.content.length > this.length && this.length >= 0) {
      this.showedContent = this.content.slice(0, this.length - 4) + ' ...';
    } else {
      this.showedContent = this.content;
    }
    this.show = false;
  }
}
