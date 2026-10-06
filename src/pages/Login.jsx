import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Completed sign-in: onSubmit only runs once the browser's required/type="email" validation
    // has passed. There's no auth backend yet; when one is added, move this into its success
    // callback. Only the email's domain is sent, never the address itself or the password.
    const email = event.currentTarget.elements.email.value;
    const emailDomain = email.includes("@") ? email.split("@").pop().toLowerCase() : "";
    window.pendo?.track?.("user_signed_in", {
      authMethod: "password",
      emailDomain,
    });

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
