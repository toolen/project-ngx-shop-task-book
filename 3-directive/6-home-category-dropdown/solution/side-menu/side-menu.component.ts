import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICategory } from 'shared/interfaces/categories.interface';
@Component({
  selector: 'ngx-shop-side-menu',
  templateUrl: './side-menu.component.html',
})
export class SideMenuComponent {
  @Input()
  public categories: ICategory[] = [];
  @Output()
  public selectedSubCategory: EventEmitter<string> = new EventEmitter<string>();
  public currentName: string | null = null;

  public hover(name: string): void {
    this.currentName = name;
  }
  public mouseLeave(): void {
    this.currentName = null;
  }
  public redirectTo(subCategory: string): void {
    this.selectedSubCategory.emit(subCategory);
  }
}