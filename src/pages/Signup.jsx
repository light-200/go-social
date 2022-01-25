import React, { useState } from "react";
import "../style/signup.css";

export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  return (
    <div className="page">
      <div className="container">
        <span className="img">
          <img src="sd" alt="adad" />
        </span>
        <form onSubmit={handleSubmit} className="form">
          <h1>Signup to start</h1>
          <label htmlFor="name" className="materialLabel">
            Name:
          </label>
          <input
            type="text"
            name="name"
            placeholder="Jon"
            className="materialInput"
            value={form.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="materialLabel">
            Email:
          </label>
          <input
            type="email"
            name="email"
            placeholder="you@company.com"
            className="materialInput"
            value={form.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="name" className="materialLabel">
            Password:
          </label>
          <input
            type="password"
            name="password"
            placeholder="123456"
            className="materialInput"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="materialButton">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
