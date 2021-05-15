import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../../shared/services/search/search.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription, Observable } from 'rxjs';
import { SearchResult } from '../../shared/types/searchResult';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnDestroy {
  searchForm = new FormGroup({
    query: new FormControl(''),
  });

  get query() {
    return this.searchForm.get('query');
  }

  searchOpen = false;
  searchResults: SearchResult[] = [];
  searchResult: Subscription;

  constructor(private searchService: SearchService) {
    this.searchResult = this.searchService
      .search(this.query.valueChanges)
      .subscribe((searchResults) => {
        this.searchResults = searchResults;
        this.searchOpen = true;
      });
  }

  closeSearch() {
    this.searchOpen = false;
  }

  openSearch() {
    this.searchOpen = true;
  }

  ngOnDestroy() {
    this.searchResult.unsubscribe();
  }
}
