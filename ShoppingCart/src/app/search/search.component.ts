import { GlobalConstants } from '../globals/globalconstants';
import { SearchByKeywords } from '../interfaces/searchbykeywords';
import { ShoppingService } from '../services/shopping-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() private shoppingService: SearchByKeywords;


  private searchBoxControl = new FormControl();

  constructor() { }

  ngOnInit() {
    this.searchBoxControl.valueChanges.distinctUntilChanged().debounceTime(GlobalConstants.debounceTime).subscribe(
      keywordTerm => { this.shoppingService.searchByKeywords(keywordTerm); }
    );
  }

}
