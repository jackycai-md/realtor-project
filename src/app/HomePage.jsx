import { Link } from '@reach/router';
import React, { useState, useEffect } from 'react';
import { formatTime } from './utils';

const TABLE_COLUMNS = [{
  key: 'place',
  displayName: 'title'
},
{
  key: 'mag',
  displayName: 'magnititude'
},
{
  key: 'time',
  displayName: 'time'
}];

export default function HomePage({ data }) {
  const metadata = data.metadata || {};
  const features = data.features || [];

  const [sortedFeatures, setFeatures] = useState(features);
  const [sortState, setSortState] = useState({ key: '', asc: true });

  useEffect(() => {
    setFeatures(features);
  }, [features])

  const onSortFeatures = (key) => {

    let asc = true;
    if (key === sortState.key) {
      asc = !sortState.asc;
    }

    const newSortedFeatures = [...sortedFeatures];

    setSortState({ key, asc });

    newSortedFeatures.sort((f1, f2) => {
      const value1 = f1.properties[key];
      const value2 = f2.properties[key];

      if (value1 === value2) {
        return 0;
      }

      if (asc) {
        return value1 > value2 ? 1 : -1;
      }

      return value1 > value2 ? -1 : 1;
    });

    setFeatures(newSortedFeatures);
  }

  const renderTableCell = (col, feature) => {
    const value = feature.properties[col];

    switch(col) {
      case 'place':
        return <Link to={`/feature/${feature.id}`}>{value}</Link>;
      case 'time':
        return formatTime(value);
      default:
        return value;
    }
  }

  return (
    <div className="page">
      <h2 className="page-title">{metadata ? metadata.title : ''}</h2>
      <div className="page-content">
        <table className="homepage-table">
          <thead>
            <tr>
              {TABLE_COLUMNS.map((col) => (
                <th
                  className="table-header"
                  key={col.key}
                  onClick={() => onSortFeatures(col.key)}
                >
                  {col.displayName}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedFeatures.map((feature) => (
              <tr key={feature.id}>
                {TABLE_COLUMNS.map((col) => (
                  <td className={`table-data ${col.key === 'place' ? 'text-left' : ''}`} key={col.key}>
                    {renderTableCell(col.key, feature)}
                  </td> 
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};
