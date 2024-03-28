import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KbqIconModule } from '@koobiq/components/icon';
import { KbqLinkModule } from '@koobiq/components/link';

import { LinkApplicationExample } from './link-application/link-application-example';
import { LinkCaptionExample } from './link-caption/link-caption-example';
import { LinkColorExample } from './link-color/link-color-example';
import { LinkDisabledExample } from './link-disabled/link-disabled-example';
import { LinkExternalExample } from './link-external/link-external-example';
import { LinkGeneralExample } from './link-general/link-general-example';
import { LinkIconsExample } from './link-icons/link-icons-example';
import { LinkMultiLineExample } from './link-multi-line/link-multi-line-example';
import { LinkOverviewExample } from './link-overview/link-overview-example';
import { LinkPrepositionsExample } from './link-prepositions/link-prepositions-example';
import { LinkPrintExample } from './link-print/link-print-example';
import { LinkPseudoExample } from './link-pseudo/link-pseudo-example';
import { LinkTargetBlankExample } from './link-target-blank/link-target-blank-example';
import { LinkVisitedExample } from './link-visited/link-visited-example';


export {
    LinkOverviewExample,
    LinkPseudoExample,
    LinkGeneralExample,
    LinkExternalExample,
    LinkTargetBlankExample,
    LinkApplicationExample,
    LinkPrintExample,
    LinkMultiLineExample,
    LinkPrepositionsExample,
    LinkIconsExample,
    LinkColorExample,
    LinkVisitedExample,
    LinkDisabledExample,
    LinkCaptionExample
};

const EXAMPLES = [
    LinkOverviewExample,
    LinkPseudoExample,
    LinkGeneralExample,
    LinkExternalExample,
    LinkTargetBlankExample,
    LinkApplicationExample,
    LinkPrintExample,
    LinkMultiLineExample,
    LinkPrepositionsExample,
    LinkIconsExample,
    LinkColorExample,
    LinkVisitedExample,
    LinkDisabledExample,
    LinkCaptionExample
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        KbqIconModule,
        KbqLinkModule
    ],
    declarations: EXAMPLES,
    exports: EXAMPLES
})
export class LinkExamplesModule {}
