import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regards',
  template: `
    <div class="container">
    <h1 class="title">¡Saludos!, ¡Gracias por tu compra!</h1>
    <p class="content">
        Tu orden se esta preparando, pronto la disfrutarás.
    </p>
    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Labore, blanditiis officia facere eligendi maiores animi ullam, 
        magnam distinctio laboriosam, nesciunt quae.
        Veritatis optio sequi delectus consequuntur explicabo deleniti sed dignissimos.
    </span>
</div>
  `,
  styleUrls: ['./regards.component.scss']
})
export class RegardsComponent { }
