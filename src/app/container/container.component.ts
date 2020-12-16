import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(translate: TranslateService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(x => {
      console.log('CHANGE TO ' + x.lang);
      translate.use(x.lang);
    });
  }

  ngOnInit(): void {
  }

}
