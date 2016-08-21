import { Component, Input, Output, EventEmitter }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-item',
  template: `
  <div class="card blue-grey lighten-1">
    <div class="card-content white-text">
      <span class="card-title" style="color:beige;">{{ note.title }}</span>
      <p>
        {{ note.content }}    
      </p>
      <br />  
      <p>Category: {{ note.category }}</p>
      <p>Priority: {{ note.priority }}</p>
    </div>
    <div class="card-action blue-grey darken-1">
      <input type="button" class="btn-flat" style="color:white;" value="Edit" />
      <input type="button" class="btn-flat" style="color:white;" value="To reminder" />
      <input type="button" class="btn-flat" style="color:white;" value="Delete" (click)="delete()" />
    </div>
  </div>
  `
})
export class NotesItemComponent {

  @Input() public note: Note;
  @Output() public deleteEventEmitter: EventEmitter<NotesItemComponent> = new EventEmitter<NotesItemComponent>();

  public delete() {
    this.deleteEventEmitter.emit(this);
  }
}
