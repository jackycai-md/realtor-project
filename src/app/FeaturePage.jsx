import React, { useState, useEffect } from 'react';
import { fetchEarthQuakeDataById } from './services';
import InfoRow from './InfoRow';
import { formatTime } from './utils';

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

  const getFormattedValue = (key) => {
    const value = properties[key];

    if (key === 'time') {
      return formatTime(value);
    }

    return value;
  };

  return (
    <div>
      <h2 className="page-title">{properties.title}</h2>
      <div className="feature-details">
        {INFORMATIONS.map((info) => (
          <InfoRow label={info.label} key={info.key} value={getFormattedValue(info.key)} />
        ))}
      </div>
    </div>
  );
};
