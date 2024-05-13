import {
    animate,
    AnimationTriggerMetadata,
    state,
    style,
    transition,
    trigger,
    group
} from '@angular/animations';


/**
 * The following are all the animations for the kbq-select component, with each
 * const containing the metadata for one animation.
 *
 */
export const kbqSelectAnimations: {
    readonly transformPanel: AnimationTriggerMetadata;
    readonly fadeInContent: AnimationTriggerMetadata;
} = {
    /**
     * This animation transforms the select's overlay panel on and off the page.
     *
     * When the panel is attached to the DOM, it expands its width by the amount of padding, scales it
     * up to 100% on the Y axis, fades in its border, and translates slightly up and to the
     * side to ensure the option text correctly overlaps the trigger text.
     *
     * When the panel is removed from the DOM, it simply fades out linearly.
     */
    transformPanel: trigger('transformPanel', [
        state('void', style({
            transform: 'scaleY(0)',
            minWidth: '100%',
            opacity: 0
        })),
        transition('void => *', group([
            animate('0ms cubic-bezier(0.25, 0.8, 0.25, 1)')
        ])),
        transition('* => void', [
            animate('0ms 0ms linear', style({ opacity: 0 }))
        ])
    ]),

    /**
     * This animation fades in the background color and text content of the
     * select's options. It is time delayed to occur 100ms after the overlay
     * panel has transformed in.
     */
    fadeInContent: trigger('fadeInContent', [
        state('showing', style({ opacity: 1 })),
        transition('void => showing', [
            style({ opacity: 0 }),
            animate('0ms 0ms cubic-bezier(0.55, 0, 0.55, 0.2)')
        ])
    ])
};


export const transformPanel = kbqSelectAnimations.transformPanel;

export const fadeInContent = kbqSelectAnimations.fadeInContent;
