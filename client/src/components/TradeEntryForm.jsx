import { useState } from 'react';
import './TradeEntryForm.css';

function TradeEntryForm() {
  const [date, setDate] = useState('');
  const [ticker, setTicker] = useState('');
  const [emotions, setEmotions] = useState([]);
  const [session, setSession] = useState('New York');
  const [notes, setNotes] = useState('');
  const [entries, setEntries] = useState([]);

  const handleSubmit = () => {
    const newEntry = {
      date,
      ticker,
      session,
      emotions,
      notes,
    };

    setEntries([...entries, newEntry]);

    setDate('');
    setTicker('');
    setSession('New York');
    setEmotions([]);
    setNotes('');
  };

  return (
    <div className ="app-container">
    <div className ="trade-form">
     <h2>New Trade Entry</h2>
     
     <div className ="form-group">
      <label htmlFor="date">Date</label>
      <input
        id ="date"
        type="date"
        value = {date}
        onChange={(e) => setDate(e.target.value)}
        />
     </div>

     <div className ="form-group">
      <label htmlFor ="ticker">Ticker</label>
      <input
        id="ticker"
        type="text"
        placeholder = "NQ, ES, YM, etc."
        value = {ticker}
        onChange ={(e) => setTicker(e.target.value)}
      />

     </div>

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

    <div className="form-group">
  <label>Emotions</label>

  <div className="checkbox-group">
    {['Calm', 'Confident', 'Hesitant', 'Frustrated', 'Greedy', 'Fearful'].map((emo) => (
      <label key={emo}>

        <input
          type="checkbox"
          value={emo}
          checked={emotions.includes(emo)}
          onChange={(e) => {
            if (e.target.checked) {
              setEmotions([...emotions, emo]);
            } else {
              setEmotions(emotions.filter((item) => item !== emo));
            }
          }}
        />
        {emo}
      </label>
    ))}
  </div>
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

      <button onClick={handleSubmit}>Save Trade</button>
      <div className="entries-list">
        <h2>Saved Entries</h2>

        {entries.map((entry, index) => (
          <div key={index} className ="entry-card">
            <p><strong>Date</strong> {entry.date}</p>
            <p><strong>Ticker</strong> {entry.ticker}</p>
            <p><strong>Session</strong> {entry.session}</p>
            <p><strong>Emotions</strong> {entry.emotions.join(', ')}</p>
            <p><strong>Notes</strong> {entry.notes}</p>
          </div>
        ))}
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