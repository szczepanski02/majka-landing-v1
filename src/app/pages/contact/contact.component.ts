import { Component, OnInit } from '@angular/core';
import { HeaderOverlays } from 'src/app/layout/header/header.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public HeaderOverlays = HeaderOverlays;

  constructor() { }

  ngOnInit(): void {
  }

}
