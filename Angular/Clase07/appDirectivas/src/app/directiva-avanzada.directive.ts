import { Directive, HostListener, HostBinding, ElementRef, Input, Output, EventEmitter } from '@angular/core';


@Directive({
  selector: '[appDirectivaAvanzada]'
})
export class DirectivaAvanzadaDirective {
  @Input() colorPorDefecto: string
  @Input() colorHover: string
  @Input("appDirectivaAvanzada") directiva: string
  @Output("fechaHoy") fechaHoy = new EventEmitter<Date>()

  constructor(private elementRef: ElementRef) { }

  @HostBinding("style.backgroundColor") colorFondo: string

  @HostListener("mouseenter") mouseenter(){
    //this.elementRef.nativeElement.style.backgroundColor = this.directiva
    this.colorFondo = this.directiva

    const span = document.createElement("span")
    span.innerHTML = "Etiqueta span"

    this.elementRef.nativeElement.appendChild(span)
  }

  @HostListener("mouseleave") mouseleave(){
    //this.elementRef.nativeElement.style.backgroundColor = this.colorPorDefecto
    this.colorFondo = this.colorPorDefecto
    this.fechaHoy.emit(new Date())
  }

}
