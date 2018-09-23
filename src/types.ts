export interface IReport {
  metadata: ReportMetadata;
  records: Record[];
  getSecurityStats: Function;
}

export interface ReportMetadata {
  requestDate: string;
}

export interface Record {
  metadata: RecordMetadata;
  graphs: Graph[];
  libraries: RecordLibrary[];
  vulnerabilities: Vulnerability[];
  unmatchedLibraries: any[];
  vulnMethods: VulnMethod[];
}

export interface SecurityStats {
  [key: string]: number;
  withVulnMethods: number;
  high: number;
  medium: number;
  low: number;
}

export interface LibraryStats {
  total: number;
  direct: number;
  transitive: number;
  vulnerable: number;
  thirdParty: number;
}

export interface Graph {
  coords: Coords | null;
  directs: Graph[];
  filename: Filename;
  lineNumber: number | null;
  moduleName: null;
  sha1: null;
  sha2: null;
  bytecodeHash: null;
}

export interface Coords {
  coordinateType: CoordinateType;
  coordinate1: string;
  coordinate2: null;
  version: VersionEnum;
  scope: null;
  platform: null;
  commitHash: null;
}

export enum CoordinateType {
  Gem = "GEM"
}

export enum VersionEnum {
  The0011 = "0.0.11",
  The002 = "0.0.2",
  The003 = "0.0.3",
  The007 = "0.0.7",
  The0118 = "0.11.8",
  The0121 = "0.12.1",
  The0137 = "0.13.7",
  The014 = "0.1.4",
  The0163 = "0.16.3",
  The0191 = "0.19.1",
  The020 = "0.2.0",
  The031 = "0.3.1",
  The035 = "0.3.5",
  The036 = "0.3.6",
  The040 = "0.4.0",
  The050 = "0.5.0",
  The055 = "0.5.5",
  The058 = "0.5.8",
  The063 = "0.6.3",
  The070 = "0.7.0",
  The074 = "0.7.4",
  The077 = "0.7.7",
  The092 = "0.9.2",
  The100 = "1.0.0",
  The101 = "1.0.1",
  The102 = "1.0.2",
  The103 = "1.0.3",
  The107 = "1.0.7",
  The110 = "1.1.0",
  The1100 = "1.10.0",
  The1101 = "1.10.1",
  The111 = "1.1.1",
  The1112 = "11.1.2",
  The1121 = "1.12.1",
  The114 = "1.1.4",
  The122 = "1.2.2",
  The126 = "1.2.6",
  The130 = "1.3.0",
  The1311 = "1.3.11",
  The1321 = "1.32.1",
  The134 = "1.3.4",
  The140 = "1.4.0",
  The141 = "1.4.1",
  The143 = "1.4.3",
  The1470 = "1.47.0",
  The1621 = "1.6.21",
  The164 = "1.6.4",
  The1672 = "1.6.7.2",
  The171 = "1.7.1",
  The174 = "1.7.4",
  The183 = "1.8.3",
  The186 = "1.8.6",
  The192 = "1.9.2",
  The200 = "2.0.0",
  The203 = "2.0.3",
  The204 = "2.0.4",
  The2111 = "2.11.1",
  The215 = "2.1.5",
  The220 = "2.2.0",
  The231 = "2.3.1",
  The233 = "2.3.3",
  The240 = "2.4.0",
  The241 = "2.4.1",
  The253 = "2.5.3",
  The260 = "2.6.0",
  The264 = "2.6.4",
  The270 = "2.7.0",
  The300 = "3.0.0",
  The303 = "3.0.3",
  The307 = "3.0.7",
  The31 = "3.1",
  The311 = "3.1.1",
  The3111 = "3.1.11",
  The3150 = "3.15.0",
  The320160521 = "3.2016.0521",
  The322 = "3.2.2",
  The330 = "3.3.0",
  The336 = "3.3.6",
  The340 = "3.4.0",
  The3422 = "3.4.22",
  The3591 = "3.5.9.1",
  The360 = "3.6.0",
  The411 = "4.1.1",
  The422 = "4.2.2",
  The424 = "4.2.4",
  The425 = "4.2.5",
  The427 = "4.2.7",
  The434 = "4.3.4",
  The4630 = "4.6.3.0",
  The466 = "4.6.6",
  The504 = "5.0.4",
  The505 = "5.0.5",
  The510 = "5.1.0",
  The590 = "5.9.0",
  The603 = "6.0.3",
  The6361 = "6.3.6.1",
  The671 = "6.7.1",
  The904 = "9.0.4"
}

export enum Filename {
  GemfileLock = "Gemfile.lock"
}

export interface RecordLibrary {
  name: string;
  description: string;
  author: string;
  authorUrl: null | string;
  language: Language;
  coordinateType: CoordinateType;
  coordinate1: string;
  coordinate2: string;
  bugTrackerUrl: null | string;
  codeRepoType: null;
  codeRepoUrl: null | string;
  latestRelease: string;
  latestReleaseDate: string;
  versions: VersionElement[];
  _links: Links;
}

export interface Links {
  html: string;
}

export enum Language {
  Afl30 = "AFL30",
  Apache20 = "APACHE20",
  Bsd3 = "BSD3",
  Gpl20 = "GPL20",
  Gpl30 = "GPL30",
  MIT = "MIT",
  Ofl11 = "OFL11",
  Ruby = "RUBY"
}

export interface VersionElement {
  version: VersionEnum;
  releaseDate: string;
  sha1: string;
  sha2: null;
  bytecodeHash: null;
  platform: Platform;
  licenses: LicenseElement[];
  _links: Links;
}

export interface LicenseElement {
  name: Language;
  license: LicenseEnum;
  fromParentPom: boolean;
}

export enum LicenseEnum {
  AcademicFreeLicense30AFL30 = "Academic Free License 3.0 (AFL-3.0)",
  ApacheLicense20Apache20 = "Apache License 2.0 (Apache-2.0)",
  BSD3ClauseNewOrRevisedLicenseBSD3Clause = 'BSD 3-Clause "New" or "Revised" License (BSD-3-Clause)',
  GNUGeneralPublicLicenseVersion20GPL20 = "GNU General Public License version 2.0 (GPL-2.0)",
  GNUGeneralPublicLicenseVersion30GPL30 = "GNU General Public License version 3.0 (GPL-3.0)",
  MITLicenseMIT = "MIT license (MIT)",
  OpenFontLicense11OFL11 = "Open Font License 1.1 (OFL-1.1)",
  RubyLicense = "Ruby License"
}

export enum Platform {
  Ruby = "ruby"
}

export interface RecordMetadata {
  recordType: string;
  report: string;
}

export interface VulnMethod {
  calls: Call[];
  links: Link[];
}

export interface Call {
  method: Method;
  callChains: Array<CallChain[]>;
}

export interface CallChain {
  caller: Method;
  callee: Method;
  fileName: string;
  lineNumber: number;
  internal: boolean;
}

export interface Method {
  moduleName: string;
  className: null | string;
  methodName: null | string;
  descriptor: null;
}

export interface Link {
  ref: string;
}

export interface Vulnerability {
  disclosureDate: string;
  cve: null | string;
  title: string;
  overview: string;
  language: Language;
  vulnerabilityTypes: string[];
  cvssScore: number;
  libraries: VulnerabilityLibrary[];
  _links: Links;
  hasExploits: boolean;
}

export interface VulnerabilityLibrary {
  details: Detail[];
  _links: Link;
}

export interface Detail {
  updateToVersion: string;
  versionRange: string;
  fixText: string;
  patch: string;
}
