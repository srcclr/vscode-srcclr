"use strict";

export default class Issue {
  readonly id: string;
  readonly type: string;
  readonly severity: string;
  readonly description: string;
  readonly libraryName: string;
  readonly libraryVersionInUse: string;

  constructor(
    id: string,
    type: string,
    severity: string,
    description: string,
    libraryName: string,
    libraryVersionInUse: string
  ) {
    this.id = id;
    this.type = type;
    this.severity = severity;
    this.description = description;
    this.libraryName = libraryName;
    this.libraryVersionInUse = libraryVersionInUse;
  }
}
