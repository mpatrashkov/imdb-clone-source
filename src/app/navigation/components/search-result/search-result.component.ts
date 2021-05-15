import { Component, Input } from '@angular/core';
import { SearchResult } from '../../shared/types/searchResult';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  @Input() searchResult: SearchResult;
}
