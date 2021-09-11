import React from 'react';
import InfoRow from './InfoRow';

const USER_INFOS = [
  { key: 'firstName', label: 'first name' },
  { key: 'lastName', label: 'last name' },
  { key: 'phone', label: 'phone' },
  { key: 'email', label: 'email' },
  { key: 'bio', label: 'bio' }
]

export default function UserProfilePage({ user }) {
  return user ? (
    <div className="page">
      <h2 className="page-title">Profile</h2>
      <div className="user-info">
        <img className="avatar" src={user.avatarImage} alt="loading user avatar.." />
        <div className="info-list">
          {USER_INFOS.map((info) => (
            <InfoRow key={info.key} label={info.label} value={user[info.key]} />
          ))}
        </div>
      </div>
    </div>
  ) : null;
};
