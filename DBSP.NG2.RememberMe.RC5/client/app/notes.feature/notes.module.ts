import { NgModule }                 from "@angular/core";
import { CommonModule }             from "@angular/common";

import { routing }                  from "./notes.routing";
import { NotesHomeComponent }       from "./notes-home.component"
import { NotesContainerComponent }  from "./notes-container.component";
import { NotesListComponent }       from "./notes-list.component";
import { NotesItemComponent }       from "./notes-item.component";
import { NotesService }             from "./notes.service"; 

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    NotesHomeComponent,
    NotesContainerComponent,
    NotesListComponent,
    NotesItemComponent
  ],
  providers: [
    NotesService
  ]
})
export class NotesModule { }
