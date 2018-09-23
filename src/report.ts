import {
  IReport,
  ReportMetadata,
  Record,
  SecurityStats,
  Vulnerability,
  VulnerabilityLibrary
} from "./types";
import * as helpers from "./helpers";

export class Report implements IReport {
  metadata: ReportMetadata;
  records: Record[];

  constructor(json: IReport) {
    this.metadata = json.metadata;
    this.records = json.records;
  }

  public getSecurityStats(): SecurityStats {
    const stats: SecurityStats = {
      withVulnMethods: 0,
      high: 0,
      medium: 0,
      low: 0
    };

    if (this.records && this.records.length > 0) {
      const vulns: Vulnerability[] = this.records[0].vulnerabilities;
      for (const vuln of vulns) {
        const libraries: VulnerabilityLibrary[] = vuln.libraries;
        const count = libraries.length;
        const severityLevel = helpers.cvss2SeverityLevel(vuln.cvssScore);

        stats[severityLevel] = stats[severityLevel] + count;
      }
    }

    return stats;
  }
}
