import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IssueEditComponent } from './issue-edit/issue-edit.component';
import { IssuesListListComponent } from './issue-list/issue-list.component';
import { FLIGHT_ROUTES } from './issue.routes';
import { IssueService } from './issue.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FLIGHT_ROUTES)
  ],
  declarations: [
    IssuesListListComponent,
    IssueEditComponent
  ],
  providers: [IssueService],
  exports: []
})
export class IssueModule { }
