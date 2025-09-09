import React, { useState } from "react";
import "./tabledemo.css"; 

export default function App5() {
  const tables = [
    {
      id: 1,
      name: "Table 1",
      tabs: ["Tabs", "Data", "More"],
      data: {
        Tabs: [
          { id: 1, text: "Table1 - Tabs content 1", description: "Extra info A", status: "Active" },
          { id: 2, text: "Table1 - Tabs content 2", description: "Extra info B", status: "Inactive" },
        ],
        Data: [
          { id: 1, text: "Table1 - Data row 1", description: "Detailed row A", status: "Active" },
          { id: 2, text: "Table1 - Data row 2", description: "Detailed row B", status: "Pending" },
          { id: 3, text: "Table1 - Data row 3", description: "Detailed row C", status: "Inactive" },
        ],
        More: [
          { id: 1, text: "Table1 - More info 1", description: "Notes A", status: "Active" },
          { id: 2, text: "Table1 - More info 2", description: "Notes B", status: "Inactive" },
        ],
      },
    },
    {
      id: 2,
      name: "Table 2",
      tabs: ["Overview", "Rows", "Stats"],
      data: {
        Overview: [
          { id: 1, text: "Table2 overview 1", description: "Overview details A", status: "Active" },
          { id: 2, text: "Table2 overview 2", description: "Overview details B", status: "Inactive" },
        ],
        Rows: [
          { id: 1, text: "Table2 row A", description: "Row details A", status: "Pending" },
          { id: 2, text: "Table2 row B", description: "Row details B", status: "Active" },
        ],
        Stats: [
          { id: 1, text: "Table2 stat X", description: "Stat explanation A", status: "Active" },
          { id: 2, text: "Table2 stat Y", description: "Stat explanation B", status: "Inactive" },
        ],
      },
    },
    {
      id: 3,
      name: "Table 3",
      tabs: ["Info", "Items"],
      data: {
        Info: [
          { id: 1, text: "Table3 info A", description: "Info details A", status: "Active" },
          { id: 2, text: "Table3 info B", description: "Info details B", status: "Inactive" },
        ],
        Items: [
          { id: 1, text: "Table3 item one", description: "Item description A", status: "Active" },
          { id: 2, text: "Table3 item two", description: "Item description B", status: "Pending" },
        ],
      },
    },
    {
      id: 4,
      name: "Table 4",
      tabs: ["Main"],
      data: {
        Main: [
          { id: 1, text: "Table4 main content A", description: "Main detail A", status: "Active" },
          { id: 2, text: "Table4 main content B", description: "Main detail B", status: "Inactive" },
        ],
      },
    },
  ];

  const [activeTableId, setActiveTableId] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTable = tables.find((t) => t.id === activeTableId);
  const activeTab = activeTable.tabs[activeTabIndex];
  const activeRows = activeTable.data[activeTab];

  function handleSelectTable(id) {
    setActiveTableId(id);
    setActiveTabIndex(0);
  }

  return (
    <div className="app">
      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-title">Tables</div>
          <ul>
            {tables.map((t) => (
              <li
                key={t.id}
                onClick={() => handleSelectTable(t.id)}
                className={`sidebar-item ${t.id === activeTableId ? "active" : ""}`}
              >
                {t.name}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content */}
        <section className="main">
          {/* Header with tabs */}
          <div className="header">
            <div>
              <h2>{activeTable.name}</h2>
              <p>Select a tab to view details</p>
            </div>

            <div className="tabs">
              {activeTable.tabs.map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabIndex(idx)}
                  className={`tab-btn ${idx === activeTabIndex ? "active" : ""}`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tab content (different per tab) */}
          <div className="content">
            <h3>{activeTab} Data</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Text</th>
                  <th>Description</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {activeRows.map((r) => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.text}</td>
                    <td>{r.description}</td>
                    <td>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
