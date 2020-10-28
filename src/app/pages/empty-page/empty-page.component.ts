import { Component, HostBinding } from '@angular/core';

import { UpgradableComponent } from 'theme/components/upgradable';

@Component({
  selector: 'app-empty-page',
  styleUrls: ['./empty-page.component.scss'],
  templateUrl: './empty-page.component.html',
})
export class EmptyPageComponent extends UpgradableComponent {
}
