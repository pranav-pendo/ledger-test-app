import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate("/dashboard");
  }

  return (
    <div className="login-shell">
      <form className="card login-card" onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <p className="subtitle">Welcome back to Tidewater Ops.</p>

        <label htmlFor="email">Work email</label>
        <input id="email" type="email" placeholder="you@acme.com" required />

        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="••••••••" required />

        <button type="submit" style={{ width: "100%" }}>
          Sign in
        </button>
      </form>
    </div>
  );
}
