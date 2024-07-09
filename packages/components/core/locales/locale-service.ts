import { Inject, Injectable, InjectionToken, Optional, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { enUSLocaleData } from './en-US';
import { esLALocaleData } from './es-LA';
import { faIRLocaleData } from './fa-IR';
import { ptBRLocaleData } from './pt-BR';
import { ruRULocaleData } from './ru-RU';
import { zhCNLocaleData } from './zh-CN';

import {
    enUSFormattersData,
    esLAFormattersData,
    faIRFormattersData,
    ptBRFormattersData,
    ruRUFormattersData,
    zhCNFormattersData
} from './formatters';
import { DOCUMENT } from '@angular/common';


export const KBQ_LOCALE_ID = new InjectionToken<string>('KbqLocaleId');

export const KBQ_DEFAULT_LOCALE_ID = 'ru-RU';

export function KBQ_DEFAULT_LOCALE_DATA_FACTORY() {
    return {
        items: [
            { id: 'en-US', name: 'English' },
            { id: 'zh-CN', name: '简体中文' },
            { id: 'es-LA', name: 'Español' },
            { id: 'pt-BR', name: 'Português' },
            { id: 'ru-RU', name: 'Русский' },
            { id: 'fa-IR', name: 'فارسی' }
        ],
        'en-US': { ...enUSLocaleData, ...enUSFormattersData },
        'zh-CN': { ...zhCNLocaleData, ...zhCNFormattersData },
        'es-LA': { ...esLALocaleData, ...esLAFormattersData },
        'pt-BR': { ...ptBRLocaleData, ...ptBRFormattersData },
        'ru-RU': { ...ruRULocaleData, ...ruRUFormattersData },
        'fa-IR': { ...faIRLocaleData, ...faIRFormattersData }
    };
}
export const KBQ_LOCALE_DATA = new InjectionToken<any>(
    'KBQ_LOCALE_DATA', { providedIn: 'root', factory: KBQ_DEFAULT_LOCALE_DATA_FACTORY });


export const KBQ_LOCALE_SERVICE = new InjectionToken<KbqLocaleService>('KBQ_LOCALE_SERVICE');


@Injectable({ providedIn: 'root' })
export class KbqLocaleService {
    readonly changes: BehaviorSubject<string>;
    readonly locales: any = {};

    private readonly document = inject(DOCUMENT);

    id: string;
    current;

    constructor(
        @Optional() @Inject(KBQ_LOCALE_ID) id: string,
        @Optional() @Inject(KBQ_LOCALE_DATA) localeData
    ) {
        this.locales = localeData;

        this.id = id || KBQ_DEFAULT_LOCALE_ID;
        this.current = this.locales[this.id];

        this.changes = new BehaviorSubject(this.id);
    }

    setLocale(id: string) {
        this.id = id;
        this.current = this.locales[this.id];

        this.document.documentElement.lang = this.id;

        this.changes.next(this.id);
    }

    addLocale(id: string, localeData) {
        this.id = id;
        this.changes.next(this.id);

        this.locales[this.id] = localeData;
    }

    getParams(componentName: string) {
        return this.current[componentName];
    }
}
