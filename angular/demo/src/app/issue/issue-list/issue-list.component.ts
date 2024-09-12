import { Component, OnInit } from '@angular/core';
import { IssueService } from '../issue.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Issue } from '../issues';

@Component({
  selector: 'app-issue',
  templateUrl: 'issue-list.component.html'
})
export class IssuesListListComponent implements OnInit {

  issues$ = this.issueService.find();

  issueToEdit: Issue | null = null;

  issueForm = new FormGroup({
    title: new FormControl('', [Validators.required]), 
    description: new FormControl('', [Validators.required]), 
  });

  constructor(private issueService: IssueService) {
  }

  ngOnInit(): void {

  }

  onSubmit(): void {
    console.log('[submit]');
    console.log();
    if (this.issueForm.valid) {
      const issue = {
        ...this.issueForm.value,
        _id: this.issueToEdit?._id
      } as Issue;

      this.issueService.save(issue).subscribe(
        res => {
          this.issues$ = this.issueService.find();
          this.issueForm.reset();
          this.issueToEdit = null;
        }
      );
    }
  }

  onDelete(id: string): void {
    this.issueService.delete(id).subscribe(
      res => {
        this.issues$ = this.issueService.find();
      }
    );
  }

  onEdit(issue: Issue): void {
    this.issueToEdit = issue;
    const {title, description } = issue;
    this.issueForm.setValue(
      {
        title, description
      }
    )
  }

}
