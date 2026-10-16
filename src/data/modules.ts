export type Module = {
  number: string;
  name: string;
  description: string;
  topics: string[];
};

/**
 * Year 3 · Semester 2 modules. Blockchain Systems and Software Quality & Testing are
 * taken from the official UTM Module Information Packs; both are 6 credits, Level 3.
 * Technopreneurship is written from the module title — swap in the MIP wording when available.
 * The System Development Project is covered separately by the Dissertation section.
 */
export const modules: Module[] = [
  {
    number: '01',
    name: 'Blockchain Systems',
    description:
      'Integrity in a distributed system where the parties cannot be trusted. Mathematical and cryptographic foundations, the historical background of blockchain, and the architectural choices behind an implementation — then designing use cases, writing and testing smart contracts in Solidity, blockchain security, Solidity design patterns and smart contract auditing, through to maintaining a network and where the technology is heading.',
    topics: ['Solidity', 'Smart Contracts', 'Cryptography', 'Blockchain Security', 'Auditing'],
  },
  {
    number: '02',
    name: 'Software Quality & Testing',
    description:
      'Quality built into the development lifecycle rather than tested in at the end. Software quality attributes and quality models such as ISO 25010 and IEEE 730, process improvement and coding standards, quality assurance through review techniques and static analysis, and quality control through test planning and execution — unit, integration, system and acceptance testing, black-box, white-box and grey-box strategies to ISTQB, quality metrics, and automated testing with tools like SonarQube and Selenium.',
    topics: ['Test Planning', 'ISTQB', 'ISO 25010', 'SonarQube', 'Selenium'],
  },
  {
    number: '03',
    name: 'Technopreneurship',
    description:
      'Taking a technical idea to market. Opportunity identification and validation, business model design, market and competitor analysis, costing and funding, intellectual property, and pitching a venture — the commercial side of engineering that decides whether a product ever reaches users.',
    topics: ['Business Models', 'Market Validation', 'Startups', 'Funding', 'Pitching'],
  },
];
