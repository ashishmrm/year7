import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WordDetails } from './englist.result';

@Injectable({ providedIn: 'root' })
export class EnglishService {

  constructor(private httpClient: HttpClient) {

  }

  public getWordDetails(word: string, detail: string) {
    console.log(word);
    return this.httpClient.get<WordDetails>('https://wordsapiv1.p.rapidapi.com/words/' + word + '/' + detail, {
      headers: {'x-rapidapi-host': 'wordsapiv1.p.rapidapi.com', 'x-rapidapi-key': '36c4f69e87mshfa52d25d667fc99p1a89cajsne7198a6d212c'}
    }
    );
  }

}
