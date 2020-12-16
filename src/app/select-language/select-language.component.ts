import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-language',
  template: `

    <button
    (click)="changeLanguage(lang)"
      *ngFor="let lang of translate.getLangs()"
      [value]="lang"
      [class.selected]="lang === translate.currentLang"
    >{{lang}}</button>

`,
  styles: [
    '.selected{background:red}'
  ]
})
export class SelectLanguageComponent implements OnInit {

  constructor(public translate: TranslateService) { }


  ngOnInit(): void {
  }

  changeLanguage(lang: string) {
    console.log('changed to ' + lang);
    this.translate.use(lang);
  }

}
