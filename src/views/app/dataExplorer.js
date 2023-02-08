import React, { useState } from 'react';

import { QueryBuilder } from 'react-querybuilder';
import 'react-querybuilder/dist/query-builder.css';

const fields = [
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  { name: 'age', label: 'Age', inputType: 'number' },
  { name: 'address', label: 'Address' },
  { name: 'phone', label: 'Phone' },
  {
    name: 'email',
    label: 'Email',
    validator: ({ value }) => /^[^@]+@[^@]+/.test(value),
  },
  { name: 'twitter', label: 'Twitter' },
  {
    name: 'isDev',
    label: 'Is a Developer?',
    valueEditorType: 'checkbox',
    defaultValue: false,
  },
];
const initialQuery = {
  combinator: 'and',
  rules: [],
};

const DataExplorer = () => {
  const [query, setQuery] = useState(initialQuery);
  return (
    <QueryBuilder
      fields={fields}
      query={query}
      onQueryChange={(q) => setQuery(q)}
    />
  );
};

export default DataExplorer;
