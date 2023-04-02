import { Component, Input, OnInit } from '@angular/core';
import { OwnVarietiesItemModel } from '../own-varieties.service';

@Component({
  selector: 'app-own-varieties-item-left-text',
  templateUrl: './own-varieties-item-left-text.component.html',
  styleUrls: ['./own-varieties-item-left-text.component.scss']
})
export class OwnVarietiesItemLeftTextComponent {

  @Input() item!: OwnVarietiesItemModel;

  constructor() { }

}
