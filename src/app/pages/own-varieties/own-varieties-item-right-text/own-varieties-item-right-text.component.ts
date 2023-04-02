import { Component, Input } from '@angular/core';
import { OwnVarietiesItemModel } from '../own-varieties.service';

@Component({
  selector: 'app-own-varieties-item-right-text',
  templateUrl: './own-varieties-item-right-text.component.html',
  styleUrls: ['./own-varieties-item-right-text.component.scss']
})
export class OwnVarietiesItemRightTextComponent {

  @Input() item!: OwnVarietiesItemModel;

  constructor() { }

}
