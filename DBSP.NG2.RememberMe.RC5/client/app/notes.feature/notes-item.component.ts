import { Component, Input }  from "@angular/core";
import { Note }              from "./note.model"; 

@Component({
  selector: 'notes-item',
  template: `
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">{{ note.title }}</span>
      <p>
        {{ note.content }}    
      </p>
      <br />  
      <p>Category: {{ note.category }}</p>
      <p>Priority: {{ note.priority }}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
  `
})
export class NotesItemComponent {

  @Input() public note: Note;
}
