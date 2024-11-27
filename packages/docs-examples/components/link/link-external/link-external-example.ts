import { Component } from '@angular/core';
import { KbqIconModule } from '@koobiq/components/icon';
import { KbqLinkModule } from '@koobiq/components/link';

/**
 * @title Link external
 */
@Component({
    standalone: true,
    selector: 'link-external-example',
    imports: [KbqLinkModule, KbqIconModule],
    template: `
        <div style="padding: 16px">
            <a class="kbq-link_external" href="https://koobiq.io/components/link/overview" target="_blank" kbq-link>
                <span class="kbq-link__text">Центр технической поддержки</span>
                <i kbq-icon="kbq-north-east_16"></i>
            </a>
        </div>
    `
})
export class LinkExternalExample {}
