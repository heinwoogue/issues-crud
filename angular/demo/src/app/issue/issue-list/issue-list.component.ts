import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';

@Component({
  selector: 'app-issue',
  templateUrl: 'issue-list.component.html'
})
export class IssuesListListComponent implements OnInit {

  issues$ = this.issueService.find();

  constructor(private issueService: IssueService) {
  }

  ngOnInit(): void {

  }
}
