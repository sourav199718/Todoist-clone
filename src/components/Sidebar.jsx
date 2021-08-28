import React from "react";
import { FaRegCalendarAlt, FaRegCalendar, FaInbox } from "react-icons/fa";

function Sidebar({ selectedTab, setSelectedTab }) {
  return (
    <div className="sidebar">
      <div
        className={selectedTab === "Inbox" ? "active" : ""}
        onClick={() => setSelectedTab("Inbox")}
      >
        <FaInbox className="icon" />
        Inbox
      </div>
      <div
        className={selectedTab === "Today" ? "active" : ""}
        onClick={() => setSelectedTab("Today")}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>
      <div
        className={selectedTab === "Next_7" ? "active" : ""}
        onClick={() => setSelectedTab("Next_7")}
      >
        <FaRegCalendar className="icon" />
        Next 7 Days
      </div>
    </div>
  );
}

export default Sidebar;
