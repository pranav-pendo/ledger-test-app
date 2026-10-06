import Metric from "../components/Metric.jsx";
import { metrics, reports } from "../data.js";

export default function Dashboard() {
  return (
    <>
      <h1>Overview</h1>
      <p className="subtitle">A snapshot of product usage across your workspace.</p>

      <div className="metrics">
        {metrics.map((metric) => (
          <Metric key={metric.label} label={metric.label} value={metric.value} />
        ))}
      </div>

      <div className="card">
        <h2 style={{ fontSize: 15, margin: "0 0 12px" }}>Recent reports</h2>
        <table>
          <thead>
            <tr>
              <th>Report</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.slice(0, 3).map((report) => (
              <tr key={report.id}>
                <td>{report.name}</td>
                <td>{report.owner}</td>
                <td>{report.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
