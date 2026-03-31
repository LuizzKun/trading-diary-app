import { useState } from 'react';
import './TradeEntryForm.css';

function TradeEntryForm() {
  const [session, setSession] = useState('New York');
  const [notes, setNotes] = useState('');
  return (
    <div className ="app-container">
    <div className ="trade-form">
     <h2>New Trade Entry</h2>

     <div className ="form-group">
      <label htmlFor="session">Session</label>
      <select
        id ="session"
        value = {session}
        onChange={(e) => setSession(e.target.value)}
        >
          <option value = "Asia">Asia</option>
          <option value = "London">London</option>
          <option value = "New York">New York</option>
        </select>
      </div>

      <div className ="form-group">
        <label htmlFor="notes">Notes</label>
        <textarea
          id ="notes"
          placeholder = "Write your trade notes..."
          value = {notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      <div className="preview-box">
        <p>Session: {session}</p>
        <p>Preview: {notes}</p>
      </div>
    </div>
  </div>
  );
}

export default TradeEntryForm;