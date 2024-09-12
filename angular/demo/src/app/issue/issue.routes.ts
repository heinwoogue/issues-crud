import { Routes } from '@angular/router';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssuesListListComponent } from './issue-list/issue-list.component';

export const FLIGHT_ROUTES: Routes = [
  {
    path: 'flights',
    component: IssuesListListComponent
  },
  {
    path: 'flights/:id',
    component: IssueEditComponent
  }
];
