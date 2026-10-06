import { invoices } from "../data.js";

export default function Billing() {
  return (
    <>
      <h1>Billing</h1>
      <p className="subtitle">Plan, payment method, and invoice history.</p>

      <div className="card">
        <div className="metric-label">Current plan</div>
        <div className="metric-value">Growth</div>
        <p style={{ fontSize: 14, color: "var(--muted)" }}>Renews Oct 1, 2026 · 85 seats</p>
        <button>Change plan</button>
      </div>

      <div className="card">
        <h2 style={{ fontSize: 15, margin: "0 0 12px" }}>Invoices</h2>
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Period</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice) => (
              <tr key={invoice.id}>
                <td>{invoice.id}</td>
                <td>{invoice.period}</td>
                <td>{invoice.amount}</td>
                <td>{invoice.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
