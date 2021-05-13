import { ChangeDetectionStrategy, Component } from '@angular/core';

import { demoComponentContent } from './modal-section.list';
import { ContentSection } from '@ngx-bootstrap-doc/docs';

@Component({
  selector: 'modal-section',
  templateUrl: './modal-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalSectionComponent {
  name = 'Modals';
  src = 'https://github.com/valor-software/ngx-bootstrap/tree/development/src/modal';
  componentContent: ContentSection[] = demoComponentContent;
}