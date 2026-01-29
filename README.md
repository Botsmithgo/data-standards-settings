# Data Standards Settings Component

A React component for managing data standards, output schemas, and ontologies in the HeyDonto system.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173`

## Project Structure

```
.
├── DataStandardsSettings.jsx    # Main component
├── DataStandardsSettings.README.md  # Component documentation
├── App.jsx                       # App wrapper
├── main.jsx                      # Entry point
├── index.html                    # HTML template
├── vite.config.js               # Vite configuration
└── package.json                 # Dependencies

```

## Features

- **Output Schemas**: Toggle industry standards (HL7 FHIR, HL7 v2.x, X12 EDI, C-CDA) and proprietary schemas
- **Version Selection**: Multi-select versions for each enabled standard
- **Ontologies**: Toggle terminology and code systems (ADA CDT, SNODENT, ICD-10, etc.)

## Dependencies

- React 18.2.0
- Ant Design 5.19.0
- styled-components 6.1.0
- @ant-design/icons 5.3.0
- Vite (dev dependency)

## Integration

See `DataStandardsSettings.README.md` for detailed integration instructions and customization options.

## Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.
