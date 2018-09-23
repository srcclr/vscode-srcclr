import Issue from "./models/Issue";
import { SecurityStats, LibraryStats } from "./types";

export const extractReportSection = (section: String = "") => (
  report: String = ""
) => {
  let store = false;
  const data = report.split("\n");
  const res = new Array();

  for (let i of data) {
    if (store && i !== "") {
      res.push(i);
    }

    if (i.toLowerCase() === section.toLowerCase()) {
      store = true;
    } else if (store && i === "") {
      store = false;
      break;
    }
  }

  return res;
};

export const extractSummarySection = extractReportSection("Summary Report");
export const extractIssuesSection = extractReportSection("Issues");
export const extractOpenSourceLibsSection = extractReportSection(
  "Open-Source Libraries"
);
export const extractSecuritySection = extractReportSection("Security");

export const constructIssueObj = (
  issueSectionArr: Array<string>,
  withHeaders: boolean
) => {
  const res = new Array();

  for (let issue of issueSectionArr) {
    const issueArr = issue.split(/\s{2,}/);
    const [id, type, severity, description, library] = issueArr;
    const libraryArr = library && library.split(" ");
    const [libraryName, libraryVersionInUse] = libraryArr;
    const issueObj = new Issue(
      id,
      type,
      severity,
      description,
      libraryName,
      libraryVersionInUse
    );
    res.push(issueObj);
  }

  return res;
};

export const constructLibraryStats = (
  statsArr: Array<string>,
  withHeaders: boolean = false
) => {
  const statsVals = [];
  for (let row of statsArr) {
    const rowArr = row.split(/\s{2,}/);
    const count = rowArr[1];
    statsVals.push(Number(count));
  }
  const [total, direct, transitive, vulnerable, thirdParty] = statsVals;
  const libraryStatsObj: LibraryStats = {
    total,
    direct,
    transitive,
    vulnerable,
    thirdParty
  };

  return libraryStatsObj;
};

export const constructSecurityStats = (
  statsArr: Array<string>,
  withHeaders: boolean = false
) => {
  const statsVals = [];
  for (let row of statsArr) {
    const rowArr = row.split(/\s{2,}/);
    const count = rowArr[1];
    statsVals.push(Number(count));
  }
  const [withVulnMethods, high, medium, low] = statsVals;
  const securityStatsObj: SecurityStats = {
    withVulnMethods,
    high,
    medium,
    low
  };

  return securityStatsObj;
};

export const cvss2SeverityLevel = (score: number): string => {
  if (score >= 7) {
    return "high";
  } else if (score >= 4) {
    return "medium";
  } else {
    return "low";
  }
};
