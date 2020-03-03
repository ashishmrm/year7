import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WordDetails } from './englist.result';
import { EnglishService } from './english.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-english',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {
  alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  selectedAlphabet = '';
  wordDetailsO: Observable<WordDetails>;
  wordDetails: WordDetails;
  wordForm: FormGroup;

  constructor(private englishService: EnglishService) {
  }

  ngOnInit(): void {
    this.wordForm = new FormGroup({
      word: new FormControl(null, [Validators.required])
    });
  }

  getAlphabets() {
    return Array.from(this.alphabets);
  }

  showWords(alphabet: string) {
    console.log(alphabet);
    this.selectedAlphabet = alphabet;
  }

  onSubmit() {
    this.getWordDetails(this.wordForm.get('word').value);
  }

  getWordDetails(word: string) {
    this.englishService.getWordDetails(word, '').subscribe(
      (wordDetails: WordDetails) => {
        console.log(wordDetails);
        this.wordDetails = wordDetails;
        console.log(this.wordDetails);
        console.log(this.wordDetails.word);
        console.log(this.wordDetails.results[0].synonyms);
        console.log(this.wordDetails.results[0].antonyms);
      }
    );
  }

  lookupWord(word: string) {
    this.getWordDetails(word);
    console.log('setting value!!');
    this.wordForm.get('word').patchValue(word); // setValue(word);
  }

  synonyms() {
    this.englishService.getWordDetails(this.wordForm.get('word').value, 'synonyms').subscribe(
      (wordDetails: WordDetails) => {
        this.wordDetails = wordDetails;
        console.log(this.wordDetails);
      }
    );
  }

  antonyms() {
    this.englishService.getWordDetails(this.wordForm.get('word').value, 'antonyms').subscribe(
      (wordDetails: WordDetails) => {
        this.wordDetails = wordDetails;
        console.log(this.wordDetails);
      }
    );
  }

  definitions() {
    this.englishService.getWordDetails(this.wordForm.get('word').value, 'definitions').subscribe(
      (wordDetails: WordDetails) => {
        this.wordDetails = wordDetails;
        console.log(this.wordDetails);
      }
    );
  }

}
