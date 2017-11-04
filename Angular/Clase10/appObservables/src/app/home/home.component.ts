import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  suscripcion: Subscription

  constructor() { }

  ngOnInit() {
    const observador: Observable<number> = Observable.interval(1000)
    this.suscripcion = observador.subscribe(
      (data: number) => console.log(data)
    )
  }

  ngOnDestroy(){
    this.suscripcion.unsubscribe()
  }

}
