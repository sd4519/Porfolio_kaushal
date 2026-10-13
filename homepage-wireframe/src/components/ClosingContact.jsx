import './ClosingContact.css';

export default function ClosingContact() {
  return <section className="closing-contact" id="contact" aria-labelledby="closing-title">
    <h2 id="closing-title"><span>High stakes, high speed.</span><span>That's Kaushal.</span></h2>
    <div className="closing-bottom">
      <h3>One conversation. That is<br />how it starts.</h3>
      <div className="closing-actions"><p>If your next launch has real stakes, we should talk.</p>
        <div className="closing-buttons">
          <button disabled><span aria-hidden="true">→</span>Book a call</button>
          <button disabled><span aria-hidden="true">→</span>Send a message</button>
        </div>
      </div>
    </div>
  </section>;
}
