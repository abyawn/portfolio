import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import '../assets/styles/Contact.scss';

// TODO: Abyan - put your real contact address here. It is used for the mailto
// fallback below and shown as the "prefer email?" link.
const EMAIL = 'YOUR_EMAIL_HERE';

type Status = 'idle' | 'opened' | 'error';

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const [status, setStatus] = useState<Status>('idle');

  // TODO: Abyan - swap this for EmailJS / Web3Forms if you want in-page delivery.
  // For now the form composes a message and hands off to the visitor's mail client.
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const missingName = name.trim() === '';
    const missingEmail = email.trim() === '';
    const missingMessage = message.trim() === '';

    setNameError(missingName);
    setEmailError(missingEmail);
    setMessageError(missingMessage);

    if (missingName || missingEmail || missingMessage) return;

    if (EMAIL === 'YOUR_EMAIL_HERE') {
      setStatus('error');
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setStatus('opened');
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Always happy to talk about product, data, or enterprise AI. Send a note
            below.
          </p>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className="contact-form"
            onSubmit={sendEmail}
          >
            {/* Labels are plain elements above each field rather than MUI's
                floating variant, which lands on the border and straddles the
                white field and the dark page. */}
            <div className="form-flex">
              <div className="field">
                <label htmlFor="contact-name">Your Name</label>
                <TextField
                  required
                  id="contact-name"
                  placeholder="What's your name?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  error={nameError}
                  helperText={nameError ? 'Please enter your name' : ''}
                />
              </div>
              <div className="field">
                <label htmlFor="contact-email">Email / Phone</label>
                <TextField
                  required
                  id="contact-email"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailError}
                  helperText={emailError ? 'Please enter your email or phone number' : ''}
                />
              </div>
            </div>

            <div className="field body-form">
              <label htmlFor="contact-message">Message</label>
              <TextField
                required
                id="contact-message"
                placeholder="Send me any inquiries or questions"
                multiline
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={messageError}
                helperText={messageError ? 'Please enter the message' : ''}
              />
            </div>

            <div className="form-actions">
              <p className="contact-alt">
                Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </p>

              <Button type="submit" variant="contained" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>

            <p className={`form-status is-${status}`} role="status" aria-live="polite">
              {status === 'opened' && 'Your mail client should be opening with the message ready to send.'}
              {status === 'error' && (
                <>
                  The form isn&apos;t wired up yet. Please email directly at{' '}
                  <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                </>
              )}
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
