import { Directive, OnInit, ElementRef } from '@angular/core'

@Directive({
  selector: "[directiva-basica]"
})
export class DirectivaBasica implements OnInit {


  constructor(private element: ElementRef){
  }

  ngOnInit(){
    this.element.nativeElement.style.backgroundColor = "red"
    this.element.nativeElement.style.fontSize = "30px"
    this.element.nativeElement.style.color = "white"
    this.element.nativeElement.style.fontFamily = "Verdana"
  }

}
