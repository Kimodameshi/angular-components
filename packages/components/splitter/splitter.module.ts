import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KbqIconModule } from '@koobiq/components/icon';

import {
    KbqGutterDirective,
    KbqGutterGhostDirective,
    KbqSplitterAreaDirective,
    KbqSplitterComponent
} from './splitter.component';


@NgModule({
    imports: [
        CommonModule,
        KbqIconModule
    ],
    exports: [
        KbqGutterDirective,
        KbqSplitterAreaDirective,
        KbqSplitterComponent
    ],
    declarations: [
        KbqGutterDirective,
        KbqGutterGhostDirective,
        KbqSplitterAreaDirective,
        KbqSplitterComponent
    ]
})
export class KbqSplitterModule {
}
