import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appSelect]'
})
export class SelectDirective implements OnInit {
  @Input("appSelect") lista: Array<string>

  constructor(private elementRef: ElementRef) { }

  ngOnInit(){
    this.lista.forEach((item, index) => {
      const option = document.createElement("option")
      option.innerHTML = item
      option.value = `${index}`

      this.elementRef.nativeElement.appendChild(option)
    })
  }

}
