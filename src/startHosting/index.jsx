import React from 'react';
import './index.css';

const StartHosting = () => {
  return (
    <main id="start_hosting_container" className="signup-page">
      <h1 className="signup-title">Awesome! Let's dive right in!</h1>
      <form action="index.html" className="signup-form">
        <label htmlFor="title">Title</label>
        <select id="title">
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
        </select>
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" required />
        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" required />
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" required />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" required />
        <div className="signup-form__checkbox">
          <input type="checkbox" id="agree-terms" required />
          <label htmlFor="agree-terms">Agree to
            <a href="#">Terms &amp; Conditions</a>
          </label>
        </div>
        <button type="submit" className="button">Sign Up</button>
      </form>
    </main>
  )
}

export default StartHosting