import {Component, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Invoice} from '../Invoice';
import {InvoiceService} from '../invoice.service';
import {ActivatedRoute, Router} from '@angular/router';

import {NbDialogService, NbWindowService} from "@nebular/theme";
import {AddInvoiceToFactureComponent} from "./add-invoice-to-facture/add-invoice-to-facture.component";
import {AddCustomerToFactureComponent} from "./add-customer-to-facture/add-customer-to-facture.component";
import {AddProductToFactureComponent} from "./add-product-to-facture/add-product-to-facture.component";
import {Product} from "../product";
import {WindowFormComponent} from "./window-form/window-form.component";
import {Customer} from "../customer";
import {FormBuilder, Validators} from "@angular/forms";
import {ProductsService} from "../../products/products.service";
import {CustomersService} from "../../customers/customers.service";


@Component({
  selector: 'ngx-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.scss'],
})
export class CreateInvoiceComponent implements OnInit {

  invoice: Invoice = new Invoice();


  ngOnInit(): void {

  }

  invoiceForm = this.fb.group({})

  invoiceTemplateForm = this.fb.group({
    id: [, Validators.required],
    reference: ['', Validators.required],
    dateFacture: [new Date(), Validators.required],
    decompte: [, Validators.required],
    sommeGlobale: [, Validators.required]
  })

  onSubmit() {

  }

  dialogRef: any;



  onSubmitinvoiceTemplateForm() {
    this.invoice.id = this.invoiceTemplateForm.get('id').value
    this.invoice.reference = this.invoiceTemplateForm.get('reference').value
    this.invoice.dateFacture = this.invoiceTemplateForm.get('dateFacture').value
    this.invoice.decompte = this.invoiceTemplateForm.get('decompte').value
    this.invoice.sommeGlobale = this.invoiceTemplateForm.get('sommeGlobale').value

    console.log(this.invoice);
    this.dialogRef.close();
  }



}
