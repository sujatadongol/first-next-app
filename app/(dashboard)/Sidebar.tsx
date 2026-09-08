// app/(dashboard)/SidebarWrapper.tsx
"use client";
import { useState } from "react";

export default function SidebarWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(true);
  return (
    <aside style={{ width: open ? 200 : 50 }}>
      <button onClick={() => setOpen(!open)}>
        {open ? "Collapse" : "Expand"}
      </button>
      {open && children}
    </aside>
  );
}
