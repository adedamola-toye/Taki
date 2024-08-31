class Topic{
  name:string;
  description: string;
  constructor(name: string, description:string){
    this.name = name
    this.description = description
  }
}
class Course{
  name: string;
  description: string;
  topics: Topic[];
  constructor(name: string, description: string, topics: Topic[] = []){
    this.name = name;
    this.description = description;
    this.topics = topics
  }
  set addTopics(topic:Topic){
    this.topics.push
  }
}

const frontendTopics = [
  new Topic('HTML', 'The standard markup language used to create the structure of web pages.'),
  new Topic('CSS', 'A stylesheet language used to describe the presentation of a document written in HTML or XML.'),
  new Topic('JavaScript', 'A scripting language used to create dynamic content and interactions on web pages.'),
  new Topic('React', 'A JavaScript library for building user interfaces, maintained by Facebook.'),
  new Topic('Vue', 'A progressive JavaScript framework for building user interfaces, designed to be incrementally adoptable.'),
  new Topic('Angular', 'A platform and framework for building single-page client applications using HTML and TypeScript, maintained by Google.'),
  new Topic('Webpack', 'A static module bundler for JavaScript applications, transforming and bundling modules and assets.'),
  new Topic('Babel', 'A JavaScript compiler that converts modern JavaScript into backwards-compatible versions.'),
  new Topic('TypeScript', 'A typed superset of JavaScript that compiles to plain JavaScript, providing optional static typing.'),
  new Topic('Responsive Design', 'An approach to web design that makes web pages render well on a variety of devices and screen sizes.'),
  new Topic('REST APIs', 'An architectural style for designing networked applications using stateless communication and a predefined set of stateless operations.'),
  new Topic('GraphQL', 'A query language for APIs that allows clients to request specific data, improving performance and flexibility.'),
  new Topic('Testing', 'Processes and tools for ensuring that code works as expected, including unit testing, integration testing, and end-to-end testing.'),
  new Topic('CI/CD', 'Continuous Integration and Continuous Deployment pipelines used to automate the testing and deployment of code changes.'),
  new Topic('Web Accessibility', 'Practices and techniques for making websites usable by people with disabilities.'),
  new Topic('SEO', 'Search Engine Optimization techniques to improve the visibility of a website in search engine results.'),
  new Topic('Performance Optimization', 'Techniques for improving the speed and efficiency of a website, such as code minification, lazy loading, and caching.'),
  new Topic('Progressive Web Apps', 'Web applications that use modern web capabilities to deliver an app-like experience to users.'),
  new Topic('Version Control', 'Systems like Git used to track changes in code over time and collaborate with others.'),
  new Topic('DevTools', 'Browser-based tools used by developers to debug and optimize websites and web applications.')
];


const frontend = new Course('Frontend Engineering','It encompasses everything about frontend engineering',frontendTopics)

const ourCourses = [frontend,back]

const backendTopics = [
  new Topic('Node.js', 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine, used for server-side scripting.'),
  new Topic('Express.js', 'A minimal and flexible Node.js web application framework providing a robust set of features for web and mobile applications.'),
  new Topic('Django', 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.'),
  new Topic('Ruby on Rails', 'A server-side web application framework written in Ruby under the MIT License.'),
  new Topic('Spring', 'A comprehensive framework for building enterprise-grade applications in Java.'),
  new Topic('Laravel', 'A PHP web application framework with expressive, elegant syntax.'),
  new Topic('Flask', 'A lightweight WSGI web application framework in Python, designed to make getting started quick and easy.'),
  new Topic('ASP.NET', 'A free, cross-platform, open-source developer platform for building many different types of applications.'),
  new Topic('SQL', 'A standard language for storing, manipulating, and retrieving data in databases.'),
  new Topic('NoSQL', 'A non-relational database that provides a mechanism for storage and retrieval of data that is modeled in means other than tabular relations.'),
  new Topic('GraphQL', 'A query language for your API, and a server-side runtime for executing queries by using a type system you define for your data.'),
  new Topic('REST APIs', 'An architectural style for designing networked applications using stateless communication and a predefined set of stateless operations.'),
  new Topic('Microservices', 'An architectural style that structures an application as a collection of loosely coupled services.'),
  new Topic('Docker', 'A tool designed to make it easier to create, deploy, and run applications by using containers.'),
  new Topic('Kubernetes', 'An open-source system for automating deployment, scaling, and management of containerized applications.'),
  new Topic('Authentication & Authorization', 'Mechanisms for securely identifying and managing users in a system.'),
  new Topic('Graph Databases', 'Databases that use graph structures for semantic queries, with nodes, edges, and properties to represent and store data.'),
  new Topic('Serverless', 'A cloud-computing execution model where the cloud provider dynamically manages the allocation of machine resources.')
];

