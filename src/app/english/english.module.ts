import { NgModule } from '@angular/core';
import { EnglishComponent } from './english.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { EnglishRoutingModule } from './english-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatCard, MatCardMdImage, MatCardModule } from '@angular/material/card';
import { AlphabetComponent } from './alphabet/alphabet.component';
import { MatButtonModule } from '@angular/material/button';
import { WordDetailsComponent } from './word-details/word-details.component';

@NgModule({
  declarations: [
    EnglishComponent,
    AlphabetComponent,
    WordDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    EnglishRoutingModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class EnglishModule {

}
