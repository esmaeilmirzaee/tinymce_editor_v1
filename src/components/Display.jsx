import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

const Display = () => {
  const [form, setForm] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('state') === null) {
      // return
    }
    const serialisedState = localStorage.getItem('state');
    setForm(JSON.parse(serialisedState));
  }, []);

  useEffect(() => {
    if (form !== null) {
      console.log(form.email);
    }
  }, [form]);

  console.log('Display', form);
  return (
    <>
      <h1>Display</h1>
      <p>{form !== null ? <>{form.email}</> : ''}</p>
    </>
  );
};

export default Display;
