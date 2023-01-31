import React, { useState, useEffect } from 'react';

const UserForm = () => {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    occupation: '',
    state: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(res => res.json())
      .then(data => {
        setOccupations(data.occupations);
        setStates(data.states);
      })
      .catch(error => console.error(error));
  }, []);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setFormSubmitted(true);

    if (formData.name && formData.email && formData.password && formData.occupation && formData.state) {
      fetch('https://frontend-take-home.fetchrewards.com/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(res => {
          if (res.status === 201) {
            console.log('Form submitted successfully');
          }
        })
        .catch(error => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="occupation">Occupation:</label>
        <select
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
          required
        >
          <option value="">Select an Occupation</option>
          {occupations.map(occupation => (
           <option key={occupation} value={occupation}>
           {occupation}
         </option>
       ))}
     </select>
   </div>
   <div>
     <label htmlFor="state">State:</label>
     <select
       id="state"
       name="state"
       value={formData.state}
       onChange={handleChange}
       required
     >
       <option value="">Select a State</option>
       {states.map(state => (
         <option key={state.abbreviation} value={state.abbreviation}>
           {state.name}
         </option>
       ))}
     </select>
   </div>
   <button type="submit">Submit</button>
   {formSubmitted && (
     <div>Form submitted successfully</div>
   )}
 </form>
);
};

export default UserForm;