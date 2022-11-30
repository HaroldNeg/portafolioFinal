import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';

  prueba : Boolean = false;

  cambiarModo() {
    document.body.classList.toggle('darkmode');
  }
}
