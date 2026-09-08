// app/(dashboard)/StaticNavLinks.tsx
// No "use client" — this is a Server Component by default.
import Link from "next/link";

export default function StaticNavLinks() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/overview">Overview</Link>
        </li>
        <li>
          <Link href="/settings">Settings</Link>
        </li>
      </ul>
    </nav>
  );
}
