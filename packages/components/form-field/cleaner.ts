import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'kbq-cleaner',
    exportAs: 'kbqCleaner',
    template: `<i kbq-icon-button="mc-close-circle_16" [autoColor]="true"></i>`,
    styleUrls: ['cleaner.scss'],
    host: {
        class: 'kbq-cleaner'
    },
    encapsulation: ViewEncapsulation.None
})
export class KbqCleaner {}
