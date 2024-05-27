import { DocEntry, MemberEntry } from '../rendering/entities.ts';

export type PackageMetadata = { resolvedPath: string, tsCompilerPath: string, packageName: string };

export interface PackageApiInfo<T = DocEntry> {
    packageName: string;
    entries: T[];
}

/** The JSON data file format for extracted API reference info. */
export interface EntryCollection<T = any> {
    moduleName: string;
    packagesApiInfo: PackageApiInfo<T>[];
}

export interface ManifestEntry extends DocEntry {
    publicUrl: string;
}

export interface ClassEntryMetadata {
    decorators: string[];
    baseClass: string | null;
}

export type Manifest = Record<string, PackageApiInfo<ManifestEntry>[]>;
