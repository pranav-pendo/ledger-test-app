import { useState } from "react";

export default function Settings() {
  const [workspace, setWorkspace] = useState("Tidewater Inc");
  const [timezone, setTimezone] = useState("America/New_York");
  const [saved, setSaved] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);
  }

  return (
    <>
      <h1>Settings</h1>
      <p className="subtitle">Workspace preferences for everyone on your team.</p>

      <form className="card" onSubmit={handleSubmit}>
        <label htmlFor="workspace">Workspace name</label>
        <input
          id="workspace"
          value={workspace}
          onChange={(event) => {
            setWorkspace(event.target.value);
            setSaved(false);
          }}
        />

        <label htmlFor="timezone">Reporting timezone</label>
        <select
          id="timezone"
          value={timezone}
          onChange={(event) => {
            setTimezone(event.target.value);
            setSaved(false);
          }}
        >
          <option value="America/New_York">America/New_York</option>
          <option value="America/Los_Angeles">America/Los_Angeles</option>
          <option value="Europe/London">Europe/London</option>
        </select>

        <div className="row">
          <button type="submit">Save changes</button>
          {saved && <span style={{ fontSize: 14, color: "var(--muted)" }}>Saved.</span>}
        </div>
      </form>
    </>
  );
}
