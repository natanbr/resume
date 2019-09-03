import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.addSvgIcon('intel-logo', '../assets/icons/inte.png');
  }
}
