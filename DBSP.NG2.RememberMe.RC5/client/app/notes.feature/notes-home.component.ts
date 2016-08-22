import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'notes-home',
  template: `
  <div class="col s12 m3">
    <div class="col s12 offset-m1">
      <h1 class="center-align">Options</h1>
      <br />
      <notes-manager (onGreeting)="sendToListComponent($event)"
                     (onAddNote)="addNoteToListComponent($event)">
      </notes-manager>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12 offset-m1">
      <notes-container [greeting]="_greeting"
                       [isAddNoteEnabled]="_isAddNoteEnabled">
      </notes-container>
    </div>
  </div>
  `
})
export class NotesHomeComponent {

  private _greeting: string;
  private _isAddNoteEnabled: boolean;

  public sendToListComponent(greeting: string) {
    this._greeting = greeting;
  }

  public addNoteToListComponent(isAddNoteEnabled: boolean) {
    this._isAddNoteEnabled = isAddNoteEnabled;
  }
}
