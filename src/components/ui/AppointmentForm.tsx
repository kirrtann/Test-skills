'use client';

import { useState } from 'react';

export default function AppointmentForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    department: 'General',
    date: '',
    message: '',
  });

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: integrate with API endpoint
    alert('Appointment requested:\n' + JSON.stringify(form, null, 2));
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="name"
          value={form.name}
          onChange={onChange}
          required
          placeholder="Full name"
          className="input"
        />
        <input
          name="email"
          value={form.email}
          onChange={onChange}
          required
          type="email"
          placeholder="Email"
          className="input"
        />
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <input
          name="phone"
          value={form.phone}
          onChange={onChange}
          placeholder="Phone"
          className="input"
        />
        <input name="date" value={form.date} onChange={onChange} type="date" className="input" />
      </div>

      <select name="department" value={form.department} onChange={onChange} className="input">
        <option>General</option>
        <option>Cardiology</option>
        <option>Orthopedics</option>
        <option>Pediatrics</option>
        <option>Dermatology</option>
      </select>

      <textarea
        name="message"
        value={form.message}
        onChange={onChange}
        placeholder="Additional notes"
        className="input h-24"
      />

      <div className="flex justify-end">
        <button type="submit" className="btn-primary">
          Request Appointment
        </button>
      </div>
    </form>
  );
}
