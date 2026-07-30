function SidebarCard({ title, children }) {
  return (
    <div className="sidebar-card">
      <h5 className="sidebar-heading">{title}</h5>

      {children}
    </div>
  );
}

export default SidebarCard;
