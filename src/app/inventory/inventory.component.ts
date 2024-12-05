import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { InventoryItem } from '../inventory.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  inventoryItem: InventoryItem = {
    itemId: '',
    name: '',
    category: '',
    quantity: 0,
    reorderLevel: 0
  };

  inventoryItems: InventoryItem[] = [];

  constructor(private inventoryService: InventoryService) { }

  ngOnInit(): void {
    this.getInventoryItems();  
  }


  getInventoryItems(): void {
    this.inventoryService.getInventoryItems().subscribe((data: InventoryItem[]) => {
      this.inventoryItems = data;
    });
  }

  
  onSubmit(): void {
    if (this.inventoryItem.itemId && this.inventoryItem.name && this.inventoryItem.category && 
        this.inventoryItem.quantity >= 0 && this.inventoryItem.reorderLevel >= 0) {
      this.inventoryService.addInventoryItem(this.inventoryItem).subscribe(
        response => {
          console.log('Item added successfully', response);
          this.getInventoryItems();  
        },
        error => {
          console.error('Error adding item', error);
        }
      );
    } else {
      alert('Please fill out all fields and ensure values are valid!');
    }
  }
}
