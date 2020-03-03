export interface WordDetails {
  word: string;
  results: [
    {
      definition: string;
      partOfSpeech: string;
      synonyms: string[];
      typeOf: string[];
      antonyms: string[];
      examples: string[];
    }
  ];
  syllables: {
    count: number;
    list: string[];
  };
  synonyms: string[];
  antonyms: string[];
  definitions: [
    {
      definition: string;
      partOfSpeech: string;
    }
  ];
}
