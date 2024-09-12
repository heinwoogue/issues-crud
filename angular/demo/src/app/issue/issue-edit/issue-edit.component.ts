import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IssueService } from '../issue.service';
import { Issue } from '../issues';

@Component({
  selector: 'app-issue-edit',
  templateUrl: './issue-edit.component.html'
})
export class IssueEditComponent implements OnInit {

  id!: string;
  issue!: any;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: IssueService) {
  }

  ngOnInit() {
  }

  save() {
  }

  cancel() {
    this.router.navigate(['/flights']);
  }
}
