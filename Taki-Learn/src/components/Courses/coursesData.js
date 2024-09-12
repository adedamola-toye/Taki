const courses = [
  //COURSE 1 = HTML FOR BEGINNERS
  {
    id: 1,
    name: "HTML for Beginners",
    description:
      "Learn the basics of HTML to build and structure simple web pages.",
    track: "Frontend Web Development",
    additonalResource: {
      title: "Additional Resource",
      videoLink:
        "https://www.youtube.com/watch?v=kUMe1FH4CHE",
      websiteLink: {
        title: "HTML Tutorial",
        link: "https://www.w3schools.com/html/default.asp",
      },
    },
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
            exampleCode: `<!-- This is a comment --> 
<p>This is a paragraph of text.</p>`,
          },
          {
            title: "HTML Document MetaData",
            text: "",
            exampleCode: `<head> 
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
            title: "Structuring Content",
            text: "HTML tags are the building blocks of web content, used to define and structure different elements on a webpage. The <h1> through <h6> tags are used for headings, with <h1> being the most important and <h6> the least. These tags help in organizing content hierarchically and improving readability. The <p> tag is used for paragraphs, ensuring that text is grouped and spaced appropriately. Links are created with the <a> tag, which uses the href attribute to specify the destination URL, enabling navigation between pages or to external sites",
          },
          {
            title: "More on HTML Tags",
            text: "In addition to headings and paragraphs, HTML also provides tags for multimedia and lists. The <img> tag is used to embed images, requiring the src attribute to define the image path and the alt attribute to provide alternative text for accessibility. Lists are created with <ul> for unordered lists, which use <li> tags for list items, and <ol> for ordered lists, which also use <li> tags but display items with a numerical order. These tags, along with others like <table>, <form>, and <div>, allow for a versatile and well-structured presentation of content on the web.",
            exampleCode: ``,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on essential HTML Tags:",
            videoLink: "https://www.youtube.com/watch?v=K_EVuLegRZ0",
          },
        ],
      },

      //TOPIC 3
      {
        id: 3,
        topicName: "HTML Lists and Tables",
        content: [
          {
            title: "HTML lists",
            text: "HTML lists are essential for presenting information in a structured format. There are two primary types of lists: unordered lists and ordered lists. ",
          },
          {
            title: "Ordered List",
            text: "An ordered list in HTML is used to display items in a specific sequence where the order matters. Created with the <ol> tag, each item within the list is defined using the <li> tag. This type of list is ideal for presenting steps in a process, instructions, or ranked items where the sequence is important. For example, you might use an ordered list to outline the steps needed to complete a task, such as a recipe or a set of instructions. The items in an ordered list are automatically numbered by the browser, ensuring clarity and organization for the user.",
            exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Ordered List Example</title>
</head>
<body>
    <h2>Steps to Make a Cup of Tea</h2>
    <ol>
        <li>Boil water in a kettle.</li>
        <li>Add a tea bag to a cup.</li>
        <li>Pour hot water over the tea bag.</li>
        <li>Let it steep for 3-5 minutes.</li>
        <li>Remove the tea bag and enjoy your tea!</li>
    </ol>
</body>
</html>
`,
          },
          {
            title: "Unordered List",
            text: "An unordered list in HTML is a way to present a group of items where the order does not matter. It is created using the <ul> (unordered list) tag, with each item within the list defined by an <li> (list item) tag. Unordered lists are useful for listing items that don't require a specific sequence, such as ingredients for a recipe or features of a product. The items in an unordered list are typically marked with bullet points, making it easy to read and visually organize the content.",
            exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Unordered List Example</title>
</head>
<body>
    <h2>Features TakiLearn</h2>
    <ul>
        <li>Different Courses</li>
        <li>Learning paths curated for you</li>
        <li>Quizzes</li>
    </ul>
</body>
</html>

`,
          },
          {
            title: "HTML Tables",
            text: "Tables in HTML are used to organize and display data in a tabular format, making complex information easier to understand and compare. A table is created with the <table> tag and consists of rows defined by the <tr> tag. Each row contains data cells represented by the <td> tag, or header cells denoted by the <th> tag. The <thead>, <tbody>, and <tfoot> tags can be used to group the header, body, and footer content respectively, improving the organization and readability of the table. This structure is particularly useful for displaying structured data such as financial reports, schedules, or contact lists, providing a clear and accessible way to present information.",
            exampleCode: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Table Example</title>
</head>
<body>

<h2>Employee Data</h2>

<table>
    <caption>Company Employee List</caption>
    <thead>
        <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>101</td>
            <td>John Doe</td>
            <td>Software Engineer</td>
            <td>Development</td>
        </tr>
        <tr>
            <td>102</td>
            <td>Jane Smith</td>
            <td>Product Manager</td>
            <td>Product</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Emily Johnson</td>
            <td>UX Designer</td>
            <td>Design</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td colspan="4">End of Employee List</td>
        </tr>
    </tfoot>
</table>

</body>
</html>

`,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on  HTML Lists:",
            videoLink: "https://www.youtube.com/watch?v=oUm7rvMUNq8",
          },
          {
            title: "",
            text: "Check out this video on  HTML Tables:",
            videoLink: "https://www.youtube.com/watch?v=iDA0kF5lrVk",
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
            exampleCode: `
<!DOCTYPE html>
<html>
<head>
    <title>Image Example</title>
</head>
<body>
    <h2>Beautiful Sunset</h2>
    <img src="sunset.jpg" alt="A beautiful sunset over the ocean" width="600" height="400">
</body>
</html>
`,
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
            title: "Embedding Video  in HTML",
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
            text: "Check out this video on essential HTML Tags:",
            videoLink: "https://www.youtube.com/watch?v=eWb8o0jC9dE",
          },
        ],
      },

      //TOPIC 5
      {
        id: 5,
        topicName: "HTML Forms",
        content: [
          {
            title: "Basics and Structure",
            text: "HTML forms are essential for collecting user input and submitting data to a server. Forms are created using the <form> tag, which serves as a container for various form elements. The <form> tag can include attributes such as action, which specifies the URL where the form data will be sent, and method, which defines how the data will be transmitted (e.g., GET or POST).Within the <form> tag, you can use various input elements to gather different types of data. Common input elements include <input> for text fields, <textarea> for multi-line text areas, and <button> for form submission. Each input element is associated with a name attribute that identifies the data when it is submitted. Labels for form elements are added using the <label> tag, which improves accessibility and usability by providing a description for each input field.",
            exampleCode: `
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

`,
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
            text: "Check out this video on essential Forms:",
            videoLink: "https://www.youtube.com/watch?v=2O8pkybH6po",
          },
        ],
      },
    ],
  },

  /* COURSE 2 */
  //COURSE 2 = CSS FOR BEGINNERS
  {
    id: 2,
    name: "CSS for Beginners",
    description:
      "Learn the fundamentals of CSS to style and layout web pages effectively.",
    track: "Frontend Web Development",
    topics: [
      //TOPIC 1
    ],
  },

  {
    id: 2,
    name: "JavaScript for Beginners",
    description:
      "Master the basics of JavaScript to build interactive web applications.",
    track: "Frontend Web Development",
    additonalResource: {
      title: "Additional Resource",
      videoLink:
        "https://www.youtube.com/watch?v=jS4aFq5-91M&t=6125s",
      websiteLink: {
        title: "JavaScript Tutorial",
        link: "https://www.w3schools.com/js/default.asp",
      },
    },
    topics: [
      // TOPIC 1: JavaScript Basics
      {
        id: 1,
        topicName: "JavaScript Basics",
        content: [
          {
            title: "Introduction to JavaScript",
            text: "JavaScript is a versatile programming language used for adding interactivity to web pages. From handling user input to updating content dynamically, JavaScript powers many of the features we use every day on the web.",
          },
          {
            title: "Variables and Data Types",
            text: "In JavaScript, variables are used to store data. You can declare a variable using `var`, `let`, or `const`. JavaScript supports various data types including strings, numbers, booleans, arrays, and objects.",
            exampleCode: `
            // Declaring variables
            let name = 'John'; // String
            console.log(name); // output: John

            let age = 30; // Number
            console.log(age); // output: 30

            let isStudent = true; // Boolean
            console.log(isStudent); // output: true

            let hobbies = ['Reading', 'Cycling']; // Array
            console.log(hobbies); // output: ['Reading', 'Cycling']

            let person = { name: 'John', age: 30 }; // Object
            console.log(person); // output: { name: 'John', age: 30 }
          `,
          },
          {
            title: "JavaScript Syntax",
            text: "JavaScript syntax includes rules on how to write code that the browser can understand. Proper syntax ensures that your code runs without errors and behaves as expected.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript basics:",
            videoLink: "https://www.youtube.com/watch?v=xwKbtUP87Dk",
          },
        ],
      },
      // TOPIC 2: Functions and Control Flow
      {
        id: 2,
        topicName: "Functions and Control Flow",
        content: [
          {
            title: "Functions",
            text: "A function is a block of reusable code that performs a specific task. You can define a function using the `function` keyword, followed by the function name and parentheses.",
            exampleCode: `
            // Function declaration
            function greet(name) {
              return 'Hello, ' + name + '!';
            }

            // Calling the function
            console.log(greet('Alice')); // output: Hello, Alice!
          `,
          },
          {
            title: "If-Else Statements",
            text: "JavaScript allows you to control the flow of your program using conditional statements like `if-else`. These are used to execute code based on certain conditions.",
            exampleCode: `
            let age = 18;

            if (age >= 18) {
              console.log('You are an adult.'); // output: You are an adult.
            } else {
              console.log('You are a minor.');
            }
          `,
          },

          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Functions:",
            videoLink: "https://www.youtube.com/watch?v=N8ap4k_1QEQ",
          },

          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Controls:",
            videoLink: "https://www.youtube.com/watch?v=JloLGV9DmtQ",
          },
        ],
      },
      // TOPIC 3: Arrays and Objects
      {
        id: 3,
        topicName: "Arrays and Objects",
        content: [
          {
            title: "Working with Arrays",
            text: "Arrays are a special type of object used to store multiple values in a single variable. You can access and manipulate array elements using their index.",
            exampleCode: `
            let fruits = ['Apple', 'Banana', 'Mango'];

            // Accessing array elements
            console.log(fruits[0]); // output: Apple

            // Adding elements
            fruits.push('Orange');
            console.log(fruits); // output: ['Apple', 'Banana', 'Mango', 'Orange']

            // Looping through an array
            for (let i = 0; i < fruits.length; i++) {
              console.log(fruits[i]);
            } 
            // output:
            // Apple
            // Banana
            // Mango
            // Orange
          `,
          },
          {
            title: "Objects in JavaScript",
            text: "Objects are collections of key-value pairs. Each key (or property) is associated with a value, which can be any data type, including other objects or functions.",
            exampleCode: `
            let person = {
              name: 'Alice',
              age: 25,
              greet: function() {
                console.log('Hello, my name is ' + this.name);
              }
            };

            // Accessing object properties
            console.log(person.name); // output: Alice

            // Calling a method
            person.greet(); // output: Hello, my name is Alice
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Arrays:",
            videoLink: "https://www.youtube.com/watch?v=oigfaZ5ApsM",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Objects:",
            videoLink: "https://www.youtube.com/watch?v=lo7o91qLzxc",
          },
        ],
      },
      // TOPIC 4: String Methods
      {
        id: 4,
        topicName: "String Methods",
        content: [
          {
            title: "Common String Methods",
            text: "JavaScript provides various methods for manipulating strings, such as `length`, `toUpperCase()`, `toLowerCase()`, `indexOf()`, and `slice()`.",
            exampleCode: `
            let text = 'JavaScript is awesome!';

            // String length
            console.log(text.length); // output: 22

            // Converting to uppercase
            console.log(text.toUpperCase()); // output: JAVASCRIPT IS AWESOME!

            // Finding the position of a substring
            console.log(text.indexOf('awesome')); // output: 15

            // Extracting a substring
            console.log(text.slice(0, 10)); // output: JavaScript
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Strings",
            videoLink: "https://www.youtube.com/watch?v=09BwruU4kiY",
          },
        ],
      },
      // TOPIC 5: Loops
      {
        id: 5,
        topicName: "Loops",
        content: [
          {
            title: "For Loops",
            text: "The `for` loop is used to repeat a block of code a specified number of times. It consists of three parts: initialization, condition, and increment.",
            exampleCode: `
            for (let i = 0; i < 5; i++) {
              console.log(i);
            }
            // output:
            // 0
            // 1
            // 2
            // 3
            // 4
          `,
          },
          {
            title: "While Loops",
            text: "The `while` loop repeats a block of code as long as a specified condition is true. It’s useful when you don’t know beforehand how many times you need to loop.",
            exampleCode: `
            let count = 0;

            while (count < 5) {
              console.log(count);
              count++;
            }
            // output:
            // 0
            // 1
            // 2
            // 3
            // 4
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Loops",
            videoLink: "https://www.youtube.com/watch?v=s9wW2PpJsmQ",
          },
        ],
      },
      // TOPIC 6: Error Handling
      {
        id: 6,
        topicName: "Error Handling",
        content: [
          {
            title: "Try-Catch Statement",
            text: "The `try-catch` statement is used to handle errors that occur during the execution of code. It allows you to test a block of code for errors and catch those errors if they occur.",
            exampleCode: `
            try {
              let result = riskyOperation(); // This function does not exist
              console.log(result);
            } catch (error) {
              console.error('An error occurred:', error.message);
            }
            // output: An error occurred: riskyOperation is not defined
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Javascript Loops",
            videoLink: "https://www.youtube.com/watch?v=cFTFtuEQ-10",
          },
        ],
      },
    ],
  },

  {
    id: 4,
    name: "React Basics",
    description:
      "Dive into React and learn how to build modern web applications.",
    track: "Frontend Web Development",
    additonalResource: {
      title: "Additional Resource",
      videoLink:
        "https://www.youtube.com/watch?v=4UZrsTqkcW4&list=WL&index=3&t=13143s",
      websiteLink: {
        title: "React Tutorial",
        link: "https://www.w3schools.com/REACT/DEFAULT.ASP",
      },
    },
    topics: [
      // TOPIC 1: Introduction to React
      {
        id: 1,
        topicName: "Introduction to React",
        content: [
          {
            title: "What is React?",
            text: "React is a JavaScript library for building user interfaces. It allows developers to create large web applications that can change data, without reloading the page.",
          },
          {
            title: "Components and Props",
            text: "In React, the UI is divided into components. Components are reusable pieces of code that return React elements. Props are used to pass data from parent to child components.",
            exampleCode: `
            // A functional component in React
            function Greeting(props) {
              return <h1>Hello, {props.name}!</h1>;
            }

            // Using the component
            <Greeting name="Alice" />
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on  Introduction to React",
            videoLink: "https://www.youtube.com/watch?v=Y6aYx_KKM7A",
          },
        ],
      },
      // TOPIC 2: State Management
      {
        id: 2,
        topicName: "State Management",
        content: [
          {
            title: "useState Hook",
            text: "The useState hook is used to add state to functional components. It returns an array with the current state and a function to update it.",
            exampleCode: `
            import React, { useState } from 'react';

            function Counter() {
              const [count, setCount] = useState(0);

              return (
                <div>
                  <p>You clicked {count} times</p>
                  <button onClick={() => setCount(count + 1)}>Click me</button>
                </div>
              );
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on  React State Management",
            videoLink: "https://www.youtube.com/watch?v=-bEzt5ISACA",
          },
        ],
      },
      // TOPIC 3: Event Handling
      {
        id: 3,
        topicName: "Event Handling",
        content: [
          {
            title: "Handling Events",
            text: "In React, events are handled using camelCase syntax. You pass a function as the event handler.",
            exampleCode: `
            function handleClick() {
              alert('Button clicked!');
            }

            function App() {
              return (
                <button onClick={handleClick}>Click me</button>
              );
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on  Event Handling in React",
            videoLink: "https://www.youtube.com/watch?v=dqlsGTHGcF0",
          },
        ],
      },
      // TOPIC 4: Conditional Rendering
      {
        id: 4,
        topicName: "Conditional Rendering",
        content: [
          {
            title: "Rendering Elements Conditionally",
            text: "You can render elements conditionally using JavaScript operators like `if` or the conditional (ternary) operator.",
            exampleCode: `
            function App() {
              const isLoggedIn = true;

              return (
                <div>
                  {isLoggedIn ? <p>Welcome back!</p> : <p>Please sign up.</p>}
                </div>
              );
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on  Event Handling in React",
            videoLink: "https://www.youtube.com/watch?v=XvURBpFxdGw",
          },
        ],
      },
      // TOPIC 5: Lists and Keys
      {
        id: 5,
        topicName: "Lists and Keys",
        content: [
          {
            title: "Rendering Lists",
            text: "You can render lists in React by using the `map()` method to iterate over an array of items. Each item needs a unique `key` prop.",
            exampleCode: `
            function ListItem(props) {
              return <li>{props.value}</li>;
            }

            function NumberList(props) {
              const numbers = props.numbers;
              const listItems = numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />
              );

              return (
                <ul>{listItems}</ul>
              );
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Rendering Lists and Keys in React",
            videoLink: "https://www.youtube.com/watch?v=fkl1Kn_QWCI",
          },
        ],
      },
      // TOPIC 6: Forms
      {
        id: 6,
        topicName: "Forms",
        content: [
          {
            title: "Handling Form Inputs",
            text: "In React, form elements maintain their state using controlled components. This means React is responsible for updating the form elements' values.",
            exampleCode: `
            import React, { useState } from 'react';

            function Form() {
              const [value, setValue] = useState('');

              function handleChange(event) {
                setValue(event.target.value);
              }

              function handleSubmit(event) {
                alert('A name was submitted: ' + value);
                event.preventDefault();
              }

              return (
                <form onSubmit={handleSubmit}>
                  <label>
                    Name:
                    <input type="text" value={value} onChange={handleChange} />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              );
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Rendering Forms in React",
            videoLink: "https://www.youtube.com/watch?v=CT-72lTXdPg",
          },
        ],
      },
    ],
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
