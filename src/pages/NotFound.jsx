import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Pathnames already reported this session. Module-level rather than a ref so revisiting the same
// broken URL (which remounts this page) doesn't report it again.
const reportedPathnames = new Set();

// The URL parts sent below are user-controlled; capping each keeps the event's properties under
// Pendo's 512-byte limit.
const MAX_VALUE_LENGTH = 128;

export default function NotFound() {
  const location = useLocation();

  // 404s: this catch-all renders at any unmatched URL, so no Pendo Page rule can count it.
  useEffect(() => {
    if (reportedPathnames.has(location.pathname)) return;
    reportedPathnames.add(location.pathname);

    // Only the location the browser loaded has the key "default". After an in-app navigation,
    // document.referrer is stale (it describes the original page load), so it isn't sent.
    const inAppNavigation = location.key !== "default";
    window.pendo?.track?.("page_not_found", {
      pathname: location.pathname.slice(0, MAX_VALUE_LENGTH),
      search: location.search.slice(0, MAX_VALUE_LENGTH),
      referrer: inAppNavigation ? "" : document.referrer.slice(0, MAX_VALUE_LENGTH),
      inAppNavigation,
    });
  }, [location]);

  return (
    <>
      <h1>Page not found</h1>
      <p className="subtitle">That page doesn’t exist, or it moved.</p>
      <Link to="/dashboard">Go to dashboard</Link>
    </>
  );
}
