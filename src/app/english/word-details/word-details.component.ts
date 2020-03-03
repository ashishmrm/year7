import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WordDetails } from '../englist.result';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {

  @Input() wordDetails: WordDetails;
  @Output() wordSelected = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  lookupWord(word: string) {
    this.wordSelected.emit(word);
  }
}
