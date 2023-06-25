import { Component, Input } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-own-varieties-item-left-text',
  templateUrl: './own-varieties-item-left-text.component.html',
  styleUrls: ['./own-varieties-item-left-text.component.scss']
})
export class OwnVarietiesItemLeftTextComponent {

  @Input() item!: PageSection;

  constructor() { }

}
