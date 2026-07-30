import SidebarCard from "./SidebarCard";
import { latestUpdates, quickLinks } from "../../data/sidebarData";

function Sidebar() {
  return (
    <>
      <SidebarCard title="Latest Updates">
        <ul className="sidebar-list">
          {latestUpdates.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </SidebarCard>

      <SidebarCard title="Quick Links">
        <ol className="quick-links">
          {quickLinks.map((item, index) => (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          ))}
        </ol>
      </SidebarCard>
    </>
  );
}

export default Sidebar;
