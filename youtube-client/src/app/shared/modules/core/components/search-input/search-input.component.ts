import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged, filter, takeUntil, switchMap, debounceTime } from 'rxjs/operators';
import { SearchService } from '../../../../../shared/services/search.service';
import { SortingModeService } from '../../../../../shared/services/sorting-mode.service';
import { UnsubscribeService } from '../../../../../shared/services/unsubscribe.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements AfterViewInit, OnDestroy {
  constructor(
    public sortingModeService: SortingModeService,
    public searchService: SearchService,
    private readonly unsubscribeService: UnsubscribeService,
  ) {}

  @ViewChild('searchInput')
    searchInput!: ElementRef;

  settingsEnabled = false;

  ngAfterViewInit(): void {
    fromEvent<KeyboardEvent>(this.searchInput.nativeElement, 'keyup')
      .pipe(
        map((event: KeyboardEvent) => (event.target as HTMLInputElement).value.trim()),
        filter(res => res.length > 2),
        debounceTime(1000),
        distinctUntilChanged(),
        takeUntil(this.unsubscribeService.subscription),
        switchMap((searchRequest: string) => this.searchService.getYoutubeData(searchRequest))
      )
      .subscribe(res => console.log(res));
  }

  ngOnDestroy(): void {
    this.unsubscribeService.destroy();
  }

  enableResultList(): void {
    this.searchService.enableResultList(true);
  }

  toggleSettings(): void {
    this.settingsEnabled = !this.settingsEnabled;
  }
}
