import { Component } from '@angular/core';
import { KbqButtonModule } from '@koobiq/components/button';
import { KbqDividerModule } from '@koobiq/components/divider';
import { KbqDropdownModule } from '@koobiq/components/dropdown';
import { KbqIconModule } from '@koobiq/components/icon';
import { KbqTitleModule } from '@koobiq/components/title';

/**
 * @title Dropdown
 */
@Component({
    standalone: true,
    selector: 'dropdown-overview-example',
    imports: [
        KbqDropdownModule,
        KbqDividerModule,
        KbqButtonModule,
        KbqIconModule,
        KbqTitleModule
    ],
    templateUrl: 'dropdown-overview-example.html'
})
export class DropdownOverviewExample {}
