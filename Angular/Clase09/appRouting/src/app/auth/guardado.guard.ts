import { CanDeactivate } from "@angular/router";
import { Injectable } from "@angular/core";

interface canDeactivateComponent {
  canDeactivateComponente: () => boolean
}

@Injectable()
export class GuardadoGuard implements CanDeactivate<canDeactivateComponent> {
  canDeactivate(component: canDeactivateComponent): boolean {
    if(component.canDeactivateComponente()){
      if(confirm("Hay datos no salvados, ¿Quieres salvarlos?")){
        return false
      }

      return true
    }

    return true



  }

}
