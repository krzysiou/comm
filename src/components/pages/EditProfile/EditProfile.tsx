'use client';

import React, { useState } from 'react';

import { useSession } from '@/hooks/use-session';
import { EditProfileStyled } from './EditProfile.styles';

type EditPayload = {
  name: string;
  surname: string;
  bio: string;
  work: string;
  hobby: string;
};

const EditProfile = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    bio: '',
    work: '',
    hobby: '',
  });

  const { editProfile } = useSession();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await editProfile(formData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <EditProfileStyled>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="hobby">Hobby</label>
          <input
            type="text"
            id="hobby"
            name="hobby"
            value={formData.hobby}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </EditProfileStyled>
  );
};

export { EditProfile, type EditPayload };
