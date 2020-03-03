import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-alphabet',
  templateUrl: './alphabet.component.html',
  styleUrls: ['./alphabet.component.css']
})
export class AlphabetComponent implements OnInit, OnChanges {

  words: Map<string, Array<string>> = new Map([
    ['A', ['ABODE', 'ABSURD', 'ABUNDANCE', 'ABUNDANT', 'ACCUSE', 'ACCUSTOM', 'ACQUIRE', 'ADHERE', 'ADMISSION', 'ADOPT', 'ADVANCE', 'AFFECTIONATE', 'AID', 'ALLY', 'AMBITION', 'ANXIOUS', 'APPEAL', 'APPROVE', 'AQUAINTED', 'AROUSE', 'ARTFUL', 'ARTICLE', 'ASSEMBLE', 'ASSISTANCE', 'ASUNDER', 'ATTEMPT', 'AVOID', 'AVOWED']],
    ['B', ['BANISH', 'BARREN', 'BESIEGED', 'BETRAY', 'BOX', 'BRIEF', 'BROAD', 'BURDEN']],
    ['C', ['CALAMITY', 'CANDIDATE', 'CAUTION', 'CEASE', 'COARSE', 'COAX', 'COMBINATION', 'COMMENCE', 'COMMIT', 'COMPANION', 'COMPANY', 'COMPEL', 'COMPOSITION', 'COMPREHEND', 'COMRADE', 'CONCEAL', 'CONCENTRATED', 'CONCLUDE', 'CONCLUSION', 'CONDEMN', 'CONFERRED', 'CONFINE', 'CONSENT', 'CONSIDERATION', 'CONSIST', 'CONSTANT', 'CONSUME', 'CONTEMPT', 'CONTEST', 'CONTRACT', 'CONTRAST', 'CONTRIBUTE', 'CONVERT', 'CONVEY', 'CONVICT', 'CONVINCE', 'CORRECT', 'CREDIT', 'CSERMON', 'CULTIVATE', 'CUNNING', 'CURB', 'CURIOUS', 'CUSTOM']],
    ['D', ['DEBATE', 'DECEIT', 'DECEIVE', 'DECLARE', 'DECLINE', 'DENY', 'DEPOSIT', 'DESPAIR', 'DESPISE', 'DESTITUTE', 'DETERMINE', 'DEVOTE', 'DIGEST', 'DILUTED', 'DIN', 'DISCONTENT', 'DISPERSE', 'DISPUTE', 'DISTINCT', 'DISTRESS', 'DIVINE', 'DIVINITY', 'DOMESTIC', 'DOSE', 'DUMB', 'DWELLING']],
    ['E', ['EARNEST', 'ECONOMICAL', 'ELECT', 'ELUDE', 'EMBRACE', 'EMPIRE', 'EMPLOY', 'ENDEAVOUR', 'ENDURE', 'ENTERPRISE', 'ENTIRE', 'ENTIRELY', 'ERECT', 'ERRAND', 'ESTIMATE', 'EVIDENT', 'EXCLAIM', 'EXPEL', 'EXPENSE', 'EXTENDED', 'EXTERIOR', 'EXTRACT']],
    ['F', ['FAMINE', 'FATAL', 'FATIGUE', 'FEEBLE', 'FERTILE', 'FLEET', 'FLOURISH', 'FOE', 'FORBID', 'FOUNDATION', 'FRAGMENT', 'FRAGRANT', 'FREQUENT', 'FUND']],
    ['G', ['GARMENT', 'GRATE', 'GRATITUDE', 'GRAVE', 'GRIEVE']],
    ['H', ['HALT', 'HARBOUR', 'HASTY', 'HEROIC', 'HOAX', 'HOLLOW', 'HUMBLE', 'HYGIENIC']],
    ['I', ['IDLE', 'IDOL', 'IMITATE', 'IMMERSE', 'IMPUDENT', 'INFLUENCE', 'INHABIT', 'INSANE', 'INSERT', 'INSOLENT', 'INSPIRE', 'INTENTION', 'INTERIOR', 'INVALID']],
    ['J', ['JUSTICE']],
    ['K', []],
    ['L', ['LABOUR', 'LAMENT', 'LATTER', 'LEA', 'LEAN', 'LENIENT', 'LIABLE', 'LIBERAL', 'LIBERTY', 'LIMB', 'LIMIT', 'LINGER', 'LODGE', 'LOFTY', 'LOYAL']],
    ['M', ['MAJESTIC', 'MALADY', 'MARGIN', 'MARINER', 'MAXIMUM', 'MEAGRE', 'MERCHANT', 'MERCY', 'MERE', 'MINIMUM', 'MODERATE', 'MODEST', 'MORAL', 'MORTAL']],
    ['N', ['NEAT', 'NIMBLE', 'NOTED']],
    ['O', ['OATH', 'OBJECT', 'OBJECTION', 'OBLIGE', 'OBSTINATE', 'OCCUPY', 'OCCUR', 'ODOUR', 'OFFEND', 'OMEN', 'OPPOSE', 'OPPRESS', 'OPTION', 'ORDEAL', 'ORIGIN']],
    ['P', ['PASTURE', 'PECULIAR', 'PERCEIVE', 'PERIL', 'PERISH', 'PERMIT', 'PIONEER', 'PLEDGE', 'PLUME', 'PLUNGE', 'POULTRY', 'PRETENCE', 'PROCLAIM', 'PROCURE', 'PROFIT', 'PROFIT', 'PROHIBIT', 'PROMINENT', 'PROMOTE', 'PROMPT', 'PROMPT', 'PROPORTION', 'PROSPEROUS', 'PROVOKE', 'PUBLIC', 'PUNCTUAL', 'PUNCTURE', 'PURPOSE']],
    ['Q', ['QUAINT', 'QUEER', 'QUENCH']],
    ['R', ['RAIMENT', 'RAMBLE', 'RANK', 'RARE', 'RECITE', 'REFUSE', 'RELEASE', 'REPENT', 'RESERVE', 'RESIDENCE', 'RESIGN', 'RESOLVE', 'RESTORE', 'RESTRAIN', 'RETAIN', 'RETREAT', 'REVEAL', 'REVIVE', 'ROAM', 'ROBUST', 'ROGUE', 'ROWDY', 'RURAL']],
    ['S', ['SACRED', 'SACRIFICE', 'SANE', 'SANITARY', 'SATIN', 'SCANTY', 'SCORE', 'SCRIPTURE', 'SECURE', 'SEIZE', 'SELDOM', 'SHRINE', 'SINCERE', 'SLEEK', 'SLY', 'SOBER', 'SOW', 'STERN', 'STOOP', 'STOUT', 'STRESS', 'STUBBORN', 'STURDY', 'SUBMIT', 'SUSPECT', 'SUSPEND']],
    ['T', ['TEMPERATE', 'TEMPTATION', 'TENANT', 'THRUST', 'TRAITOR', 'TRANQUIL', 'TRIFLE', 'TWILIGHT', 'TYRANT']],
    ['U', ['UNION', 'UNITE']],
    ['V', ['VACANT', 'VACANT', 'VAPOUR', 'VAST', 'VEIL', 'VENTILATION', 'VESSEL']],
    ['W', ['WASTEFUL', 'WEARY', 'WHOLESOME', 'WHOLLY', 'WITHER', 'WORTHY', 'WRETCHED']],
    ['X', []],
    ['Y', ['YIELD']],
    ['Z', []]
  ]);
  displayList = [];
  private selectedAlphabet = '';

  @Input()
  set selectedAlphabetSet(selectedAlphabet: string) {
    this.selectedAlphabet = selectedAlphabet;
    this.displayList = this.words.get(this.selectedAlphabet);
  }

  @Output()
  lookupWord = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  wordSelected(word: string) {
    console.log(word);
    this.lookupWord.emit(word);
  }

}
