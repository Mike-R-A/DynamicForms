import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displaySidebar = false;
  constructor(private translate: TranslateService) {
    translate.addLangs(['en-GB', 'cy-GB']);
    translate.setDefaultLang('en-GB');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/cy-GB|en-GB/) ? browserLang : 'en');
  }

  get languageLabel() {
    switch (this.translate.currentLang) {
      case 'en':
      case 'en-GB': {
        return 'Cymraeg';
      }
      default: {
        return 'English';
      }
    }
  }

  toggleLanguage() {
    switch (this.translate.currentLang) {
      case 'en':
      case 'en-GB': {
        this.translate.use('cy-GB');
        break;
      }
      default: {
        this.translate.use('en-GB');
        break;
      }
    }
  }
}
