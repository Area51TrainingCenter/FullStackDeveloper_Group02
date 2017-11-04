import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    const observador: Observable<string> = Observable.create(
      (observer: Observer<string>) => {
        setTimeout(() => {
          observer.next("Etapa 1 cumplida")
        }, 2000)

        setTimeout(() => {
          observer.next("Etapa 2 cumplida")
        }, 3000)

        setTimeout(() => {
          observer.complete()
        }, 4000)

        setTimeout(() => {
          observer.error("Se cayó el internet")
        }, 5000)

        setTimeout(() => {
          observer.next("Etapa 3 cumplida")
        }, 6000)

        setTimeout(() => {
          observer.next("Etapa 4 cumplida")
        }, 8000)
      }
    )

    observador.subscribe(
      (data: string) => console.log(data),
      (error: string) => console.log(error),
      () => console.log("Proceso completo")
    )
  }

}
