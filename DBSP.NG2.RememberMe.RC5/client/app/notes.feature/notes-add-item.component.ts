import { Component, Input, Output, EventEmitter,
  ElementRef, Inject, OnInit }  from "@angular/core";
import { Note }                                    from "./note.model";

@Component({
  selector: 'notes-add-item',
  template: `
  {{ debugModel }}
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="title" type="text" class="validate" required
                 [(ngModel)]="_model.title" name="title">
          <label for="title">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <textarea id="content" class="materialize-textarea validate" required
                    [(ngModel)]="_model.content" name="content"></textarea>
          <label for="content">Content</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="category" type="text" class="validate" required
                 [(ngModel)]="_model.category" name="category">
          <label for="category">Category</label>
        </div>
      </div>

      <div class="input-field col s12">
        <select id="cat" #sel [(ngModel)]="_model.priority" name="priority">
          <option value="" disabled selected>Choose your option</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <label>Materialize Select</label>
      </div>
            
      <div class="row">
        <p>
          <input class="with-gap" [(ngModel)]="_model.priority" name="group1" type="radio" id="test1" />
          <label for="test1">Red</label>
        </p>
        <p>
          <input class="with-gap" name="group1" type="radio" id="test2" />
          <label for="test2">Yellow</label>
        </p>
        <p>
          <input class="with-gap" name="group1" type="radio" id="test3"  />
          <label for="test3">Green</label>
        </p>
      </div>
    </form>
  </div>
  `
})
export class NotesAddItemComponent implements OnInit {

  private _model: Note = new Note("", "", "", "");

  constructor(private _elRef: ElementRef,
    @Inject("$") private $: any) {
  }

  public ngOnInit() {
    this.$(this._elRef.nativeElement)
      .find("#cat").material_select();
  }

  private get debugModel(): string {
    return JSON.stringify(this._model);
  }
}
