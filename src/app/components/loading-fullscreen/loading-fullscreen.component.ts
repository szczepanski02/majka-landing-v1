import { Component, OnInit, Input } from '@angular/core';
import { LoadingFullscreenAnimation } from './loading-fullscreen';

@Component({
  selector: 'app-loading-fullscreen',
  templateUrl: './loading-fullscreen.component.html',
  styleUrls: ['./loading-fullscreen.component.scss'],
  animations: [LoadingFullscreenAnimation]
})
export class LoadingFullscreenComponent implements OnInit {

  @Input() loading: boolean | null = null;

  constructor() {}

  ngOnInit(): void {
  }
  
}
