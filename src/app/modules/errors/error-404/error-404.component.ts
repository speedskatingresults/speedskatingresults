import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'error-404',
    templateUrl: './error-404.component.html',
    styleUrls: ['./error-404.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class Error404Component {
  constructor() {
  }
}
