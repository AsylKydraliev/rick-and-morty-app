import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planets',
  template: `
    <div class="alert alert-error">
      <h3>Oops, page not found</h3>
      <img width="300" src="../../../assets/images/rick.jpeg" alt="not found image">
    </div>
  `,
  styles: [`
    .alert-error {
      margin-top: 5%;
      padding: 16px 16px 50px;
      font-size: 20px;
      text-align: center;
    }
    h3 {
      margin-bottom: 5%;
    }
    img {
      border-radius: 5%;
    }
  `],
})
export class NotFoundComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
