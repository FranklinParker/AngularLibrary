import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-uilib',
  template: `
    <p>
      uilib works!
    </p>
  `,
  styles: [
  ]
})
export class UilibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    alert('f');
  }

}
