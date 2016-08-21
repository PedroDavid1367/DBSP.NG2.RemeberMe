import { Component }                from "@angular/core";
import { OidcTokenManagerService }  from "../common.services/oidc-token-manager.service";

@Component({
  selector: 'notes-home',
  template: `
  <div class="col s12 m3">
    <div class="col s12 offset-m1">
      <h1 class="center-align">Options</h1>
      <br />
      <p>
        Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod,
        iaculis eu lacus nunc mi elit, vehicula ut laoreet ac, aliquam sit amet justo nunc tempor, metus vel.
      </p>
    </div>
  </div>

  <div class="col s12 m8">
    <div class="col s12 offset-m1">
      <notes-container></notes-container>
    </div>
  </div>
  `
})
export class NotesHomeComponent {

}
