import React, { useState, useEffect } from 'react';
import { fetchEarthQuakeDataById } from './services';
import InfoRow from './InfoRow';

const INFORMATIONS = [
  { key: 'title', label: 'title' },
  { key: 'mag', label: 'magnititude' },
  { key: 'time', label: 'time' },
  { key: 'status', label: 'status' },
  { key: 'tsunami', label: 'tsunami' },
  { key: 'type', label: 'type' },
]

export default function FeaturePage({ featureId }) {
  const [feature, setFeature] = useState({});

  useEffect(() => {
    fetchEarthQuakeDataById(featureId)
      .then((data) => setFeature(data))
      .catch((e) => console.error(e));
  }, []);

  const properties = feature.properties || {};

  return (
    <div>
      <h2 className="page-title">{properties.title}</h2>
      <div className="feature-details">
        {INFORMATIONS.map((info) => (
          <InfoRow label={info.label} key={info.key} value={properties[info.key]} />
        ))}
      </div>
    </div>
  );
};
