import { Component } from '@angular/core';

import { QuestionService } from './question.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [QuestionService]
})
export class AppComponent {
  questions: any[];
  displaySidebar = false;
  constructor(service: QuestionService, translate: TranslateService) {
    translate.addLangs(['en-GB', 'cy-GB']);
    translate.setDefaultLang('en-GB');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/cy-GB|en-GB/) ? browserLang : 'en');
    this.questions = service.getQuestions();
  }
}
