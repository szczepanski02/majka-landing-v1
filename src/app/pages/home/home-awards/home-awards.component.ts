import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-awards',
  templateUrl: './home-awards.component.html',
  styleUrls: ['./home-awards.component.scss']
})
export class HomeAwardsComponent implements OnInit {

  awards: string[] = [
    'Złoty medal w konkursie “Zieleń to życie”',
    'Konkurs na Najpiękniejszy Kwiat',
    'Srebrny medal w międzynarodowym konkursie',
    'Złoty medal w konkursie “Zieleń to życie”',
    'Srebrny medal w międzynarodowym konkursie',
    'Konkurs na Najpiękniejszy Kwiat',
    'Brązowy medal w konkursie roślin nowości'
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
