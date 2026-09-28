export type Module = {
  number: string;
  name: string;
  description: string;
  topics: string[];
};

/**
 * Year 3 · Semester 2 modules (Academic Year 2026, Semester 2).
 * The System Development Project is covered separately by the Dissertation section.
 */
export const modules: Module[] = [
  {
    number: '01',
    name: 'Blockchain Systems',
    description:
      'Distributed ledger technology from first principles — cryptographic hashing, digital signatures and Merkle trees, through consensus mechanisms such as proof of work and proof of stake, to writing and deploying smart contracts and reasoning about where a decentralised system is and is not the right answer.',
    topics: ['Distributed Ledgers', 'Cryptography', 'Consensus', 'Smart Contracts', 'Solidity'],
  },
  {
    number: '02',
    name: 'Software Quality & Testing',
    description:
      'Building quality into software rather than testing it in afterwards. Test planning and design, unit, integration and system testing, black-box and white-box techniques, coverage and defect tracking, test automation, and the quality standards and review processes that sit around a delivery pipeline.',
    topics: ['Test Design', 'Unit Testing', 'Automation', 'Code Coverage', 'Quality Assurance'],
  },
  {
    number: '03',
    name: 'Technopreneurship',
    description:
      'Taking a technical idea to market. Opportunity identification and validation, business model design, market and competitor analysis, costing and funding, intellectual property, and pitching a venture — the commercial side of engineering that decides whether a product ever reaches users.',
    topics: ['Business Models', 'Market Validation', 'Startups', 'Funding', 'Pitching'],
  },
];
