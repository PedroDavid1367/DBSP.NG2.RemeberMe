import { Component, OnInit, Output, EventEmitter,
  Inject, ElementRef }   from "@angular/core";
import { NotesService }                            from "./notes.service";
import { Note }                                    from "./note.model"; 

@Component({
  selector: 'notes-manager',
  template: `
  <input type="button" value="add greeting" (click)="addGreeting()" />
  <div class="collection">
    <a href="#" class="collection-item" 
       (click)="setEnableAddNote()">Add note</a>
    <a href="#" class="collection-item">Filter notes</a>
  </div>
  `
})
export class NotesManagerComponent implements OnInit {

  @Output() public onGreeting: EventEmitter<string> = new EventEmitter<string>();
  @Output() public onAddNote: EventEmitter<boolean> = new EventEmitter<boolean>();
  public greeting: string = "Sup kid from note manager";
  private _isAddNoteEnabled: boolean;

  constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }
  
  public ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find("a").click(() => false);
  }

  public addGreeting() {
    this.onGreeting.emit(this.greeting);
  }

  public setEnableAddNote() {
    this._isAddNoteEnabled = true;
    this.onAddNote.emit(this._isAddNoteEnabled)
  }

  public greetings() {
    alert("eg");
  }
}
