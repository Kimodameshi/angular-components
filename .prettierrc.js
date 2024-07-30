// @ts-check

/** @type {import('prettier-plugin-organize-attributes').PrettierPluginOrganizeAttributesParserOptions} */
const organizeAttributesPluginAngularConfig = {
    attributeGroups: [
        '$ANGULAR_STRUCTURAL_DIRECTIVE',
        '$ANGULAR_ELEMENT_REF',
        '$ID',
        '$DEFAULT',
        '$CLASS',
        '$ANGULAR_INPUT',
        '$ANGULAR_TWO_WAY_BINDING',
        '$ANGULAR_OUTPUT',
        '$ANGULAR_ANIMATION',
        '$ANGULAR_ANIMATION_INPUT'
    ],
    attributeSort: 'ASC',
    attributeIgnoreCase: true
};

/** @type {import('prettier').Options} */
const config = {
    printWidth: 120,
    tabWidth: 4,
    useTabs: false,
    singleQuote: true,
    trailingComma: 'none',
    singleAttributePerLine: true,
    htmlWhitespaceSensitivity: 'ignore',
    plugins: [
        'prettier-plugin-organize-attributes',
        'prettier-plugin-organize-imports',
        // should be last
        'prettier-plugin-multiline-arrays'
    ],
    overrides: [
        {
            files: ['*.yml'],
            options: {
                tabWidth: 2
            }
        },
        {
            files: ['*.xml'],
            options: {
                parser: 'xml',
                plugins: ['@prettier/plugin-xml']
            }
        },
        {
            files: ['*.html'],
            options: {
                parser: 'angular',
                ...organizeAttributesPluginAngularConfig
            }
        },
        {
            files: ['index.html'],
            options: {
                parser: 'html'
            }
        }
    ]
};

module.exports = config;
