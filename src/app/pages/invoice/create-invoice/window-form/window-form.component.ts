import { Component, OnInit } from '@angular/core';
import {NbWindowRef} from "@nebular/theme";

@Component({
  template: `
    <form (ngSubmit)="onSubmit()"  novalidate>
      <div class="form-group row">
        <label  class="label col-sm-3 col-form-label">Id</label>
        <div class="col-sm-9">
          <input type="number" class="form-control" fullWidth formControlName="id" >
        </div>
      </div>
      <div class="form-group row">
        <label  class="label col-sm-3 col-form-label">Reference</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" fullWidth formControlName="reference" >
        </div>
      </div>
      <div class="form-group row">
        <label  class="label col-sm-3 col-form-label">date Facture</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" fullWidth formControlName="dateFacture" >
        </div>
      </div>
      <div class="form-group row">
        <label class="label col-sm-3 col-form-label">Decompte</label>
        <div class="col-sm-9">
          <input type="email" class="form-control" fullWidth formControlName="decompte" >
        </div>
      </div>
      <div class="form-group row">
        <label class="label col-sm-3 col-form-label">Somme</label>
        <div class="col-sm-9">
          <input type="text" class="form-control" fullWidth formControlName="sommeGlobale" >
        </div>
      </div>


      <div class="form-group row">
        <div class="offset-sm-12 col-sm-9">
          <button type="submit" class="btn btn-primary btn-sm"  >save</button>
        </div>
      </div>
    </form>

  `,
  styleUrls: ['window-form.component.scss'],
})

export class WindowFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }

  onSubmit() {
    
  }
}
