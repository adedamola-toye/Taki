
const courses = [
    {
      id: 1,
      name: "HTML for Beginners",
      description: "Learn the basics of HTML to build and structure simple web pages.",
      track: "Frontend Web Development",
      topics:[
        {
          id: 1,
          topicName : "HTML Basics",
          content:[
            {
              title: "Introduction to HTML",
              text: "HTML, or HyperText Markup Language, is the backbone of every website you visit. It’s the language that gives structure to the web, turning plain text into rich, interactive web pages. Whether it’s a bold heading, an image, or a clickable link, HTML is what makes it all happen. Think of it as the building blocks of the internet, where every tag you write brings a web page to life. With HTML, you're not just coding—you’re creating experiences that users around the world can engage with every day!"

            },
            {
              title:"HTML Document Structure",
              text: "Every HTML document begins with the <!DOCTYPE html> declaration, which tells the browser the version of HTML being used. This is followed by the <html> tag, which wraps the entire document. Inside the <html> tag, the <head> section contains meta-information about the page, such as the title and character encoding, while the <body> section contains the content that appears on the web page. The structure of an HTML document looks like the code below: ",
              exampleCode : `<!DOCTYPE html> <html> <head> <meta charset="UTF-8"> <title>Page Title</title> </head> <body> <h1>Welcome to HTML Basics</h1> <p>This is a paragraph of text.</p> </body> </html>`
            },
            {
              title: "HTML Syntax and Comments",
              text: "HTML uses a combination of opening and closing tags to define elements. Comments can be added using <!-- --> to leave notes in your code. Comments are not displayed in the browser and are useful for documentation or reminders.",
              exampleCode: "<!-- This is a comment --> <p>This is a paragraph of text.</p>"
            },
            {
              title: "HTML Document MetaData",
              text : "",
              exampleCode : `<head> <meta charset="UTF-8"> <title>Document Title</title> <link rel="stylesheet" href="styles.css"> </head>`
            },
            {
              title: "Best Practices",
              text: "When writing HTML, it's important to follow best practices for writing clean, maintainable code. This includes properly nesting tags, using semantic HTML, and ensuring that your document is properly structured."
            }, 
            {
              title: "Additional Resources",
              text: "Check out this video for a visual introduction to HTML:",
              videoLink: "https://www.youtube.com/watch?v=it1rTvBcfRg&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s"
            }
          ]
        },

        //TOPIC 2
        {
          id: 2,
          topicName:"Common HTML Tags",
          content : []
        },

        //TOPIC 3
        {
          id: 3,
          topicName:"HTML Lists and Tables",
          content : []
        },

        //TOPIC 4
        {
          id: 4,
          topicName:"Adding Images and Multimedia",
          content : []
        },

        //TOPIC 5
        {
          id: 5,
          topicName:"HTML Forms",
          content : []
        }
      ]
    },

    {
      id: 2,
      name: "CSS Fundamentals",
      description: "Understand how to style websites with CSS and create beautiful web pages.",
      track: "Frontend Web Development",
    },
    {
      id: 3,
      name: "JavaScript for Beginners",
      description: "Learn JavaScript from scratch, focusing on interactivity for web development.",
      track: "Frontend Web Development",
    },
    {
      id: 4,
      name: "React Basics",
      description: "Dive into React and learn how to build modern web applications.",
      track: "Frontend Web Development",
    },
    {
      id: 5,
      name: "Advanced CSS & Sass",
      description: "Enhance your CSS skills by mastering advanced techniques and Sass.",
      track: "Frontend Web Development",
    },
    {
      id: 6,
      name: "Responsive Web Design",
      description: "Master the art of creating web pages that adapt to different screen sizes.",
      track: "Frontend Web Development",
    },
    {
      id: 7,
      name: "JavaScript ES6+",
      description: "Get comfortable with modern JavaScript ES6+ features to enhance your web apps.",
      track: "Frontend Web Development",
    },
    {
      id: 8,
      name: "Building Interactive UIs with React",
      description: "Learn how to create dynamic user interfaces using React's component system.",
      track: "Frontend Web Development",
    },
    {
      id: 9,
      name: "JavaScript for Backend",
      description: "Master JavaScript for server-side development and APIs.",
      track: "Backend Web Development",
    },
    {
      id: 10,
      name: "Node.js for Beginners",
      description: "Learn how to build scalable server-side applications using Node.js.",
      track: "Backend Web Development",
    },
    {
      id: 11,
      name: "Express.js Fundamentals",
      description: "Master the basics of Express.js to build web servers in Node.js.",
      track: "Backend Web Development",
    },
    {
      id: 12,
      name: "Database Management with MongoDB",
      description: "Learn how to use MongoDB to store and manage data in your web applications.",
      track: "Backend Web Development",
    },
    {
      id: 13,
      name: "RESTful API Development",
      description: "Learn how to design and build RESTful APIs using Node.js and Express.",
      track: "Backend Web Development",
    },
    {
      id: 14,
      name: "GraphQL for Backend",
      description: "Dive into GraphQL and learn how to build efficient and scalable APIs.",
      track: "Backend Web Development",
    },
    {
      id: 15,
      name: "Authentication & Authorization",
      description: "Learn how to secure your backend applications with proper user authentication.",
      track: "Backend Web Development",
    },
    {
      id: 16,
      name: "Deploying Node.js Apps",
      description: "Learn how to deploy Node.js applications using platforms like Heroku and AWS.",
      track: "Backend Web Development",
    },
    {
      id: 17,
      name: "Python for Data Science",
      description: "Learn Python programming with a focus on data science applications.",
      track: "Data Science",
    },
    {
      id: 18,
      name: "Data Analysis with Pandas",
      description: "Use the Pandas library to manipulate and analyze data efficiently.",
      track: "Data Science",
    },
    {
      id: 19,
      name: "Machine Learning Basics",
      description: "Introduction to machine learning concepts and how to implement them with Python.",
      track: "Data Science",
    },
    {
      id: 20,
      name: "Data Visualization with Matplotlib",
      description: "Create compelling data visualizations using Python's Matplotlib library.",
      track: "Data Science",
    },
    {
      id: 21,
      name: "Big Data with Hadoop",
      description: "Learn how to work with massive datasets using the Hadoop ecosystem.",
      track: "Data Science",
    },
    {
      id: 22,
      name: "Data Cleaning Techniques",
      description: "Master the art of cleaning messy datasets for accurate analysis.",
      track: "Data Science",
    },
    {
      id: 23,
      name: "Deep Learning with TensorFlow",
      description: "Dive into deep learning concepts using TensorFlow and neural networks.",
      track: "Data Science",
    },
    {
      id: 24,
      name: "Natural Language Processing (NLP)",
      description: "Learn how to process and analyze text data using Python's NLP libraries.",
      track: "Data Science",
    },
    {
      id: 25,
      name: "Introduction to Cybersecurity",
      description: "Learn the fundamentals of cybersecurity and how to protect systems from attacks.",
      track: "Cybersecurity",
    },
    {
      id: 26,
      name: "Network Security Basics",
      description: "Understand the principles of securing network communications.",
      track: "Cybersecurity",
    },
    {
      id: 27,
      name: "Ethical Hacking",
      description: "Learn the tools and techniques used in ethical hacking to identify system vulnerabilities.",
      track: "Cybersecurity",
    },
    {
      id: 28,
      name: "Cryptography Essentials",
      description: "Understand cryptographic methods for securing data and communications.",
      track: "Cybersecurity",
    },
    {
      id: 29,
      name: "Incident Response & Management",
      description: "Learn how to handle security breaches and mitigate their impact.",
      track: "Cybersecurity",
    },
    {
      id: 30,
      name: "Risk Management",
      description: "Understand how to identify, assess, and mitigate security risks.",
      track: "Cybersecurity",
    },
    {
      id: 31,
      name: "Security Auditing & Compliance",
      description: "Learn the essentials of auditing and ensuring compliance with security standards.",
      track: "Cybersecurity",
    },
    {
      id: 32,
      name: "Cloud Security Basics",
      description: "Discover how to secure cloud-based systems and infrastructure.",
      track: "Cybersecurity",
    },
  ];
  
  export default courses;
  