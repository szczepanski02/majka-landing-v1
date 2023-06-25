import { Component, Input, OnInit } from '@angular/core';
import { PageSection } from 'src/app/translations-provider.service';

@Component({
  selector: 'app-home-protection-book',
  templateUrl: './home-protection-book.component.html',
  styleUrls: ['./home-protection-book.component.scss']
})
export class HomeProtectionBookComponent implements OnInit {

  @Input() section!: PageSection;

  constructor() { }

  ngOnInit(): void {}

}
