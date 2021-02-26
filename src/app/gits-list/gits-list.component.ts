import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GistsService } from '../gists.service';
import { Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


@Component({
  selector: 'app-gits-list',
  templateUrl: './gits-list.component.html',
  styleUrls: ['./gits-list.component.css']
})
export class GitsListComponent implements OnInit {

  results: any = {};
  loader: boolean = false;
  @ViewChild("inputSearch") inputSearch: ElementRef | undefined;
  source: Observable<unknown> | undefined;

  ngAfterViewInit(): void {
    this.source = fromEvent(this.inputSearch?.nativeElement, 'keyup');
    this.source
      .pipe(
        debounceTime(1200),
        distinctUntilChanged(),
      )
      .subscribe(event => {
        console.log(event);
        this.search(event);
      }
      );
  }

  ngOnInit(): void {

  }

  constructor(private searchService: GistsService) {
  }


  search($event: any) {
    this.loader = true;
    this.searchService.search($event?.target?.value)
      .subscribe((result) => {
        this.loader = false;
        this.results = result;
      }, (err) => {
        this.loader = false;
        console.log(err);
      })
  }


  getForksDetails(id: string) {
    this.loader = true;
    this.searchService.getForks(id)
      .subscribe((result: any) => {
        this.loader = false;
      }, (err) => {
        this.loader = false;
      })
  }


}
