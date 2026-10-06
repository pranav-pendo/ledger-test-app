import { useRef, useState } from "react";

export default function Settings() {
  const [workspace, setWorkspace] = useState("Tidewater Inc");
  const [timezone, setTimezone] = useState("America/New_York");
  const [saved, setSaved] = useState(false);
  // Values as of the last save (initially what the form loaded with), so a save can report what
  // it changed. Resets on remount along with the form state, since nothing is persisted.
  const lastSaved = useRef({ workspace, timezone });

  function handleSubmit(event) {
    event.preventDefault();
    setSaved(true);

    // Workspace-wide settings saved. Sends the timezone and which fields changed rather than the
    // free-text workspace name; saving again without edits reports both flags as false.
    window.pendo?.track?.("workspace_settings_saved", {
      timezone,
      previousTimezone: lastSaved.current.timezone,
      timezoneChanged: timezone !== lastSaved.current.timezone,
      workspaceNameChanged: workspace !== lastSaved.current.workspace,
    });
    lastSaved.current = { workspace, timezone };
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
