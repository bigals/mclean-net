import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  public errorMessage: string;
  constructor () {
    this.errorMessage = 'You are seeing this page, because you requested a URL that doesnt exsist!' +
      'If you think this is a mistake, please drop us a line via our:';
  }

  ngOnInit() {
  }

}
