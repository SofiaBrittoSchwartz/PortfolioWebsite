import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  imagePath = 'assets/photos/NorthernBrazilSelfie.jpeg';
  constructor() { }

  ngOnInit(): void {
  }

  getHeight() {

  }

}
