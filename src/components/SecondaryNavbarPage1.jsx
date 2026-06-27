function SecondaryNavbarPage1({ activeTab, setActiveTab }) {
  const tabs = [
    { id: "mat_intrepeneur", label: "Intrepeneur" },
    { id: "mat_tempo", label: "Tempo" },
    { id: "section3", label: "Section 3" },
  ];

  return (
    <nav className="secondary-navbar">
      <ul>
        {tabs.map((tab) => (
          <li key={tab.id}>
            <button
              className={`secondary-nav-link ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SecondaryNavbarPage1;
