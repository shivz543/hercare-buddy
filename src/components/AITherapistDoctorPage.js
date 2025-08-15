import React, { useState, useEffect } from "react";
import doctorsData from "./doctors.json";
import "./AITherapistDoctorPage.css";

export default function AITherapistDoctorPage() {
  // Chatbot state
  const [userMessage, setUserMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "Hello! I’m your virtual therapist. How can I assist you today? 🌸" }
  ]);

  // Doctor support states
  const [locationFilter, setLocationFilter] = useState("");
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  // Chatbot send message handler
  function sendMessage() {
    if (!userMessage.trim()) return;
    setChatMessages(prev => [...prev, { from: "user", text: userMessage }]);

    // Simple chatbot reply logic
    let botReply = "I’m here to help! You can find doctors by typing a location.";
    if (userMessage.toLowerCase().includes("help")) {
      botReply = "Please enter your location in the doctors section to find nearby gynecologists.";
    }
    if (userMessage.toLowerCase().includes("thank")) {
      botReply = "You’re welcome! Feel free to ask me anytime.";
    }

    setTimeout(() => {
      setChatMessages(prev => [...prev, { from: "bot", text: botReply }]);
    }, 600);

    setUserMessage("");
  }

  // Filter doctors by address
  useEffect(() => {
    if (!locationFilter.trim()) {
      setFilteredDoctors([]);
      return;
    }
    const filtered = doctorsData.filter(doc =>
      doc.address && doc.address.toLowerCase().includes(locationFilter.trim().toLowerCase())
    );
    setFilteredDoctors(filtered);
  }, [locationFilter]);

  return (
  <div className="page-container-horizontal">
    {/* Chatbot Section (Left) */}
    <section className="chatbot-section">
      <h2>AI Therapist Chatbot <span className="animated-emoji">💬</span></h2>
      <div className="chat-window">
        {chatMessages.map((msg, i) => (
          <div key={i} className={`chat-message ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={userMessage}
          onChange={e => setUserMessage(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </section>

    {/* Doctor Support Section (Right) */}
    <section className="doctor-support-section">
      <h2>Find Nearby Doctors <span className="animated-emoji">🔎</span></h2>
      <input
        type="text"
        placeholder="Enter location (e.g., Janakpuri)"
        value={locationFilter}
        onChange={e => setLocationFilter(e.target.value)}
        className="doctor-search-input"
      />
      <div className="doctor-list">
        {filteredDoctors.length === 0 && locationFilter && (
          <p>No doctors found in "{locationFilter}"</p>
        )}
        {filteredDoctors.map((doc, idx) => (
          <div key={idx} className="doctor-card">
            <h3>{doc.name}</h3>
            <p><b>Clinic:</b> {doc.address}</p>
            <p>
              {doc["mobile number"] && (
                <a href={`tel:${doc["mobile number"]}`} className="phone-link">📞 {doc["mobile number"]}</a>
              )}
            </p>
            <p><b>Experience:</b> {doc["years of experience"] || "N/A"} years</p>
            {doc["website to book appointment"] && (
              <p>
                <a href={doc["website to book appointment"]} target="_blank" rel="noopener noreferrer" className="appointment-link">
                  Book Appointment
                </a>
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  </div>
);
}