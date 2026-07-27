export type Module = {
  number: string;
  name: string;
  description: string;
  topics: string[];
};

/**
 * Year 3 · Semester 1 modules, taken from the official UTM Module Information Packs
 * (Academic Year 2026, Semester 1). All are 6 credits, Level 3, 15 weeks.
 */
export const modules: Module[] = [
  {
    number: '01',
    name: 'Advanced Mobile Application Development',
    description:
      'Cross-platform mobile app development in Flutter and Dart. Covers widgets, layouts and views, stateful UI and animations, screen navigation, activities and intents, HTTP requests, and local plus remote data access with Supabase — through to deploying builds to the app stores.',
    topics: ['Flutter', 'Dart', 'Supabase', 'Android Studio', 'VS Code'],
  },
  {
    number: '02',
    name: 'Smart IoT Applications',
    description:
      'Designing and deploying intelligent IoT systems end to end. Internet of Things and Web of Things architecture, machine-to-machine communication, microcontroller programming, working with sensors and actuators for data acquisition, and integrating devices with cloud platforms for transmission, visualisation and analysis.',
    topics: ['Arduino', 'Raspberry Pi', 'Tinkercad', 'Sensors', 'Cloud Integration'],
  },
  {
    number: '03',
    name: 'AI & Machine Learning Techniques',
    description:
      'A conceptual and practical grounding in machine learning: simple, multivariate and polynomial linear regression, logistic regression for classification, and neural networks — implemented and executed in Python across hands-on programming sessions.',
    topics: ['Python', 'Anaconda', 'Regression', 'Classification', 'Neural Networks'],
  },
  {
    number: '04',
    name: 'Computer Game Programming',
    description:
      'In-depth 2D game design and development in Construct 3. Asset preparation, tile-based games, physics engine controls and game AI, event binding and scripting, sound and image processing, mobile sensors such as accelerometer, touch and GPS — then exporting to Windows Store, Google Play and the web.',
    topics: ['Construct 3', '2D Graphics', 'Physics Engine', 'Game AI', 'Multi-platform Export'],
  },
];
