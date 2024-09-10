const courses = [
  //COURSE 1 = HTML FOR BEGINNERS
  {
    id: 1,
    name: "HTML for Beginners",
    description:
      "Learn the basics of HTML to build and structure simple web pages.",
    track: "Frontend Web Development",
    topics: [
      //TOPIC 1
      {
        id: 1,
        topicName: "HTML Basics",
        content: [
          {
            title: "Introduction to HTML",
            text: "HTML, or HyperText Markup Language, is the backbone of every website you visit. It’s the language that gives structure to the web, turning plain text into rich, interactive web pages. Whether it’s a bold heading, an image, or a clickable link, HTML is what makes it all happen. Think of it as the building blocks of the internet, where every tag you write brings a web page to life. With HTML, you're not just coding—you’re creating experiences that users around the world can engage with every day!",
          },
          {
            title: "HTML Document Structure",
            text: "Every HTML document begins with the <!DOCTYPE html> declaration, which tells the browser the version of HTML being used. This is followed by the <html> tag, which wraps the entire document. Inside the <html> tag, the <head> section contains meta-information about the page, such as the title and character encoding, while the <body> section contains the content that appears on the web page. The structure of an HTML document looks like the code below: ",
            exampleCode: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Page Title</title>
  </head>
  <body>
    <h1>Welcome to HTML Basics</h1>
    <p>This is a paragraph of text.</p>
  </body>
</html>`,
          },
          {
            title: "HTML Syntax and Comments",
            text: "HTML uses a combination of opening and closing tags to define elements. Comments can be added using <!-- --> to leave notes in your code. Comments are not displayed in the browser and are useful for documentation or reminders.",
            exampleCode:
              `<!-- This is a comment --> 
<p>This is a paragraph of text.</p>`,
          },
          {
            title: "HTML Document MetaData",
            text: "",
            exampleCode: 
`<head> 
  <meta charset="UTF-8"> 
  <title>Document Title</title> 
  <link rel="stylesheet" href="styles.css">
</head>`,
          },
          {
            title: "Best Practices",
            text: "When writing HTML, it's important to follow best practices for writing clean, maintainable code. This includes properly nesting tags, using semantic HTML, and ensuring that your document is properly structured.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video for a visual introduction to HTML:",
            videoLink:
              "https://www.youtube.com/watch?v=it1rTvBcfRg&list=PLP9IO4UYNF0VdAajP_5pYG-jG2JRrG72s",
          },
        ],
      },
      {
        id: 2,
        topicName: "Common HTML Tags",
        content: [
          {
            title: "Common HTML Tags",
            text: "HTML tags are the building blocks of web content, used to define and structure different elements on a webpage. The <h1> through <h6> tags are used for headings, with <h1> being the most important and <h6> the least. These tags help in organizing content hierarchically and improving readability. The <p> tag is used for paragraphs, ensuring that text is grouped and spaced appropriately. Links are created with the <a> tag, which uses the href attribute to specify the destination URL, enabling navigation between pages or to external sites.",
          },
          {
            title: "More on HTML Tags",
            text: "In addition to headings and paragraphs, HTML also provides tags for multimedia and lists. The <img> tag is used to embed images, requiring the src attribute to define the image path and the alt attribute to provide alternative text for accessibility. Lists are created with <ul> for unordered lists, which use <li> tags for list items, and <ol> for ordered lists, which also use <li> tags but display items with a numerical order. These tags, along with others like <table>, <form>, and <div>, allow for a versatile and well-structured presentation of content on the web.",
            exampleCode: ``,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on the necessary HTML tags: ",
            videoLink:
              "https://www.youtube.com/watch?v=K_EVuLegRZ0",
          },
        ],
      },

      //TOPIC 3
      {
        id: 3,
        topicName: "HTML Lists and Tables",
        content: [
          {
            title: "Lists",
            text: "HTML lists are essential for presenting information in a structured format. There are two primary types of lists: unordered lists and ordered lists. Unordered lists are created using the <ul> tag, with each list item defined by an <li> tag. This format is ideal for displaying items where the order is not important, such as a list of features or ingredients. Ordered lists, on the other hand, are generated with the <ol> tag and also use <li> tags for each item. Ordered lists are useful when the sequence of items matters, such as steps in a process or ranked items.",
            exampleCode: `
            <!DOCTYPE html>
<html>
<head>
    <title>Unordered List Example</title>
</head>
<body>
    <h2>Favorite Fruits</h2>
    <ul>
        <li>Apple</li>
        <li>Banana</li>
        <li>Cherry</li>
        <li>Date</li>
    </ul>
</body>
</html>


<!DOCTYPE html>
<html>
<head>
    <title>Ordered List Example</title>
</head>
<body>
    <h2>Steps to Make a Cup of Tea</h2>
    <ol>
        <li>Boil water in a kettle.</li>
        <li>Add a tea bag to your cup.</li>
        <li>Pour the boiling water over the tea bag.</li>
        <li>Steep for 3-5 minutes.</li>
        <li>Remove the tea bag and enjoy your tea.</li>
    </ol>
</body>
</html>
`
          },
        
          {
            title: "Tables",
            text: "HTML lists are essential for presenting information in a structured format. There are two primary types of lists: unordered lists and ordered lists. Unordered lists are created using the <ul> tag, with each list item defined by an <li> tag. This format is ideal for displaying items where the order is not important, such as a list of features or ingredients. Ordered lists, on the other hand, are generated with the <ol> tag and also use <li> tags for each item. Ordered lists are useful when the sequence of items matters, such as steps in a process or ranked items.",
            exampleCode: ``,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Lists in HTML : ",
            videoLink:
              "https://www.youtube.com/watch?v=oUm7rvMUNq8",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Tables in HTML : ",
            videoLink:
              "https://www.youtube.com/watch?v=oUm7rvMUNq8",
          },
        ],
      },

      //TOPIC 4
      {
        id: 4,
        topicName: "Adding Images and Multimedia",
        content: [
          {
            title: "Adding Images in HTML",
            text: "Images are added to a webpage using the <img> tag. This tag requires the src attribute to specify the path to the image file and the alt attribute to provide alternative text for accessibility and SEO purposes. You can also adjust the image’s size using the width and height attributes.",
            exampleCode:`
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <h2>Beautiful Sunset</h2>
    <img src="sunset.jpg" alt="A beautiful sunset over the ocean" width="600" height="400">
</body>
</html> `
          
          },
        
          {
            title: "Embedding Audio in HTML",
            text: "The <audio> tag is used to embed sound files such as music or voice recordings. It supports various audio formats like MP3 and Ogg. Key attributes include controls for displaying playback controls, autoplay to start playback automatically, and loop to repeat the audio. You can include multiple <source> elements for different audio formats.",
            exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Audio Example</title>
</head>
<body>
    <h2>Enjoy the Music</h2>
    <audio controls>
        <source src="music.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
    </audio>
</body>
</html>
`,
          },
            {
              title: "Embedding Video in HTML",
              text: "The <video> tag is used to include video content on a webpage. It supports multiple video formats like MP4 and WebM. Key attributes include controls for displaying playback controls, autoplay to start playback automatically, and loop to repeat the video. Multiple <source> elements can be used to specify different video formats for better browser compatibility.",
              exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Video Example</title>
</head>
<body>
    <h2>Watch the Video</h2>
    <video width="640" height="360" controls>
        <source src="video.mp4" type="video/mp4">
        <source src="video.webm" type="video/webm">
        Your browser does not support the video tag.
    </video>
</body>
</html>

  `,
            },
          {
            title: "Additional Resources",
            text: "Check out this video on Multimedia in HTML : ",
            videoLink:
              "https://www.youtube.com/watch?v=eWb8o0jC9dE",
          },
          
        ],
      },

      //TOPIC 5
      {
        id: 5,
        topicName: "HTML Forms",
        content: [
          {
            title: "Creating HTML Forms: Basics and Structure",
            text: "HTML forms are essential for collecting user input and submitting data to a server. Forms are created using the <form> tag, which serves as a container for various form elements. The <form> tag can include attributes such as action, which specifies the URL where the form data will be sent, and method, which defines how the data will be transmitted (e.g., GET or POST).Within the <form> tag, you can use various input elements to gather different types of data. Common input elements include <input> for text fields, <textarea> for multi-line text areas, and <button> for form submission. Each input element is associated with a name attribute that identifies the data when it is submitted. Labels for form elements are added using the <label> tag, which improves accessibility and usability by providing a description for each input field.",
            exampleCode:`
<!DOCTYPE html>
<html>
<head>
    <title>Basic Form Example</title>
</head>
<body>
    <h2>Contact Us</h2>
    <form action="/submit-form" method="post">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br><br>
        
        <label for="message">Message:</label>
        <textarea id="message" name="message" rows="4" cols="50" required></textarea><br><br>
        
        <button type="submit">Send</button>
    </form>
</body>
</html>
 `
          
          },
        
          {
            title: "Advanced HTML Form Elements and Features",
            text: "HTML forms offer additional elements and attributes for more complex data collection needs. For example, the <select> tag creates a drop-down list, and the <option> tags within it define the selectable options. Radio buttons and checkboxes are created using the <input> tag with the type attribute set to radio or checkbox, respectively, allowing users to select one or multiple options.Forms can also include file upload capabilities using the <input> tag with type='file', which allows users to select files from their device. To enhance user experience, form elements can be grouped using <fieldset> and labeled with <legend>, which provides a description for a group of related inputs. Additionally, HTML5 introduces new input types like date, time, and range, which offer more specialized data entry options and built-in validation.",
            exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Advanced Form Example</title>
</head>
<body>
    <h2>Registration Form</h2>
    <form action="/register" method="post">
        <fieldset>
            <legend>Personal Information</legend>
            
            <label for="gender">Gender:</label>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label><br><br>
            
            <label for="hobbies">Hobbies:</label>
            <input type="checkbox" id="sports" name="hobbies" value="sports">
            <label for="sports">Sports</label>
            <input type="checkbox" id="reading" name="hobbies" value="reading">
            <label for="reading">Reading</label><br><br>
            
            <label for="birthdate">Date of Birth:</label>
            <input type="date" id="birthdate" name="birthdate"><br><br>
            
            <label for="profilePicture">Profile Picture:</label>
            <input type="file" id="profilePicture" name="profilePicture"><br><br>
            
            <button type="submit">Register</button>
        </fieldset>
    </form>
</body>
</html>

`,
          },
            
          {
            title: "Additional Resources",
            text: "Check out this video on HTML Forms in HTML : ",
            videoLink:
              "https://www.youtube.com/watch?v=2O8pkybH6po",
          },
        ],
      },
    ],
  },

  {
    id: 2,
    name: "CSS Fundamentals",
    description:
      "Understand how to style websites with CSS and create beautiful web pages.",
    track: "Frontend Web Development",
  },
  {
    id: 3,
    name: "JavaScript for Beginners",
    description:
      "Learn JavaScript from scratch, focusing on interactivity for web development.",
    track: "Frontend Web Development",
  },
  {
    id: 4,
    name: "React Basics",
    description:
      "Dive into React and learn how to build modern web applications.",
    track: "Frontend Web Development",
  },
  {
    id: 5,
    name: "Advanced CSS & Sass",
    description:
      "Enhance your CSS skills by mastering advanced techniques and Sass.",
    track: "Frontend Web Development",
  },
  {
    id: 6,
    name: "Responsive Web Design",
    description:
      "Master the art of creating web pages that adapt to different screen sizes.",
    track: "Frontend Web Development",
  },
  {
    id: 7,
    name: "JavaScript ES6+",
    description:
      "Get comfortable with modern JavaScript ES6+ features to enhance your web apps.",
    track: "Frontend Web Development",
  },
  {
    id: 8,
    name: "Building Interactive UIs with React",
    description:
      "Learn how to create dynamic user interfaces using React's component system.",
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
    description:
      "Learn how to build scalable server-side applications using Node.js.",
    track: "Backend Web Development",
  },
  {
    id: 11,
    name: "Express.js Fundamentals",
    description:
      "Master the basics of Express.js to build web servers in Node.js.",
    track: "Backend Web Development",
  },
  {
    id: 12,
    name: "Database Management with MongoDB",
    description:
      "Learn how to use MongoDB to store and manage data in your web applications.",
    track: "Backend Web Development",
  },
  {
    id: 13,
    name: "RESTful API Development",
    description:
      "Learn how to design and build RESTful APIs using Node.js and Express.",
    track: "Backend Web Development",
  },
  {
    id: 14,
    name: "GraphQL for Backend",
    description:
      "Dive into GraphQL and learn how to build efficient and scalable APIs.",
    track: "Backend Web Development",
  },
  {
    id: 15,
    name: "Authentication & Authorization",
    description:
      "Learn how to secure your backend applications with proper user authentication.",
    track: "Backend Web Development",
  },
  {
    id: 16,
    name: "Deploying Node.js Apps",
    description:
      "Learn how to deploy Node.js applications using platforms like Heroku and AWS.",
    track: "Backend Web Development",
  },
  {
    id: 17,
    name: "Python for Data Science",
    description:
      "Learn Python programming with a focus on data science applications.",
    track: "Data Science",
  },
  {
    id: 18,
    name: "Data Analysis with Pandas",
    description:
      "Use the Pandas library to manipulate and analyze data efficiently.",
    track: "Data Science",
  },
  {
    id: 19,
    name: "Machine Learning Basics",
    description:
      "Introduction to machine learning concepts and how to implement them with Python.",
    track: "Data Science",
  },
  {
    id: 20,
    name: "Data Visualization with Matplotlib",
    description:
      "Create compelling data visualizations using Python's Matplotlib library.",
    track: "Data Science",
  },
  {
    id: 21,
    name: "Big Data with Hadoop",
    description:
      "Learn how to work with massive datasets using the Hadoop ecosystem.",
    track: "Data Science",
  },
  {
    id: 22,
    name: "Data Cleaning Techniques",
    description:
      "Master the art of cleaning messy datasets for accurate analysis.",
    track: "Data Science",
  },
  {
    id: 23,
    name: "Deep Learning with TensorFlow",
    description:
      "Dive into deep learning concepts using TensorFlow and neural networks.",
    track: "Data Science",
  },
  {
    id: 24,
    name: "Natural Language Processing (NLP)",
    description:
      "Learn how to process and analyze text data using Python's NLP libraries.",
    track: "Data Science",
  },
  {
    id: 25,
    name: "Introduction to Cybersecurity",
    description:
      "Learn the fundamentals of cybersecurity and how to protect systems from attacks.",
    track: "Cybersecurity",
  },
  {
    id: 26,
    name: "Network Security Basics",
    description:
      "Understand the principles of securing network communications.",
    track: "Cybersecurity",
  },
  {
    id: 27,
    name: "Ethical Hacking",
    description:
      "Learn the tools and techniques used in ethical hacking to identify system vulnerabilities.",
    track: "Cybersecurity",
  },
  {
    id: 28,
    name: "Cryptography Essentials",
    description:
      "Understand cryptographic methods for securing data and communications.",
    track: "Cybersecurity",
  },
  {
    id: 29,
    name: "Incident Response & Management",
    description:
      "Learn how to handle security breaches and mitigate their impact.",
    track: "Cybersecurity",
  },
  {
    id: 30,
    name: "Risk Management",
    description:
      "Understand how to identify, assess, and mitigate security risks.",
    track: "Cybersecurity",
  },
  {
    id: 31,
    name: "Security Auditing & Compliance",
    description:
      "Learn the essentials of auditing and ensuring compliance with security standards.",
    track: "Cybersecurity",
  },
  {
    id: 32,
    name: "Cloud Security Basics",
    description:
      "Discover how to secure cloud-based systems and infrastructure.",
    track: "Cybersecurity",
  },
];

export default courses;
