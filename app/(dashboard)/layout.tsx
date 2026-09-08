// app/(dashboard)/layout.tsx
import SidebarWrapper from "./Sidebar";
import StaticNavLinks from "./StaticNavLinks";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ display: "flex" }}>
      <SidebarWrapper>
        <StaticNavLinks />
      </SidebarWrapper>
      <main>{children}</main>
    </div>
  );
}
