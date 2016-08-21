import { Component, OnInit }  from "@angular/core";
import { NotesService }       from "./notes.service";
import { Note }               from "./note.model"; 

@Component({
  selector: 'notes-container',
  template: `
  <notes-list [notes]="notes"></notes-list>
  `
})
export class NotesContainerComponent implements OnInit {

  public notes: Note[];

  constructor(private _notesService: NotesService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  private getHeroes() {
    this._notesService
      .getNotes()
      .subscribe(notes => {
        this.notes = notes;
        // TODO: Subscribe to error and display it.
      });
  }
}
