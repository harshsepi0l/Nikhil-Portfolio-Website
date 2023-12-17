export const Sidebar = () => {
  return (
    <div
      className="fixed top-0 left-0 
      h-screen w-36 m-0 
      bg-blue-600 text-white shadow-lg "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button className="sidebar-elements">
        <i> About </i>
      </button>
      <button className="sidebar-elements">
        <i> Education </i>
      </button>
      <button className="sidebar-elements">
        <i> Projects </i>
      </button>
      <button className="sidebar-elements">
        <i> Experience </i>
      </button>
      <button className="sidebar-elements">
        <i> Skills </i>
      </button>
      <button className="sidebar-elements">
        <i> Awards </i>
      </button>
    </div>
  );
};
