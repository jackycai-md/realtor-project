import React, { useState, useEffect } from 'react';
import { Router } from "@reach/router";
import Header from './Header';
import HomePage from './HomePage';
import UserProfilePage from './UserProfilePage';
import FeaturePage from './FeaturePage';
import { fetcUserDetails, fetchEarthQuakeData } from './services';

export default function App() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState({});

  useEffect(async () => {
    fetcUserDetails()
      .then((details) => {
        setUser(details);
      })
      .catch((e) => console.error(e));
    fetchEarthQuakeData()
      .then((data) => {
        setData(data);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div>
      <Header user={user} />
      <div className="app-content">
        <Router>
          <HomePage path="/" data={data} />
          <UserProfilePage path="/user-profile" user={user} />
          <FeaturePage path="/feature/:featureId" />
        </Router>
      </div>
    </div>
  );
};
