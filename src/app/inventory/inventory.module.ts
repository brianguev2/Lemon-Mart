import { MaterialModule } from './../material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { CategoriesComponent } from './categories/categories.component';
import { ProductsComponent } from './products/products.component';
import { StockEntryComponent } from './stock-entry/stock-entry.component';
import { InventoryHomeComponent } from './inventory-home/inventory-home.component';
import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [
    CommonModule,
    InventoryRoutingModule,
    MaterialModule
  ],
  declarations: [CategoriesComponent, ProductsComponent, StockEntryComponent, InventoryHomeComponent, InventoryComponent]
})
export class InventoryModule { }
