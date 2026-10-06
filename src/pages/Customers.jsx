import { customers } from "../data.js";

export default function Customers() {
  return (
    <>
      <h1>Customers</h1>
      <p className="subtitle">Accounts with at least one active seat.</p>

      <div className="card">
        <table>
          <thead>
            <tr>
              <th>Account</th>
              <th>Plan</th>
              <th>Seats</th>
              <th>Health</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.name}>
                <td>{customer.name}</td>
                <td>{customer.plan}</td>
                <td>{customer.seats}</td>
                <td>{customer.health}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
