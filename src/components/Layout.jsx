import { NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/billing", label: "Billing" },
  { to: "/customers", label: "Customers" },
  { to: "/reports", label: "Reports" },
  { to: "/settings", label: "Settings" },
  { to: "/dashboard", label: "Dashboard" },
];

export default function Layout() {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="brand">Tidewater Ops</div>
        <nav className="nav">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}
