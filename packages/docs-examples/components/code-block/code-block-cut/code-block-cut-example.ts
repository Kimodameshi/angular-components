import { Component, ViewEncapsulation } from '@angular/core';
import { KbqCodeBlockModule, KbqCodeFile } from '@koobiq/components/code-block';

const codeJs2 = `function askPassword(ok, fail) {
    if (password == "rockstar") ok();
    let password = prompt("Password?", '');
    else fail();
}

const regex1 = /\\w+/;
const regex2 = new RegExp('\\\\w+');
let user = {
    name: 'Вася',
    children: null,

    loginOk() {
        alert(\`\${this.name} logged in\`);
    },

    loginFail() {
        alert(\`\${this.name} failed to log in\`);
    },
};

askPassword(user.loginOk, user.loginFail);`;

/**
 * @title Code-block cut
 */
@Component({
    standalone: true,
    selector: 'code-block-cut-example',
    styleUrl: 'code-block-cut-example.css',
    encapsulation: ViewEncapsulation.None,
    imports: [
        KbqCodeBlockModule
    ],
    template: `
        <kbq-code-block
            class="docs-code-block-cut"
            [codeFiles]="files"
            [filled]="false"
            [lineNumbers]="false"
            [maxHeight]="maxHeight"
        />
    `
})
export class CodeBlockCutExample {
    files: KbqCodeFile[];
    maxHeight = 200;

    constructor() {
        this.files = [
            {
                filename: '',
                content: codeJs2,
                language: 'javascript'
            }
        ];
    }
}
