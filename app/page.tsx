import { AppShell } from "./components/layout/AppShell";
import { SectionPlaceholder } from "./components/sections/SectionPlaceholder";
import PageContainer from "./components/layout/PageContainer";
import { navItems, navLabel } from "./data/nav";

export default function Home() {
  return (
    <>
      <AppShell />
      <PageContainer>
        { navItems.map((item) => (
          <SectionPlaceholder
            key={item.id}
            id={item.id}
            title={navLabel(item.id)}
          />
        ))}
      </PageContainer>
    </>
  );
}
