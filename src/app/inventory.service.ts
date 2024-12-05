import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface InventoryItem {
  itemId: string;
  name: string;
  category: string;
  quantity: number;
  reorderLevel: number;
}

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  private apiUrl = 'http://localhost:8081/api/inventory';  

  constructor(private http: HttpClient) { }


  getInventoryItems(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(this.apiUrl);
  }

  addInventoryItem(inventoryItem: InventoryItem): Observable<InventoryItem> {
    return this.http.post<InventoryItem>(this.apiUrl, inventoryItem);  
  }

  
  getItemsForReorder(): Observable<InventoryItem[]> {
    return this.http.get<InventoryItem[]>(`${this.apiUrl}/reorder`);
  }
}
