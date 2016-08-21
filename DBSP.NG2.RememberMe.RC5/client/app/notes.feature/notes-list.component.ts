import { Component, Input }  from "@angular/core";
import { Note }              from "./note.model"; 

@Component({
  selector: 'notes-list',
  template: `
  <notes-item *ngFor="let note of notes"
              [note]="note">
  </notes-item>
  `
})
export class NotesListComponent {

  @Input() public notes: Note[];
}
