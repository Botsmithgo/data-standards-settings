# HeyDonto Data Standards Settings Component

## Dependencies

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "antd": "^5.19.0",
    "styled-components": "^6.1.0",
    "@ant-design/icons": "^5.3.0"
  }
}
```

## Installation

```bash
npm install antd@5.19 styled-components@6 @ant-design/icons
```

## Usage

```jsx
import React from 'react';
import { ConfigProvider } from 'antd';
import DataStandardsSettings from './DataStandardsSettings';

// Optional: Customize Ant Design theme to match HeyDonto brand
const theme = {
  token: {
    colorPrimary: '#0891b2',
    borderRadius: 6,
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },
  components: {
    Switch: {
      colorPrimary: '#0891b2',
      colorPrimaryHover: '#0e7490',
    },
  },
};

function App() {
  return (
    <ConfigProvider theme={theme}>
      <DataStandardsSettings />
    </ConfigProvider>
  );
}

export default App;
```

## Component Structure

```
DataStandardsSettings/
├── DataStandardsSettings.jsx    # Main component
├── README.md                     # This file
└── index.js                      # Export file (optional)
```

## Features

- **Output Schemas**: Toggle industry standards (HL7 FHIR, HL7 v2.x, X12 EDI, C-CDA) and proprietary schemas
- **Version Selection**: Multi-select versions for each enabled standard
- **Ontologies**: Toggle terminology and code systems (ADA CDT, SNODENT, ICD-10, etc.)

## Customization

### Styled Components

All styling uses styled-components with transient props (prefixed with `$`) to avoid DOM warnings:

```jsx
// Example: Customize the primary color
const VersionChip = styled.div`
  border-color: ${props => props.$selected ? '#your-color' : '#e8e8e8'};
  color: ${props => props.$selected ? '#your-color' : '#666'};
`;
```

### Ant Design Theme

Use ConfigProvider to customize Ant Design components globally:

```jsx
<ConfigProvider
  theme={{
    token: {
      colorPrimary: '#your-brand-color',
    },
  }}
>
  <DataStandardsSettings />
</ConfigProvider>
```

## State Management

The component uses local state. To integrate with your app's state management:

```jsx
// Example: With external state
const DataStandardsSettings = ({ schemas, onSchemaChange, ontologies, onOntologyChange }) => {
  // Replace useState with props
  // Replace setSchemas with onSchemaChange
  // etc.
};
```
