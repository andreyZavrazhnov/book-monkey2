import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { ActiveClassDirective } from '../../directives/active-class/active-class.directive';

@Component({
  selector: 'iteration-2',
  template: `
    <div class="ui two small ordered steps">
    <a [routerLink]="['dependency-injection']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Dependency-Injection</div>
      </div>
    </a>
    <a [routerLink]="['navigation','home']"
       activeClass="active"
       class="step">
      <div class="content">
        <div class="title">Navigation</div>
      </div>
    </a>
  </div>
  <div class="ui raised padded container segment">
    <router-outlet></router-outlet>
  </div>
  `,
  directives: [ROUTER_DIRECTIVES, ActiveClassDirective]
})
export class IterationTwoComponent { }
