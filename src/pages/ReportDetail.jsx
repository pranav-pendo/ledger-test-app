import { Link, useParams } from "react-router-dom";
import { reports } from "../data.js";

export default function ReportDetail() {
  const { reportId } = useParams();
  const report = reports.find((r) => r.id === reportId);

  if (!report) {
    return (
      <>
        <h1>Report not found</h1>
        <p className="subtitle">No report matches “{reportId}”.</p>
        <Link to="/reports">Back to reports</Link>
      </>
    );
  }

  return (
    <>
      <h1>{report.name}</h1>
      <p className="subtitle">
        Owned by {report.owner} · {report.status}
      </p>

      <div className="card">
        <div className="metric-label">Summary</div>
        <p style={{ fontSize: 14, lineHeight: 1.6 }}>
          Adoption held steady week over week, with the largest gains among accounts that
          completed onboarding in the last 30 days.
        </p>
      </div>

      <div className="row">
        <button>Rerun report</button>
        <Link to="/reports">
          <button className="secondary">Back to reports</button>
        </Link>
      </div>
    </>
  );
}
