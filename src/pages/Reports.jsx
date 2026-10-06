import { Link } from "react-router-dom";
import { reports } from "../data.js";

export default function Reports() {
  return (
    <>
      <h1>Reports</h1>
      <p className="subtitle">Saved analyses your team can rerun at any time.</p>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Report</th>
              <th>Owner</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => (
              <tr key={report.id}>
                <td>
                  <Link to={`/reports/${report.id}`}>{report.name}</Link>
                </td>
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
