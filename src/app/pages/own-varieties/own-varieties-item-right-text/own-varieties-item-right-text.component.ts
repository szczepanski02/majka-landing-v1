import { Component, Input } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-own-varieties-item-right-text',
  templateUrl: './own-varieties-item-right-text.component.html',
  styleUrls: ['./own-varieties-item-right-text.component.scss']
})
export class OwnVarietiesItemRightTextComponent {

  @Input() item!: PageSection;

  constructor() { }

}
