// These type lacks type definitions.
// tslint:disable-next-line:no-var-requires
const highlightJs = require('highlight.js');

/**
 * Transforms a given code block into its corresponding HTML output. We do this using
 * highlight.js because it allows us to show colored code blocks in our documentation.
 */
export function highlightCodeBlock(code: string, language: string) {
    if (language) {
        return highlightJs.highlight(code, {
            // highlight.js expects "typescript" written out, while Github supports "ts".
            language: language.toLowerCase() === 'ts' ? 'typescript' : language
        }).value;
    }

    return code;
}
