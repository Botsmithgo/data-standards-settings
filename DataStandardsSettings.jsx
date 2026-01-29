import React, { useState } from 'react';
import styled from 'styled-components';
import { Card, Switch, Typography, Space } from 'antd';
import { 
  FireOutlined, 
  ApiOutlined, 
  FileTextOutlined, 
  MedicineBoxOutlined 
} from '@ant-design/icons';

const { Title, Text } = Typography;

// ============================================
// STYLED COMPONENTS
// ============================================

const PageContainer = styled.div`
  padding: 24px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f5f7fa;
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: 24px;
`;

const PageTitle = styled(Title)`
  && {
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 4px;
  }
`;

const PageDescription = styled(Text)`
  font-size: 14px;
  color: #666;
`;

const SectionCard = styled(Card)`
  && {
    border-radius: 10px;
    border: 1px solid #e8e8e8;
    margin-bottom: 20px;
    overflow: hidden;
    
    .ant-card-head {
      background: #fafbfc;
      border-bottom: 1px solid #f0f0f0;
      padding: 18px 20px;
      min-height: auto;
    }
    
    .ant-card-head-title {
      padding: 0;
    }
    
    .ant-card-body {
      padding: 20px;
    }
  }
`;

const CardHeaderContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CardIcon = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 18px;
  background: ${props => props.$gradient || 'linear-gradient(135deg, #7c3aed, #6d28d9)'};
`;

const CardTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const CardTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: #1a1a1a;
`;

const CardSubtitle = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 400;
`;

const SectionLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
  margin-top: ${props => props.$first ? '0' : '20px'};
`;

const StandardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProprietaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
`;

const StandardCard = styled.div`
  background: ${props => props.$active ? '#f0fdfa' : '#fafbfc'};
  border: 1px solid ${props => props.$active ? '#0891b2' : '#e8e8e8'};
  border-radius: 10px;
  padding: 18px;
  transition: all 0.2s;
  border-left: ${props => props.$proprietary ? '3px solid #0891b2' : 'none'};
  
  &:hover {
    border-color: ${props => props.$active ? '#0891b2' : '#d0d0d0'};
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  }
`;

const StandardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StandardInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
`;

const StandardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  flex-shrink: 0;
  background: ${props => props.$gradient || '#fee2e2'};
  color: #fff;
  
  .anticon {
    font-size: 20px;
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
`;

const StandardText = styled.div`
  flex: 1;
  min-width: 0;
`;

const StandardName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 2px;
`;

const StandardType = styled.div`
  font-size: 11px;
  color: #666;
`;

const StandardDescription = styled.div`
  font-size: 12px;
  color: #666;
  line-height: 1.5;
`;

const VersionsSection = styled.div`
  padding-top: 14px;
  margin-top: 14px;
  border-top: 1px solid #e8e8e8;
`;

const VersionsLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: #666;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
`;

const VersionChipsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const VersionChip = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 16px;
  border: 2px solid ${props => props.$selected ? '#0891b2' : '#e8e8e8'};
  border-radius: 6px;
  background: #fff;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.$selected ? '#0891b2' : '#666'};
  
  &:hover {
    border-color: #0891b2;
    color: #0891b2;
  }
`;

const CheckMark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: #0891b2;
  border-radius: 3px;
  color: #fff;
  
  svg {
    width: 12px;
    height: 12px;
  }
`;

const OntologiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
`;

const OntologyItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 14px;
  background: #fafbfc;
  border-radius: 8px;
  border: 1px solid #e8e8e8;
`;

const OntologyInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const OntologyName = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #1a1a1a;
`;

const OntologyDesc = styled.span`
  font-size: 11px;
  color: #666;
`;

// ============================================
// CUSTOM ICONS (for HeyDonto proprietary only)
// ============================================

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const LayersIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12,2 2,7 12,12 22,7 12,2" />
    <polyline points="2,17 12,22 22,17" />
    <polyline points="2,12 12,17 22,12" />
  </svg>
);

const TagIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);

// Custom icons for HeyDonto (not available in Ant Design)
const ToothIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C8 2 5 5 5 8c0 2 1 3 1 5 0 3 1 9 3 9s2-3 3-3 1 3 3 3 3-6 3-9c0-2 1-3 1-5 0-3-3-6-7-6z"/>
  </svg>
);

const PawIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="4" r="2"/>
    <circle cx="18" cy="8" r="2"/>
    <circle cx="4" cy="8" r="2"/>
    <path d="M12 12c-2 0-4 1-5 3-1 3 1 5 3 6 1 1 3 1 4 0 1 1 3 1 4 0 2-1 4-3 3-6-1-2-3-3-5-3h-4z"/>
  </svg>
);

// ============================================
// DATA
// ============================================

const initialOutputSchemas = [
  {
    id: 'fhir',
    name: 'HL7 FHIR',
    type: 'Healthcare Interoperability Standard',
    icon: 'fhir',
    IconComponent: FireOutlined,
    gradient: 'linear-gradient(135deg, #f87171, #dc2626)',
    description: 'Fast Healthcare Interoperability Resources — modern RESTful API standard for exchanging healthcare data.',
    enabled: true,
    proprietary: false,
    versions: ['DSTU2', 'STU3', 'R4', 'R4B', 'R5'],
    selectedVersions: ['R4'],
  },
  {
    id: 'hl7v2',
    name: 'HL7 v2.x',
    type: 'Messaging Standard',
    icon: 'hl7',
    IconComponent: ApiOutlined,
    gradient: 'linear-gradient(135deg, #818cf8, #4f46e5)',
    description: 'Traditional HL7 messaging for ADT, ORM, ORU and other healthcare message types.',
    enabled: true,
    proprietary: false,
    versions: ['2.3', '2.3.1', '2.4', '2.5', '2.5.1', '2.6', '2.7', '2.8'],
    selectedVersions: ['2.5.1'],
  },
  {
    id: 'x12',
    name: 'X12 EDI',
    type: 'Claims & Eligibility',
    icon: 'x12',
    IconComponent: FileTextOutlined,
    gradient: 'linear-gradient(135deg, #fbbf24, #d97706)',
    description: 'ANSI X12 electronic data interchange for claims (837D), eligibility (270/271), and remittance (835).',
    enabled: true,
    proprietary: false,
    versions: ['4010', '5010', '6020'],
    selectedVersions: ['5010'],
  },
  {
    id: 'ccd',
    name: 'C-CDA',
    type: 'Clinical Documents',
    icon: 'ccd',
    IconComponent: MedicineBoxOutlined,
    gradient: 'linear-gradient(135deg, #a78bfa, #7c3aed)',
    description: 'Consolidated Clinical Document Architecture for patient summaries and continuity of care documents.',
    enabled: false,
    proprietary: false,
    versions: ['1.1', '2.0', '2.1'],
    selectedVersions: ['2.1'],
  },
  {
    id: 'heydonto-dental',
    name: 'HeyDonto Dental',
    type: 'Proprietary Schema',
    icon: 'heydonto-dental',
    IconComponent: ToothIcon,
    gradient: 'linear-gradient(135deg, #34d399, #059669)',
    description: "HeyDonto's optimized dental data schema with support for procedures, insurance, and practice management.",
    enabled: true,
    proprietary: true,
  },
  {
    id: 'heydonto-animal',
    name: 'HeyDonto Animal Health',
    type: 'Proprietary Schema',
    icon: 'heydonto-animal',
    IconComponent: PawIcon,
    gradient: 'linear-gradient(135deg, #22d3ee, #0891b2)',
    description: "HeyDonto's veterinary data schema for animal patient records, species-specific treatments, and practice workflows.",
    enabled: true,
    proprietary: true,
  },
];

const initialOntologies = [
  { id: 'ada-cdt', name: 'ADA CDT', description: 'Dental procedure codes', enabled: true },
  { id: 'snodent', name: 'SNODENT', description: 'Dental terminology', enabled: true },
  { id: 'icd10', name: 'ICD-10', description: 'Diagnosis codes', enabled: true },
  { id: 'cpt', name: 'CPT', description: 'Medical procedures', enabled: false },
  { id: 'loinc', name: 'LOINC', description: 'Lab observations', enabled: false },
  { id: 'rxnorm', name: 'RxNorm', description: 'Medications', enabled: true },
];

// ============================================
// COMPONENT
// ============================================

const DataStandardsSettings = () => {
  const [schemas, setSchemas] = useState(initialOutputSchemas);
  const [ontologies, setOntologies] = useState(initialOntologies);

  const handleSchemaToggle = (id) => {
    setSchemas(prev =>
      prev.map(schema =>
        schema.id === id ? { ...schema, enabled: !schema.enabled } : schema
      )
    );
  };

  const handleVersionToggle = (schemaId, version) => {
    setSchemas(prev =>
      prev.map(schema => {
        if (schema.id === schemaId) {
          const isSelected = schema.selectedVersions?.includes(version);
          return {
            ...schema,
            selectedVersions: isSelected
              ? schema.selectedVersions.filter(v => v !== version)
              : [...(schema.selectedVersions || []), version],
          };
        }
        return schema;
      })
    );
  };

  const handleOntologyToggle = (id) => {
    setOntologies(prev =>
      prev.map(ont =>
        ont.id === id ? { ...ont, enabled: !ont.enabled } : ont
      )
    );
  };

  const industryStandards = schemas.filter(s => !s.proprietary);
  const proprietarySchemas = schemas.filter(s => s.proprietary);

  return (
    <PageContainer>
      <PageHeader>
        <PageTitle level={2}>System Configuration</PageTitle>
        <PageDescription>
          Manage global system settings, data standards, and integration preferences
        </PageDescription>
      </PageHeader>

      {/* Output Schemas Card */}
      <SectionCard
        title={
          <CardHeaderContent>
            <CardIcon $gradient="linear-gradient(135deg, #7c3aed, #6d28d9)">
              <LayersIcon />
            </CardIcon>
            <CardTitleGroup>
              <CardTitle>Output Schemas</CardTitle>
              <CardSubtitle>Data formats the system can produce</CardSubtitle>
            </CardTitleGroup>
          </CardHeaderContent>
        }
      >
        <SectionLabel $first>Industry Standards</SectionLabel>
        <StandardsList>
          {industryStandards.map(schema => {
            const IconComp = schema.IconComponent;
            return (
            <StandardCard key={schema.id} $active={schema.enabled}>
              <StandardHeader>
                <StandardInfo>
                  <StandardIcon $gradient={schema.gradient}>
                    <IconComp />
                  </StandardIcon>
                  <StandardText>
                    <StandardName>{schema.name}</StandardName>
                    <StandardType>{schema.type}</StandardType>
                  </StandardText>
                </StandardInfo>
                <Switch
                  checked={schema.enabled}
                  onChange={() => handleSchemaToggle(schema.id)}
                />
              </StandardHeader>
              <StandardDescription>{schema.description}</StandardDescription>
              
              {schema.enabled && schema.versions && (
                <VersionsSection>
                  <VersionsLabel>Versions</VersionsLabel>
                  <VersionChipsRow>
                    {schema.versions.map(version => {
                      const isSelected = schema.selectedVersions?.includes(version);
                      return (
                        <VersionChip
                          key={version}
                          $selected={isSelected}
                          onClick={() => handleVersionToggle(schema.id, version)}
                        >
                          {isSelected && (
                            <CheckMark>
                              <CheckIcon />
                            </CheckMark>
                          )}
                          <span>{version}</span>
                        </VersionChip>
                      );
                    })}
                  </VersionChipsRow>
                </VersionsSection>
              )}
            </StandardCard>
          )})}
        </StandardsList>

        <SectionLabel>HeyDonto Proprietary</SectionLabel>
        <ProprietaryGrid>
          {proprietarySchemas.map(schema => {
            const IconComp = schema.IconComponent;
            return (
            <StandardCard key={schema.id} $active={schema.enabled} $proprietary>
              <StandardHeader>
                <StandardInfo>
                  <StandardIcon $gradient={schema.gradient}>
                    <IconComp />
                  </StandardIcon>
                  <StandardText>
                    <StandardName>{schema.name}</StandardName>
                    <StandardType>{schema.type}</StandardType>
                  </StandardText>
                </StandardInfo>
                <Switch
                  checked={schema.enabled}
                  onChange={() => handleSchemaToggle(schema.id)}
                />
              </StandardHeader>
              <StandardDescription>{schema.description}</StandardDescription>
            </StandardCard>
          )})}
        </ProprietaryGrid>
      </SectionCard>

      {/* Ontologies Card */}
      <SectionCard
        title={
          <CardHeaderContent>
            <CardIcon $gradient="linear-gradient(135deg, #ec4899, #db2777)">
              <TagIcon />
            </CardIcon>
            <CardTitleGroup>
              <CardTitle>Ontologies</CardTitle>
              <CardSubtitle>Terminology and code systems used in mappings</CardSubtitle>
            </CardTitleGroup>
          </CardHeaderContent>
        }
      >
        <OntologiesGrid>
          {ontologies.map(ont => (
            <OntologyItem key={ont.id}>
              <OntologyInfo>
                <OntologyName>{ont.name}</OntologyName>
                <OntologyDesc>{ont.description}</OntologyDesc>
              </OntologyInfo>
              <Switch
                checked={ont.enabled}
                onChange={() => handleOntologyToggle(ont.id)}
              />
            </OntologyItem>
          ))}
        </OntologiesGrid>
      </SectionCard>
    </PageContainer>
  );
};

export default DataStandardsSettings;
