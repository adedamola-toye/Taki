const courses = [
  //COURSE 1 = HTML FOR BEGINNERS
  {
    id: 1,
    name: "HTML for Beginners",
    description:
      "Learn the basics of HTML to build and structure simple web pages.",
    track: "Frontend Web Development",
    additionalResource: {
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
  {
    id: 2,
    name: "CSS Fundamentals",
    description:
      "Understand how to style websites with CSS and create beautiful web pages.",
    track: "Frontend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=OXGznpKZ_sA",
      websiteLink: {
        title: "CSS Tutorial",
        link: "https://www.w3schools.com/css/default.asp",
      },
    },
    topics: [
      //TOPIC 1
      {
        id: 1,
        topicName: "Foundation of CSS",
        content: [
          {
            title: "Introduction to CSS",
            text: "CSS (an abbreviation of Cascading Style Sheets) is the language that we use to style an HTML file, and tell the browser how should it render the elements on the page.",
          },
          {
            title: "CSS Syntax",
            text: "A CSS rule consists of a selector and a declaration block. The selector is a string that identifies one or more elements on the page, following a special syntax that we’ll soon talk about extensively.The declaration block contains one or more declarations, in turn composed by a property and value pair.In this example h1 is a selector in CSS (it points to the HTML element you want to style: <h1>).color is a property, and blue is the property value text-align is a property, and center is the property value",
            exampleCode: `h1 {
            color: blue;
            font-size: 12px;
            text-align: center;
          }`,
          },
          {
            title: "CSS Comment",
            text: "Comments are used to explain the code, and may help when you edit the source code at a later date.Comments are ignored by browsers. A CSS comment is placed inside the <style> element, and starts with /* and ends with */:",
            exampleCode: `/* This is a single-line comment */
            p {
              color: red;
            }`,
          },
          {
            title: "Link tag",
            text: "The link tag is the way to include a CSS file. This is the preferred way to use CSS as it's intended to be used: one CSS file is included by all the pages of your site, and changing one line on that file affects the presentation of all the pages in the site.To use this method, you add a link tag with the href attribute pointing to the CSS file you want to include. You add it inside the head tag of the site (not inside the body tag):",
            exampleCode: `<link rel="stylesheet" type="text/css" href="myfile.css">`,
          },
          {
            title: "Style tag",
            text: "Instead of using the link tag to point to separate stylesheet containing our CSS, we can add the CSS directly inside a style tag.Using this method we can avoid creating a separate CSS file. This is the syntax:",
            exampleCode: `<style>
            ...our CSS...
            </style>`,
          },
          {
            title: "Inline styles",
            text: "Inline styles are the third way to add CSS to a page. We can add a style attribute to any HTML tag, and add CSS into it.",
            exampleCode: `<div style="background-color: yellow">...</div>`,
          },
          {
            title: "Cascading",
            text: "We’ll begin breaking down exactly how styles are rendered by looking at what is known as the cascade and studying a few examples of the cascade in action. Within CSS, all styles cascade from the top of a style sheet to the bottom, allowing different styles to be added or overwritten as the style sheet progresses.For example, say we select all paragraph elements at the top of our style sheet and set their background color to orange and their font size to 24 pixels. Then towards the bottom of our style sheet, we select all paragraph elements again and set their background color to green, as seen here ",
            exampleCode: `p {
            background: orange;
            font-size: 24px;
            }
            p {
              background: green;
            }`,
          },
          {
            title: "Best Practices",
            text: "When writing CSS, it's important to follow best practices for creating clean, maintainable stylesheets. This includes using consistent naming conventions, organizing rules logically, and ensuring your code is scalable and easy to update.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video for a visual introduction to CSS:",
            videoLink: "https://www.youtube.com/watch?v=0W6qz0-aDaM",
          },
        ],
      },
      //TOPIC 2

      {
        id: 2,
        topicName: "Css Selectors",
        content: [
          {
            title: "CSS Selector",
            text: "CSS selector are used to find (or select) the HTML elements you want to style.",
            exampleCode: `p {
            text-align: center;
            color: red;
            }`,
          },
          {
            title: "The CSS Id Selector",
            text: "The id selector uses the id attribute of an HTML element to select a specific element.The id of an element is unique within a page, so the id selector is used to select one unique element!To select an element with a specific id, write a hash (#) character, followed by the id of the element. In this example all HTML elements with class= center will be red and center-aligned: ",
            exampleCode: `#para1 {
          text-align: center;
          color: red;
          }`,
          },
          {
            title: "The CSS Class Selector",
            text: "The class selector selects HTML elements with a specific class attribute.To select elements with a specific class, write a period (.) character, followed by the class name.",
            exampleCode: `.center {
          text-align: center;
          color: red;
          }`,
          },
          {
            title: "The CSS Universal Selector",
            text: "The universal selector (*) selects all HTML elements on the page.The CSS rule below will affect every HTML element on the page: ",
            exampleCode: `* {
          text-align: center;
          color: blue;
         }`,
          },
          {
            title: "Grouping selectors",
            text: "You can combine selectors to apply the same declarations to multiple selectors. To do so, you separate them with a comma.",
            exampleCode: `<p>
            My dog name is:
            </p>
            <span class="dog-name">
              Roger
            </span>

            p, .dog-name {
              color: yellow;
            }`,
          },
          {
            title: "Follow the document tree with selectors",
            text: "We’ve seen how to target an element in the page by using a tag name, a class or an id.You can create a more specific selector by combining multiple items to follow the document tree structure. For example, if you have a span tag nested inside a p tag, you can target that one without applying the style to a span tag not included in a p tag:",
            exampleCode: `span>
              Hello!
            </span>
            <p>
              My dog name is:
              <span class="dog-name">
                Roger
              </span>
            </p>

            p span {
              color: yellow;
            }`,
          },
          {
            title: "Child combinator",
            text: "The child combinator (>) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the direct children of elements matched by the first. ",
            exampleCode: `<ul>
              <li>Unordered item</li>
              <li>Unordered item
                <ol>
                  <li>Item 1</li>
                  <li>Item 2</li>
                </ol>
              </li>
            </ul>

            ul > li {
              border-top: 5px solid red;
            }`,
          },
          {
            title: "Next-sibling combinator",
            text: "The next-sibling combinator (+) is placed between two CSS selectors. It matches only those elements matched by the second selector that are the next sibling element of the first selector.",
            exampleCode: `<article>
              <h1>A heading</h1>
                <p>Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo
                        melon azuki bean garlic.</p>

                <p>Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard
                        greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.</p>
            </article>

            h1 + p {
              font-weight: bold;
              background-color: #333;
              color: #fff;
              padding: .5em;
            }`,
          },
          {
            title: "Best Practices",
            text: "When using CSS selectors, it's important to follow best practices for efficiency and clarity. This includes using specific selectors to avoid conflicts, keeping selector specificity manageable, and organizing your selectors to enhance readability and maintainability.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Selectors:",
            videoLink: "https://www.youtube.com/watch?v=l1mER1bV0N0",
          },
        ],
      },

      //TOPIC 3
      {
        id: 3,
        topicName: "Css Specificity",
        content: [
          {
            title: "What is Specificity",
            text: "Specificity is the algorithm used by browsers to determine the CSS declaration that is the most relevant to an element, which in turn, determines the property value to apply to the element. The specificity algorithm calculates the weight of a CSS selector to determine which rule from competing CSS declarations gets applied to an element.",
          },

          {
            title: "Selector weight categories",
            text: "The selector weight categories are listed here in the order of decreasing specificity:",
          },
          {
            title: "ID column",
            text: "Includes only ID selectors, such as #example. For each ID in a matching selector, add 1-0-0 to the weight value.",
          },
          {
            title: "CLASS column",
            text: "Includes class selectors, such as .myClass, attribute selectors like [type= radio ] and [lang|=fr], and pseudo-classes, such as :hover, :nth-of-type(3n), and :required. For each class, attribute selector, or pseudo-class in a matching selector, add 0-1-0 to the weight value.",
          },
          {
            title: "TYPE column",
            text: "Includes type selectors, such as p, h1, and td, and pseudo-elements like ::before, ::placeholder, and all other selectors with double-colon notation. For each type or pseudo-element in a matching selector, add 0-0-1 to the weight value.",
          },
          {
            title: "No value",
            text: `The universal selector (*) and the pseudo-class :where() and its parameters aren't counted when calculating the weight so their value is 0-0-0, but they do match elements. These selectors do not impact the specificity weight value.Combinators, such as +, >, ~, " ", and ||, may make a selector more specific in what is selected but they don't add any value to the specificity weight.`,
          },
          {
            title: "Importance",
            text: "Specificity does not matter if a rule ends with !important:That rule will take precedence over any rule with more specificity Adding !important in a CSS rule is going to make that rule more important than any other rule, according to the specificity rules",
            exampleCode: ` p {
            font-size: 20px!important;
          }`,
          },
          {
            title: "Calculating Specificity",
            text: "Every selector in CSS has a specificity weight. A selector’s specificity weight, along with its placement in the cascade, identifies how its styles will be rendered.The higher the specificity weight of a selector, the more superiority the selector is given when a styling conflict occurs. For example, if a paragraph element is selected using a type selector in one place and an ID selector in another, the ID selector will take precedence over the type selector regardless of where the ID selector appears in the cascade.",
            exampleCode: ` #food {
          background: green;
          }
          p {
          background: orange;
          }`,
          },
          {
            title: "Best Practices",
            text: "In general you should use the amount of specificity you need, but not more. In this way, you can craft other selectors to overwrite the rules set by preceding rules without going mad.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Specificity:",
            videoLink: "https://www.youtube.com/watch?v=CHyPGSpIhSs",
          },
        ],
      },
      //TOPIC 4
      {
        id: 4,
        topicName: "The box model",
        content: [
          {
            title: "The CSS Box Model",
            text: "In CSS, the term box model is used when talking about design and layout.The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.",
          },
          {
            title: "Working with the Box Model",
            text: "Every element is a rectangular box, and there are several properties that determine the size of that box. The core of the box is defined by the width and height of an element, which may be determined by the display property, by the contents of the element, or by specified width and height properties. padding and then border expand the dimensions of the box outward from the element’s width and height. Lastly, any margin we have specified will follow the border.Each part of the box model corresponds to a CSS property: width, height, padding, border, and margin.Let’s look these properties inside some code:",
            exampleCode: `div {
              border: 6px solid #949599;
              height: 100px;
              margin: 20px;
              padding: 20px;
              width: 400px;
            }`,
          },
          {
            title: "How to calculate the Width of an Element",
            text: "According to the box model, the total width of an element can be calculated using the following formula:",
            exampleCode: `margin-right + border-right + padding-right + width + padding-left + border-left + margin-left
            `,
          },
          {
            title: "How to calculate the Height of an Element",
            text: "In comparison, according to the box model, the total height of an element can be calculated using the following formula:",
            exampleCode: `margin-top + border-top + padding-top + height + padding-bottom + border-bottom + margin-bottom

            `,
          },
          {
            text: "So far a lot of these properties might not make a whole lot of sense, and that’s all right. To clarify things, let’s take a close look at all of the properties—width, height, padding, border, and margin—that go into forming the box model.",
          },
          {
            title: "Width & Height",
            text: "Every element has default width and height. That width and height may be 0 pixels, but browsers, by default, will render every element with size. Depending on how an element is displayed, the default width and height may be adequate. If an element is key to the layout of a page, it may require specified width and height property values. In this case, the property values for non-inline elements may be specified.",
          },
          {
            title: "Width",
            text: "The default width of an element depends on its display value. Block-level elements have a default width of 100%, consuming the entire horizontal space available. Inline and inline-block elements expand and contract horizontally to accommodate their content. Inline-level elements cannot have a fixed size, thus the width and height properties are only relevant to non-inline elements. To set a specific width for a non-inline element, use the width property:",
            exampleCode: `div {
             width: 400px;
            }
            `,
          },
          {
            title: "Height",
            text: "The default height of an element is determined by its content. An element will expand and contract vertically as necessary to accommodate its content. To set a specific height for a non-inline element, use the height property:",
            exampleCode: `div {
              height: 100px;
            }
            `,
          },
          {
            title: "Margin & Padding",
            text: "Depending on the element, browsers may apply default margins and padding to an element to help with legibility and clarity. We will generally see this with text-based elements. The default margins and padding for these elements may differ from browser to browser and element to element.",
          },
          {
            title: "Margin",
            text: "The margin property allows us to set the amount of space that surrounds an element. Margins for an element fall outside of any border and are completely transparent in color. Margins can be used to help position elements in a particular place on a page or to provide breathing room, keeping all other elements a safe distance away. Here’s the margin property in action:",
            exampleCode: `div {
              margin: 20px;
            }
            `,
          },
          {
            title: "Margin - Shorthand Property",
            text: "To shorten the code, it is possible to specify all the margin properties in one property.The margin property is a shorthand property for the following individual margin properties: margin-top margin-right margin-bottom margin-left.",
            exampleCode: `So, here is how it works:

            If the margin property has four values:

            margin: 25px 50px 75px 100px;

            top margin is 25px
            right margin is 50px
            bottom margin is 75px
            left margin is 100px`,
          },
          {
            title: "Padding",
            text: "The padding property is very similar to the margin property; however, it falls inside of an element’s border, should an element have a border. The padding property is used to provide spacing directly within an element. Here’s the code:",
            exampleCode: `div {
              padding: 20px;
            }
            `,
          },
          {
            title: "Borders",
            text: `Borders fall between the padding and margin, providing an outline around an element. The border property requires three values: width, style, and color. Shorthand values for the border property are stated in that order—width, style, color. In longhand, these three values can be broken up into the border-width, border-style, and border-color properties. These longhand properties are useful for changing, or overwriting, a single border value.`,
            exampleCode: `div {
  border: 6px solid #949599;
}`,
          },
          {
            title: "Individual Border Sides",
            text: "As with the margin and padding properties, borders can be placed on one side of an element at a time if we’d like. Doing so requires new properties: border-top, border-right, border-bottom, and border-left. The values for these properties are the same as those of the border property alone: width, style, and color. If we want, we can make a border appear only on the bottom of an element:",
            exampleCode: `div {
              border-bottom: 6px solid #949599;
            }`,
          },
          {
            title: "Border Radius",
            text: "While we’re looking at borders and their different properties, we need to examine the border-radius property, which enables us to round the corners of an element The border-radius property accepts length units, including percentages and pixels, that identify the radius by which the corners of an element are to be rounded. A single value will round all four corners of an element equally; two values will round the top-left/bottom-right and top-right/bottom-left corners in that order; four values will round the top-left, top-right, bottom-right, and bottom-left corners in that order.",
            exampleCode: `div {
              border-radius: 5px;
            }`,
          },
          {
            title: "Box Sizing",
            text: "CSS3 introduced the box-sizing property, which allows us to change exactly how the box model works and how an element’s size is calculated. The property accepts three primary values—content-box, padding-box, and border-box—each of which has a slightly different impact on how the box size is calculated.",
          },
          {
            title: "Content Box",
            text: "The content-box value is the default value, leaving the box model as an additive design. If we don’t use the box-sizing property, this will be the default value for all elements. The size of an element begins with the width and height properties, and then any padding, border, or margin property values are added on from there.",
            exampleCode: `div {
              -webkit-box-sizing: content-box;
              -moz-box-sizing: content-box;
              box-sizing: content-box;
            }`,
          },
          {
            title: "Padding Box",
            text: "The padding-box value alters the box model by including any padding property values within the width and height of an element. When using the padding-box value, if an element has a width of 400 pixels and a padding of 20 pixels around every side, the actual width will remain 400 pixels. As any padding values increase, the content size within an element shrinks proportionately.",
            exampleCode: `div {
              box-sizing: padding-box;
            }`,
          },
          {
            title: "Picking a Box Size",
            text: "Generally speaking, the best box-sizing value to use is border-box. The border-box value makes our math much, much easier. If we want an element to be 400 pixels wide, it is, and it will remain 400 pixels wide no matter what padding or border values we add to it.",
          },
          {
            title: "Developer Tools",
            text: "Most browsers have what are known as Developer Tools. These tools allow us to inspect an element on a page, see where that element lives within the HTML document, and see what CSS properties and values are being applied to it. Most of these tools also include a box model diagram to show the computed size of an element.To see the Developer Tools in Google Chrome, click “View” within the menu bar and navigate to “Developer” and then “Developer Tools.” This loads a drawer at the bottom of the browser window that provides a handful of tools for inspecting our code.Clicking the magnifying glass at the bottom of this drawer enables us to hover over and then click on different elements on the page to review more information about them. After selecting an element, we’ll see a handful of tabs on the right-hand side of the Elements panel within our Developer Tools. Selecting the Computed tab will show us a breakdown of the box model for our selected element.Play around with the Developer Tools, be it in Google Chrome, Mozilla Firefox, Apple Safari, or other browsers; there is much to learn from looking at our code. I generally leave the Developer Tools open at all times when writing HTML and CSS. And I frequently inspect the code of other websites to see how they are built, too.",
          },
          {
            title: "Best Practices",
            text: "When working with the CSS box model, it's important to follow best practices for layout consistency. This includes defining padding, margin, and borders explicitly, using box-sizing to control element dimensions, and ensuring your layout scales well across different devices.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Box Model:",
            videoLink: "https://www.youtube.com/watch?v=M6coJNLFBWI",
          },
        ],
      },
      //TOPIC 5
      {
        id: 5,
        topicName: "CSS Layout",
        content: [
          {
            title: "Introduction to CSS layout",
            text: "CSS page layout techniques allow us to take elements contained in a web page and control where they're positioned relative to the following factors: their default position in normal layout flow, the other elements around them, their parent container, and the main viewport/window",
          },
          {
            title: "Normal Flow",
            text: "As detailed in the last lesson introducing layout, elements on a webpage lay out in normal flow if you haven't applied any CSS to change the way they behave. And, as we began to discover, you can change how elements behave either by adjusting their position in normal flow or by removing them from it altogether.Before digging deeper into different layout methods, it's worth revisiting some of the things you have studied in previous modules with regard to normal document flow.",
          },
          {
            title: "How are elements laid out by default?",
            text: "That explains how elements are structured individually, but how about the way they're structured when they interact with one another? The normal layout flow (mentioned in the layout introduction article) is the system by which elements are placed inside the browser's viewport. By default, block-level elements are laid out in the block flow direction, which is based on the parent's writing mode (initial: horizontal-tb). Each element will appear on a new line below the last one, with each one separated by whatever margin that's been specified. In English, for example, (or any other horizontal, top to bottom writing mode) block-level elements are laid out vertically.Inline elements behave differently. They don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing content will move down to a new line.Let's look at a simple example that explains all of this:",
            exampleCode: `<h1>Basic document flow</h1>

              <p>
                I am a basic block level element. My adjacent block level elements sit on new
                lines below me.
              </p>

              <p>
                By default we span 100% of the width of our parent element, and we are as tall
                as our child content. Our total width and height is our content + padding +
                border width/height.
              </p>

              <p>
                We are separated by our margins. Because of margin collapsing, we are
                separated by the size of one of our margins, not both.
              </p>

              <p>
                Inline elements <span>like this one</span> and <span>this one</span> sit on
                the same line along with adjacent text nodes, if there is space on the same
                line. Overflowing inline elements will
                <span>wrap onto a new line if possible (like this one containing text)</span>,
                or just go on to a new line if not, much like this image will do:
                <img src="long.jpg" alt="snippet of cloth" />
              </p>


              body {
                width: 500px;
                margin: 0 auto;
              }

              p {
                background: rgb(255 84 104 / 30%);
                border: 2px solid rgb(255 84 104);
                padding: 10px;
                margin: 10px;
              }

              span {
                background: white;
                border: 1px solid black;
              }
              `,
          },
          {
            title: "Flexbox",
            text: "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.",
          },
          {
            title: "Why flexbox?",
            text: "CSS flexible box layout enables you to: Vertically center a block of content inside its parent.Make all the children of a container take up an equal amount of the available width/height, regardless of how much width/height is available.Make all columns in a multiple-column layout adopt the same height even if they contain a different amount of content.Flexbox features may be the perfect solution for your one dimensional layout needs. Let's dig in and find out!",
          },
          {
            title: "Introducing a simple example",
            text: "In this article, you'll work through a series of exercises to help you understand how flexbox works. To get started, you should make a local copy of the first starter file on your IDE. Load it in a modern browser (like Firefox or Chrome) and have a look at the code in your code editor. You can also see it live here",
            exampleCode: `<!DOCTYPE html>
              <html lang="en-US">
                <head>
                  <meta charset="utf-8">
                  <meta name="viewport" content="width=device-width">
                  <title>Flexbox 0 — starting code</title>
                  <style>
                    html {
                      font-family: sans-serif;
                    }

                    body {
                      margin: 0;
                    }

                    header {
                      background: purple;
                      height: 100px;
                    }

                    h1 {
                      text-align: center;
                      color: white;
                      line-height: 100px;
                      margin: 0;
                    }

                    article {
                      padding: 10px;
                      margin: 10px;
                      background: aqua;
                    }

                    /* Add your flexbox CSS below here */


                    
                  </style>
                </head>
                <body>
                  <header>
                    <h1>Sample flexbox example</h1>
                  </header>

                  <section>
                    <article>
                      <h2>First article</h2>

                      <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
                    </article>

                    <article>
                      <h2>Second article</h2>

                      <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>
                    </article>

                    <article>
                      <h2>Third article</h2>

                      <p>Tacos actually microdosing, pour-over semiotics banjo chicharrones retro fanny pack portland everyday carry vinyl typewriter. Tacos PBR&B pork belly, everyday carry ennui pickled sriracha normcore hashtag polaroid single-origin coffee cold-pressed. PBR&B tattooed trust fund twee, leggings salvia iPhone photo booth health goth gastropub hammock.</p>

                      <p>Cray food truck brunch, XOXO +1 keffiyeh pickled chambray waistcoat ennui. Organic small batch paleo 8-bit. Intelligentsia umami wayfarers pickled, asymmetrical kombucha letterpress kitsch leggings cold-pressed squid chartreuse put a bird on it. Listicle pickled man bun cornhole heirloom art party.</p>
                    </article>
                  </section>
                </body>
              </html>
            `,
          },
          {
            title: "Specifying what elements to lay out as flexible boxes",
            text: "To start with, we need to select which elements are to be laid out as flexible boxes. To do this, we set a special value of display on the parent element of the elements you want to affect. In this case we want to lay out the <article> elements, so we set this on the <section>:This causes the <section> element to become a flex container and its children become flex items. This is what it looks like:",
            exampleCode: `section {
              display: flex;
            }
            `,
          },
          {
            title: "Columns or rows?",
            text: "Flexbox provides a property called flex-direction that specifies which direction the main axis runs (which direction the flexbox children are laid out in). By default this is set to row, which causes them to be laid out in a row in the direction your browser's default language works in (left to right, in the case of an English browser).Try adding the following declaration to your <section> rule:",
            exampleCode: `
             section {
                display: flex;
                flex-direction: column;
              }
            `,
          },
          {
            title: "Wrapping",
            text: "One issue that arises when you have a fixed width or height in your layout is that eventually your flexbox children will overflow their container, breaking the layout.",
            exampleCode: `  section {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
              }
               article {
                flex: 200px;
              }
            `,
          },
          {
            title: "flex-flow shorthand",
            text: "At this point it's worth noting that a shorthand exists for flex-direction and flex-wrap: flex-flow. So, for example, you can replace",
            exampleCode: `
            section {
            flex-direction: row;
            flex-wrap: wrap;
            }

            with

            section {
            flex-flow: row wrap;
            }
            `,
          },
          {
            title: "Flexible sizing of flex items",
            text: "Let's now return to our first example and look at how we can control what proportion of space flex items take up compared to the other flex items. First, add the following rule to the bottom of your CSS:",
            exampleCode: `article {
              flex: 1;
            }`,
          },
          {
            text: "In this case, we're giving each <article> element the same value (a value of 1), which means they'll all take up an equal amount of the spare space left after properties like padding and margin have been set. This value is proportionally shared among the flex items: giving each flex item a value of 400000 would have exactly the same effect.Now add the following rule below the previous one:",
            exampleCode: `article:nth-of-type(3) {
              flex: 2;
            }
            `,
          },
          {
            title: "flex: shorthand versus longhand",
            text: `flex is a shorthand property that can specify up to three different values:The unitless proportion value we discussed above. This can be specified separately using the flex-grow longhand property.
                A second unitless proportion value, flex-shrink, which comes into play when the flex items are overflowing their container. This value specifies how much an item will shrink in order to prevent overflow. This is quite an advanced flexbox feature and we won't be covering it any further in this article.
                The minimum size value we discussed above. This can be specified separately using the flex-basis longhand value.`,
            exampleCode: `article:nth-of-type(3) {
                  flex: 1 1 200px;
                }
                `,
          },
          {
            text: "We'd advise against using the longhand flex properties unless you really have to (for example, to override something previously set). They lead to a lot of extra code being written and can be somewhat confusing.",
          },
          {
            title: "Horizontal and vertical alignment",
            text: "You can also use flexbox features to align flex items along the main or cross axis. Let's explore this by looking at a new example We're going to turn this into a neat, flexible button/toolbar. At the moment you'll see a horizontal menu bar with some buttons jammed into the top left-hand corner.",
            exampleCode: `
            <!DOCTYPE html>
            <html lang="en-US">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <title>Flexbox align 0 — starting code</title>
                <style>
                  html {
                    font-family: sans-serif;
                  }

                  body {
                    width: 70%;
                    max-width: 960px;
                    margin: 20px auto;
                  }

                  button {
                    font-size: 18px;
                    line-height: 1.5;
                    width: 15%;
                  }

                  div {
                    height: 100px;
                    border: 1px solid black;
                  }

                  /* Add your flexbox CSS below here */

                  
                </style>
              </head>
              <body>
                <div>
                  <button>Smile</button>
                  <button>Laugh</button>
                  <button>Wink</button>
                  <button>Shrug</button>
                  <button>Blush</button>
                </div>
              </body>
            </html>`,
          },
          {
            text: "First, take a local copy of this example.Now, add the following to the bottom of the example's CSS",
            exampleCode: `div {
              display: flex;
              align-items: center;
              justify-content: space-around;
            }`,
          },
          {
            title: "align-items",
            text: `The align-items property controls where the flex items sit on the cross axis.

By default, the value normal which behaves as stretch in flexbox. This stretches all flex items to fill the parent in the direction of the cross axis. If the parent doesn't have a fixed size in the cross axis direction, then all flex items will become as tall (or wide) as the tallest (or widest) flex item. This is how our first example had columns of equal height by default.
The center value that we used in our above code causes the items to maintain their intrinsic dimensions, but be centered along the cross axis. This is why our current example's buttons are centered vertically.
You can also have values like flex-start, self-start or start and flex-end, self-end or end, which will align all items at the start and end of the cross axis respectively. The baseline values will line up the flex items by their baseline; basically the bottom of each flex items first line of text will be lined up with the bottom of the first line of the element with the greatest distance between the cross start and that baseline.`,
          },
          {
            title: "The align-self Property",
            text: "The align-self property specifies the alignment for the selected item inside the flexible container. You can override the align-items behavior for individual flex items by applying the align-self property to them. For example, try adding the following to your CSS:",
            exampleCode: `button:first-child {
              align-self: flex-end;
            }`,
          },
          {
            title: "Justify Content",
            text: "The justify-content property is used to align the flex items:The default value is normal, which behaves as start, which makes all the items sit at the start of the main axis.You can use end or flex-end to make them sit at the end.The left and right values behave as start or end depending on the writing mode direction.center is also a value for justify-content. It'll make the flex items sit in the center of the main axis.The value we've used above, space-around, is useful — it distributes all the items evenly along the main axis with a bit of space left at either end.There is another value, space-between, which is very similar to space-around except that it doesn't leave any space at either end.The justify-items property is ignored in flexbox layouts.We'd like to encourage you to play with these values to see how they work before you continue.",
          },
          {
            title: "Ordering flex items",
            text: "Flexbox also has a feature for changing the layout order of flex items without affecting the source order. This is another thing that is impossible to do with traditional layout methods.The order value must be a number, default value is 0.",
            exampleCode: `button:first-child {
              order: 1; 
          }`,
          },
          {
            title: "Best Practices",
            text: "When designing CSS layouts, it's important to follow best practices for responsiveness and flexibility. This includes using modern layout techniques like Flexbox and Grid, keeping layouts fluid for various screen sizes, and avoiding fixed dimensions to maintain adaptability across devices.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS FlexBox:",
            videoLink: "https://www.youtube.com/watch?v=JJSoEo8JSnc",
          },
        ],
      },
      //TOPIC 6
      {
        id: 6,
        topicName: "CSS grid layout ",
        content: [
          {
            title: "What is grid layout?",
            text: "A grid is a collection of horizontal and vertical lines creating a pattern against which we can line up our design elements.A grid will typically have columns, rows, and then gaps between each row and column. The gaps are commonly referred to as gutters.",
          },
          {
            title: "Creating your grid in CSS",
            text: "Having decided on the grid that your design needs, you can use CSS grid layout to create it. We'll look at the basic features of grid layout first and then explore how to create a simple grid system for your project.",
          },
          {
            title: "Defining a grid",
            text: "Let's try out grid layouts with the help of an example.You will see an example with a container, which has some child items. By default, these items are displayed in a normal flow, causing them to appear one below the other. For the initial part of this lesson, we'll be using this file to see how its grid behaves.",
            exampleCode: `<!DOCTYPE html>
            <html lang="en-US">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width">
                <title>CSS Grid starting point</title>
                <style>
                    body {
                        width: 90%;
                        max-width: 900px;
                        margin: 2em auto;
                        font: .9em/1.2 Arial, Helvetica, sans-serif;
                    }

                    .container > div {
                        border-radius: 5px;
                        padding: 10px;
                        background-color: rgb(207,232,220);
                        border: 2px solid rgb(79,185,227);
                    }
                </style>
              </head>

              <body>
                  <h1>Simple grid example</h1>

                  <div class="container">
                      <div>One</div>
                      <div>Two</div>
                      <div>Three</div>
                      <div>Four</div>
                      <div>Five</div>
                      <div>Six</div>
                      <div>Seven</div>
                  </div>

              </body>

            </html>
              `,
          },
          {
            text: "Similar to how you define flexbox, you define a grid layout by setting the value of the display property to grid. As in the case of flexbox, the display: grid property transforms all the direct children of the container into grid items. Add the following CSS to your file:",
            exampleCode: `
            .container {
              display: grid;
            }`,
          },
          {
            text: "Unlike flexbox, the items will not immediately look any different. Declaring display: grid gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.To see something that looks more grid-like, we'll need to add some columns to the grid. Let's add three 200-pixel columns. You can use any length unit or percentage to create these column tracks.",
            exampleCode: `
            .container {
              display: grid;
              grid-template-columns: 200px 200px 200px;
            }`,
          },
          {
            title: "Flexible grids with the fr unit",
            text: "In addition to creating grids using lengths and percentages, we can use fr. The fr unit represents one fraction of the available space in the grid container to flexibly size grid rows and columns.Change your track listing to the following definition, creating three 1fr tracks:",
            exampleCode: `.container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
            }
            `,
          },
          {
            title: "Gaps between tracks",
            text: "To create gaps between tracks, we use the properties:column-gap for gaps between columnsrow-gap for gaps between rows gap as a shorthand for both css",
            exampleCode: `.container {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr;
                gap: 20px;
              }
            `,
          },
          {
            title: "Repeating track listings",
            text: "You can repeat all or merely a section of your track listing using the CSS repeat() function. Change your track listing to the following: You'll now get three 1fr tracks just as before",
            exampleCode: `
            .container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            `,
          },
          {
            title: "The minmax() function",
            text: "The minmax() function lets us set a minimum and maximum size for a track, for example, minmax(100px, auto). The minimum size is 100 pixels, but the maximum is auto, which will expand to accommodate more content. Try changing grid-auto-rows to use a minmax value:",
            exampleCode: ` .container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-auto-rows: minmax(100px, auto);
                gap: 20px;
              }
            `,
          },
          {
            title: "As many columns as will fit",
            text: "We can combine some of the lessons we've learned about track listing, repeat notation, and minmax() to create a useful pattern. Sometimes it's helpful to be able to ask grid to create as many columns as will fit into the container. We do this by setting the value of grid-template-columns using the repeat() function, but instead of passing in a number, pass in the keyword auto-fit. For the second parameter of the function we use minmax() with a minimum value equal to the minimum track size that we would like to have and a maximum of 1fr.",
            exampleCode: `
            .container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
              grid-auto-rows: minmax(100px, auto);
              gap: 20px;
            }
            `,
          },
          {
            title: "Line-based placement",
            text: "We now move on from creating a grid to placing things on the grid. Our grid always has lines — these are numbered beginning with 1 and relate to the writing mode of the document.To position items along these lines, we can specify the start and end lines of the grid area where an item should be placed. There are four properties we can use to do this:grid-column-start, grid-column-end,grid-row-start,grid-row-end",
            exampleCode: `
            header {
              grid-column: 1 / 3;
              grid-row: 1;
            }

            article {
              grid-column: 2;
              grid-row: 2;
            }

            aside {
              grid-column: 1;
              grid-row: 2;
            }

            footer {
              grid-column: 1 / 3;
              grid-row: 3;
            }`,
          },
          {
            title: "Positioning with grid-template-areas",
            text: "An alternative way to arrange items on your grid is to use the grid-template-areas property and give the various elements of your design a name.Remove the line-based positioning from the last example and add the following CSS.",
            exampleCode: `.container {
              display: grid;
              grid-template-areas:
                "header header"
                "sidebar content"
                "footer footer";
              grid-template-columns: 1fr 3fr;
              gap: 20px;
              }
                            header {
                grid-area: header;
              }

              article {
                grid-area: content;
              }

              aside {
                grid-area: sidebar;
              }

              footer {
                grid-area: footer;
              }
            `,
          },
          {
            title: "Nesting grids and subgrid",
            text: `It's possible to nest a grid within another grid, creating a "subgrid". You can do this by setting the display: grid property on a grid item.
                  Let's expand on the previous example by adding a container for articles and using a nested grid to control the layout of multiple articles. While we're using only one column in the nested grid, we can define the rows to be split in a 2:1:1 ratio by using the grid-template-rows property. This approach allows us to create a layout where one article at the top of the page has a large display, while the others have a smaller, preview-like layout.
                  The minimum size value we discussed above. This can be specified separately using the flex-basis longhand value.`,
            exampleCode: `
                  .articles {
                    display: grid;
                    grid-template-rows: 2fr 1fr 1fr;
                    gap: inherit;
                  }

                  article {
                    padding: 10px;
                    border: 2px solid rgb(79 185 227);
                    border-radius: 5px;
                  }
                `,
          },
          {
            text: "To make it easier to work with layouts in nested grids, you can use subgrid on grid-template-rows and grid-template-columns properties. This allows you to leverage the tracks defined in the parent grid.In the following example, we're using line-based placement, enabling the nested grid to span multiple columns and rows of the parent grid. We've added subgrid to inherit the parent grid's column tracks while adding a different layout for the rows within the nested grid.",
            exampleCode: `
              <div class="container">
                <div>One</div>
                <div>Two</div>
                <div>Three</div>
                <div>Four</div>
                <div id="subgrid">
                  <div>Five</div>
                  <div>Six</div>
                  <div>Seven</div>
                  <div>Eight</div>
                </div>
                <div>Nine</div>
                <div>Ten</div>
              </div>
            
              .container {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                grid-template-rows: repeat(1, 1fr);
                gap: 10px;
              }

              #subgrid {
                grid-column: 1 / 4;
                grid-row: 2 / 4;
                display: grid;
                gap: inherit;
                grid-template-columns: subgrid;
                grid-template-rows: 2fr 1fr;
              }
                          `,
          },
          {
            title: "Best Practices",
            text: "When using CSS Grid, it's important to follow best practices for creating flexible and responsive layouts. This includes defining grid areas or using fractional units (fr), avoiding fixed widths, utilizing grid templates for better organization, and ensuring your grid adapts well to different screen sizes.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Grid Layout:",
            videoLink: "https://www.youtube.com/watch?v=S9OiWe5iBYo",
          },
        ],
      },
      //TOPIC 7
      {
        id: 7,
        topicName: "Positioning ",
        content: [
          {
            title: "Introducing positioning",
            text: "Positioning allows us to produce interesting results by overriding normal document flow. What if you want to slightly alter the position of some boxes from their default flow position to give a slightly quirky, distressed feel? Positioning is your tool. ",
          },
          {
            title: "Static positioning",
            text: "Static positioning is the default that every element gets. It just means put the element into its normal position in the document flow — nothing special to see here.To see this (and get your example set up for future sections) first add a class of positioned to the second <p> in the HTML:",
            exampleCode: `
            <p class="positioned">…</p>
            

            .positioned {
              position: static;
              background: yellow;
            }
            `,
          },
          {
            title: "Relative positioning",
            text: "Relative positioning is the first position type we'll take a look at. This is very similar to static positioning, except that once the positioned element has taken its place in the normal flow, you can then modify its final position, including making it overlap other elements on the page. Go ahead and update the position declaration in your code:",
            exampleCode: `
            position: relative;
            `,
          },
          {
            title: "Introducing top, bottom, left, and right",
            text: "top, bottom, left, and right are used alongside position to specify exactly where to move the positioned element to. To try this out, add the following declarations to the .positioned rule in your CSS:",
            exampleCode: `

            top: 30px;
            left: 30px;
            `,
          },
          {
            title: "Absolute positioning",
            text: "Absolute positioning brings very different results.Let's try changing the position declaration in your code as follows:",
            exampleCode: `
            position: absolute;
            `,
          },
          {
            title: "Positioning contexts",
            text: "Which element is the containing element of an absolutely positioned element? This is very much dependent on the position property of the ancestors of the positioned element. To see this, add the following declaration to your body rule",
            exampleCode: `position: relative;
            `,
          },
          {
            title: "Introducing z-index",
            text: "All this absolute positioning is good fun, but there's another feature we haven't considered yet. When elements start to overlap, what determines which elements appear over others and which elements appear under others? In the example we've seen so far, we only have one positioned element in the positioning context, and it appears on the top since positioned elements win over non-positioned elements. What about when we have more than one?Try adding the following to your CSS to make the first paragraph absolutely positioned too:",
            exampleCode: `
              p:nth-of-type(1) {
                position: absolute;
                background: lime;
                top: 10px;
                right: 30px;
            }
            `,
          },
          {
            text: "Can you change the stacking order? Yes, you can, by using the z-index property. z-index is a reference to the z-axis. You may recall from previous points in the course where we discussed web pages using horizontal (x-axis) and vertical (y-axis) coordinates to work out positioning for things like background images and drop shadow offsets.To change the stacking order, try adding the following declaration to your p:nth-of-type(1) rule: ",
            exampleCode: `
            z-index: 1;
            `,
          },
          {
            title: "Fixed positioning",
            text: "fixed positioning usually fixes an element in place relative to the visible portion of the viewport. (An exception to this occurs if one of the element's ancestors is a fixed containing block because its transform property has a value other than none.) This means that you can create useful UI items that are fixed in place, like persistent navigation menus that are always visible no matter how much the page scrolls.Let's put together a simple example to show what we mean. First of all, delete the existing p:nth-of-type(1) and .positioned rules from your CSS.Now update the body rule to remove the position: relative; declaration and add a fixed height, like so:",
            exampleCode: ` body {
                width: 500px;
                height: 1400px;
                margin: 0 auto;
              }
            `,
          },
          {
            text: "Now we're going to give the h1 element position: fixed; and have it sit at the top of the viewport. Add the following rule to your CSS:",
            exampleCode: `
              h1 {
                position: fixed;
                top: 0;
                width: 500px;
                margin-top: 0;
                background: white;
                padding: 10px;
              }
            `,
          },
          {
            text: "The top: 0; is required to make it stick to the top of the screen. We give the heading the same width as the content column and then a white background and some padding and margin so the content won't be visible underneath it.If you save and refresh, you'll see a fun little effect of the heading staying fixed — the content appears to scroll up and disappear underneath it. But notice how some of the content is initially clipped under the heading. This is because the positioned heading no longer appears in the document flow, so the rest of the content moves up to the top. We could improve this by moving the paragraphs all down a bit. We can do this by setting some top margin on the first paragraph. Add this now:",
            exampleCode: `
            p:nth-of-type(1) {
              margin-top: 60px;
            }`,
          },
          {
            title: "Sticky positioning",
            text: "There is another position value available called position: sticky, which is somewhat newer than the others. This is basically a hybrid between relative and fixed position. It allows a positioned element to act like it's relatively positioned until it's scrolled to a certain threshold (e.g., 10px from the top of the viewport), after which it becomes fixed.",
          },
          {
            title: "Basic example",
            text: "Sticky positioning can be used, for example, to cause a navigation bar to scroll with the page until a certain point and then stick to the top of the page.The minimum size value we discussed above. This can be specified separately using the flex-basis longhand value.",
            exampleCode: `
                  .positioned {
                    position: sticky;
                    top: 30px;
                    left: 30px;
                  }
                `,
          },
          {
            title: "Scrolling index",
            text: "An interesting and common use of position: sticky is to create a scrolling index page where different headings stick to the top of the page as they reach it. The markup for such an example might look like so:",
            exampleCode: `
              <h1>Sticky positioning</h1>

              <dl>
                <dt>A</dt>
                <dd>Apple</dd>
                <dd>Ant</dd>
                <dd>Altimeter</dd>
                <dd>Airplane</dd>
                <dt>B</dt>
                <dd>Bird</dd>
                <dd>Buzzard</dd>
                <dd>Bee</dd>
                <dd>Banana</dd>
                <dd>Beanstalk</dd>
                <dt>C</dt>
                <dd>Calculator</dd>
                <dd>Cane</dd>
                <dd>Camera</dd>
                <dd>Camel</dd>
                <dt>D</dt>
                <dd>Duck</dd>
                <dd>Dime</dd>
                <dd>Dipstick</dd>
                <dd>Drone</dd>
                <dt>E</dt>
                <dd>Egg</dd>
                <dd>Elephant</dd>
                <dd>Egret</dd>
              </dl>

              dt {
                background-color: black;
                color: white;
                padding: 10px;
                position: sticky;
                top: 0;
                left: 0;
                margin: 1em 0;
              }
            `,
          },
          {
            title: "Best Practices",
            text: "When using CSS positioning, it's important to follow best practices for control and flexibility. This includes using position: relative for adjusting elements without breaking the flow, position: absolute for positioning inside a relatively positioned container, and avoiding excessive use of position: fixed to maintain a responsive layout.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Positioning:",
            videoLink: "https://www.youtube.com/watch?v=jx5jmI0UlXU",
          },
        ],
      },
    ],
  },
  /* COURSE 3 */

  {
    id: 2,

    name: "JavaScript for Beginners",

    description:
      "Master the basics of JavaScript to build interactive web applications.",

    track: "Frontend Web Development",

    additionalResource: {
      title: "Additional Resource",

      videoLink: "https://www.youtube.com/watch?v=jS4aFq5-91M&t=6125s",

      websiteLink: {
        title: "JavaScript Tutorial",

        link: "https://www.w3schools.com/js/default.asp",
      },
    },

    topics: [
      //Topic 1

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
    additionalResource: {
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

  //COURSE 5 - ADVANCED CSS AND SASS
  {
    id: 5,
    name: "Advanced CSS & Sass",
    description:
      "Enhance your CSS skills by mastering advanced techniques and Sass.",
    track: "Frontend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=_a5j7KoflTs", // Example link
      websiteLink: {
        title: "CSS Tricks",
        link: "https://css-tricks.com",
      },
    },
    topics: [
      // TOPIC 1: Advanced Selectors
      {
        id: 1,
        topicName: "Advanced Selectors",
        content: [
          {
            title: "Attribute Selectors",
            text: "CSS attribute selectors allow you to target elements based on their attributes. This makes it easier to style elements dynamically.",
            exampleCode: `
            /* Select elements with a specific attribute */
            input[type="text"] {
              background-color: lightblue;
            }
          `,
          },
          {
            title: "Pseudo-Classes and Pseudo-Elements",
            text: "Pseudo-classes like `:hover` and pseudo-elements like `::before` allow you to style elements in ways that aren't possible with regular selectors.",
            exampleCode: `
            /* Change color on hover */
            a:hover {
              color: red;
            }
  
            /* Add content before an element */
            p::before {
              content: "Note: ";
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Advanced CSS Selectors",
            videoLink: "https://www.youtube.com/watch?v=Bcr70LIJcOk",
          },
        ],
      },
      // TOPIC 2: Flexbox and Grid Layouts
      {
        id: 2,
        topicName: "Flexbox and Grid Layouts",
        content: [
          {
            title: "Flexbox",
            text: "Flexbox is a one-dimensional layout model that provides an efficient way to align and distribute space among items in a container.",
            exampleCode: `
            .container {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
          `,
          },
          {
            title: "CSS Grid",
            text: "CSS Grid Layout is a two-dimensional system for creating responsive web layouts. It allows you to align items into rows and columns.",
            exampleCode: `
            .grid-container {
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-gap: 10px;
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Flexbox",
            videoLink: "https://www.youtube.com/watch?v=tXIhdp5R7sc",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Grid",
            videoLink: "https://www.youtube.com/watch?v=t6CBKf8K_Ac&t=1519s",
          },
        ],
      },
      // TOPIC 3: Sass Basics
      {
        id: 3,
        topicName: "Sass Basics",
        content: [
          {
            title: "Variables and Nesting",
            text: "Sass allows you to use variables to store values and enables nested syntax for cleaner, more readable CSS.",
            exampleCode: `
            $primary-color: #3498db;
  
            nav {
              background-color: $primary-color;
              ul {
                list-style: none;
                li {
                  display: inline-block;
                  margin-right: 20px;
                }
              }
            }
          `,
          },
          {
            title: "Mixins",
            text: "Mixins in Sass are reusable blocks of CSS that can be included in other selectors.",
            exampleCode: `
            @mixin border-radius($radius) {
              -webkit-border-radius: $radius;
              -moz-border-radius: $radius;
              border-radius: $radius;
            }
  
            .box { @include border-radius(10px); }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this playlist on Sass Basics",
            videoLink:
              "https://www.youtube.com/playlist?list=PL4-IK0AVhVjNiZpLY-3ILQFyRF0Bs914J",
          },
        ],
      },
      // TOPIC 4: Responsive Design
      {
        id: 4,
        topicName: "Responsive Design",
        content: [
          {
            title: "Media Queries",
            text: "Media queries allow you to apply CSS rules based on the size of the screen or device being used to view your content.",
            exampleCode: `
            @media (max-width: 600px) {
              .container {
                flex-direction: column;
              }
            }
          `,
          },
          {
            title: "Mobile-First Design",
            text: "Mobile-first design means writing your styles for small screens first and then applying larger screen styles with media queries.",
            exampleCode: `
            /* Base styles for mobile */
            .container {
              padding: 10px;
            }
  
            /* Larger screen styles */
            @media (min-width: 768px) {
              .container {
                padding: 20px;
              }
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Responsive Web Design",
            videoLink: "https://www.youtube.com/watch?v=srvUrASNj0s",
          },
        ],
      },
      // TOPIC 5: Animations and Transitions
      {
        id: 5,
        topicName: "Animations and Transitions",
        content: [
          {
            title: "CSS Transitions",
            text: "CSS transitions allow you to change property values smoothly over a specified duration.",
            exampleCode: `
            .box {
              width: 100px;
              height: 100px;
              background-color: blue;
              transition: background-color 0.5s ease;
            }
  
            .box:hover {
              background-color: green;
            }
          `,
          },
          {
            title: "CSS Animations",
            text: "CSS animations allow you to animate changes to CSS properties over a series of keyframes.",
            exampleCode: `
            @keyframes example {
              from {background-color: red;}
              to {background-color: yellow;}
            }
  
            .animated-box {
              animation: example 3s infinite;
            }
          `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on CSS Animations",
            videoLink: "https://www.youtube.com/watch?v=Nloq6uzF8RQ",
          },
        ],
      },
    ],
  },

  //COURSE 6 - RESPONSIVE WEB DESIGN

  {
    id: 6,
    name: "Responsive Web Design",
    description:
      "Master the art of creating web pages that adapt to different screen sizes.",
    track: "Frontend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=srvUrASNj0s", 
      websiteLink: {
        title: "MDN Responsive Design Tutorial",
        link: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Responsive Design
      {
        id: 1,
        topicName: "Introduction to Responsive Design",
        content: [
          {
            title: "What is Responsive Web Design?",
            text: "Responsive web design is an approach to web development where websites are crafted to provide an optimal viewing experience across a wide range of devices, from desktop monitors to mobile phones.",
          },
          {
            title: "Fluid Grids",
            text: "Fluid grids are layouts that use relative units like percentages, instead of fixed units like pixels, to create flexible and adaptive layouts.",
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction video on Responsive Web Design",
            videoLink: "https://www.youtube.com/watch?v=VQraviuwbzU", // Placeholder link
          },
        ],
      },
      // TOPIC 2: Media Queries
      {
        id: 2,
        topicName: "Media Queries",
        content: [
          {
            title: "Using Media Queries",
            text: "Media queries allow you to apply CSS styles based on the size of the viewport or device screen, making your site responsive to various screen sizes.",
            exampleCode: `
            /* Example of a media query for mobile devices */
            @media (max-width: 600px) {
              body {
                background-color: lightblue;
              }
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on using Media Queries",
            videoLink: "https://www.youtube.com/watch?v=xV7S8BhIeBo", // Placeholder link
          },
        ],
      },
      // TOPIC 3: Flexible Images
      {
        id: 3,
        topicName: "Flexible Images",
        content: [
          {
            title: "Making Images Responsive",
            text: "In responsive web design, images should resize based on the width of the parent container using techniques like the `max-width: 100%` rule.",
            exampleCode: `
            img {
              max-width: 100%;
              height: auto;
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on how to make images responsive",
            videoLink: "https://www.youtube.com/watch?v=hccgkQU-VlI", // Placeholder link
          },
        ],
      },
      // TOPIC 4: Mobile-First Design
      {
        id: 4,
        topicName: "Mobile-First Design",
        content: [
          {
            title: "What is Mobile-First Design?",
            text: "Mobile-first design is an approach where web designers start by designing for the smallest screen sizes, and progressively enhance the layout for larger screens.",
          },
          {
            title: "Mobile-First CSS",
            text: "In mobile-first design, you write styles for small screens first, and then use media queries to add styles for larger screens.",
            exampleCode: `
            /* Base styles for mobile */
            body {
              font-size: 16px;
            }
  
            /* Media query for tablets */
            @media (min-width: 768px) {
              body {
                font-size: 18px;
              }
            }
  
            /* Media query for desktops */
            @media (min-width: 1024px) {
              body {
                font-size: 20px;
              }
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Mobile-First Design",
            videoLink: "https://www.youtube.com/watch?v=U4KU3e7xi_E", // Placeholder link
          },
        ],
      },
      // TOPIC 5: Responsive Typography
      {
        id: 5,
        topicName: "Responsive Typography",
        content: [
          {
            title: "Scaling Typography with Viewport Units",
            text: "Responsive typography adjusts the font size based on the screen size. You can achieve this using viewport units like `vw` and `vh`.",
            exampleCode: `
            h1 {
              font-size: 5vw;
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Responsive Typography",
            videoLink: "https://www.youtube.com/watch?v=R_aFgFbo3G4", // Placeholder link
          },
        ],
      },
      // TOPIC 6: CSS Flexbox and Grid for Responsive Layouts
      {
        id: 6,
        topicName: "CSS Flexbox and Grid for Responsive Layouts",
        content: [
          {
            title: "Flexbox",
            text: "Flexbox is a layout model that allows you to design complex and flexible layouts with ease, especially when creating responsive designs.",
            exampleCode: `
            .container {
              display: flex;
              flex-wrap: wrap;
            }
  
            .item {
              flex: 1;
              min-width: 200px;
            }
            `,
          },
          {
            title: "CSS Grid",
            text: "CSS Grid is a powerful layout system for creating two-dimensional grid-based layouts, which are particularly useful for responsive web design.",
            exampleCode: `
            .container {
              display: grid;
              grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on CSS Flexbox and Grid",
            videoLink: "https://www.youtube.com/watch?v=0xMQfnTU6oo",
          },
        ],
      },
    ],
  },

  //COURSE 8 - BUILDING INTERACTIVE UIs WITH REACT
  {
    id: 8,
    name: "Building Interactive UIs with React",
    description:
      "Learn how to create dynamic user interfaces using React's component system.",
    track: "Frontend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=4UZrsTqkcW4&list=WL&index=3&t=13143s",
      websiteLink: {
        title: "React Tutorial",
        link: "https://www.w3schools.com/REACT/DEFAULT.ASP"
      }
    },
    topics: [
      {
        // topic 1
        id: 1,
        topicName: "CSS Architecture and Design Systems in React",
        content: [
          {
            title: "Introduction",
            text: "In large React applications, organizing CSS effectively is crucial. CSS architecture helps keep styles maintainable and scalable. Using design systems ensures consistent UI elements across your app.",
          },
          {
            title: "CSS Modules vs. Styled Components",
            text: "CSS Modules scope styles to individual components, preventing conflicts. Styled Components allow you to write CSS directly in your JavaScript files.",
            exampleCode: `// Using CSS Modules
            import styles from './Button.module.css';

            function Button() {
              return <button className={styles.primaryButton}>Click Me</button>;
            }


              // Using Styled Components
            import styled from 'styled-components';

            const Button = styled.button"
              background-color: #3498db;
              padding: 10px 20px;
            "

            function App() {
              return <Button>Click Me</Button>;
            }

            `,
          },
          {
            title: "Design Systems and Sass",
            text: "A design system centralizes colors, typography, and components for consistency. Sass can be used to define variables and organize your design tokens.",
            exampleCode: `// _variables.scss
            $primary-color: #3498db;
            $spacing-unit: 8px;

            .button {
              background-color: $primary-color;
              padding: $spacing-unit * 2;
            }
            `,
          },
          {
            title: "Reusable UI Components",
            text: "React components should adhere to your design system for consistency. Below is a button component using Sass variables:",
            exampleCode: `// Button.js
            import React from 'react';
            import './Button.scss';

            function Button({ label }) {
              return <button className="button">{label}</button>;
            }
            `,
          },
          {
            title: "Additional Resources",
            text: "check out this link on css architechture and designs for react",
            websiteLink: {
              title: "Styled Components",
              link: "https://styled-components.com/",
            },
          },
        ],
      },
      {
        // topic two
        id: 2,
        topicName: "Component-Based Animations in React",
        content: [
          {
            title: "Introduction",
            text: "Animations enhance user experience by adding life to your UI. In React, you can easily implement animations using CSS transitions or libraries like Framer Motion or React Spring, which are designed for complex, interactive animations.",
          },
          {
            title: "Animating with CSS Transitions",
            text: "CSS transitions allow you to animate changes to CSS properties, such as opacity, color, or position, by specifying a duration and easing.",
            exampleCode: `// Using CSS transitions
            import React, { useState } from 'react';
            import './Box.css';

            function Box() {
              const [isActive, setIsActive] = useState(false);

              return (
                <div
                  className={"box $ {isActive ? "active" : ""}"}
                  onClick={() => setIsActive(!isActive)}
                />
              );
            }

            // Box.css
            .box {
              width: 100px;
              height: 100px;
              background-color: #3498db;
              transition: transform 0.5s ease;
            }

            .box.active {
              transform: scale(1.2);
            }
            `,
          },
          {
            title: "Animating with Framer Motion",
            text: "Framer Motion provides a declarative way to animate React components with more complex interactions and smooth transitions.",
            exampleCode: `// Using Framer Motion
            import { motion } from 'framer-motion';

            function AnimatedBox() {
              return (
                <motion.div
                  animate={{ scale: 1.2 }}
                  whileHover={{ scale: 1.3 }}
                  transition={{ duration: 0.5 }}
                  style={{ width: '100px', height: '100px', backgroundColor: '#3498db' }}
                />
              );
            }
            `,
          },
          {
            title: "Choosing the Right Animation Approach",
            text: `CSS Transitions: Great for simple animations (hover effects, fades, etc.).
            Framer Motion: Ideal for more complex, interactive animations (dragging, transitions between pages).`,
          },
          {
            title: "Additional Resources",
            websiteLink: {
              title: "react spring",
              link: "https://www.react-spring.dev/",
            },
          },
        ],
      },
      {
        // topic 3
        id: "3",
        topicName: "Designing Custom UI Themes in React",
        content: [
          {
            title: "Introduction",
            text: "Custom themes allow users to personalize the look and feel of an application. By implementing light and dark mode, you enhance both accessibility and user experience. In React, theme switching can be easily managed with CSS variables or a context provider.",
          },
          {
            title: "Using CSS Variables for Theming",
            text: "CSS variables allow you to define reusable values for colors, fonts, and more. You can then switch between themes dynamically by changing these variables.",
          },

          {
            title: "",
            text: "in the css",

            exampleCode: `
            /* Global styles (variables.css) */
          :root {
            --primary-color: #3498db;
            --background-color: #ffffff;
            --text-color: #000000;
          }

          .dark-theme {
            --primary-color: #2ecc71;
            --background-color: #1e1e1e;
            --text-color: #ffffff;
          }

          body {
            background-color: var(--background-color);
            color: var(--text-color);
          }
        `,
          },
          {
            title: "",
            text: "in the jsx",

            exampleCode: `
        // App.js
      import React, { useState } from 'react';
      import './variables.css';

      function App() {
        const [isDarkMode, setIsDarkMode] = useState(false);

        return (
          <div className={isDarkMode ? 'dark-theme' : ''}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
              Toggle Theme
            </button>
            <h1>Hello, World!</h1>
          </div>
        );
      }

    `,
          },
          {
            title: "Using React Context for Theme Management",
            text: "Context API allows you to manage theme state across your entire application.",
            exampleCode: `// ThemeContext.js
      import React, { createContext, useState, useContext } from 'react';

      const ThemeContext = createContext();

      export const useTheme = () => useContext(ThemeContext);

      export function ThemeProvider({ children }) {
        const [isDarkMode, setIsDarkMode] = useState(false);

        const toggleTheme = () => setIsDarkMode(!isDarkMode);

        return (
          <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
            {children}
          </ThemeContext.Provider>
        );
      }
      `,
          },
          {
            title: "Additional Resources",
            text: "check out this link on css architechture and designs for react",
            websiteLink: {
              title: "CSS Variables",
              link: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties",
            },
          },
        ],
      },
    ],
  },
  {
    id: 9,
    name: "JavaScript for Backend",
    description: "Master JavaScript for server-side development and APIs.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4", 
      websiteLink: {
        title: "MDN Web Docs - JavaScript on the server",
        link: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Node.js
      {
        id: 1,
        topicName: "Introduction to Node.js",
        content: [
          {
            title: "What is Node.js?",
            text: "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript on the server side.",
          },
          {
            title: "Why Use Node.js for Backend?",
            text: "Node.js is fast, scalable, and well-suited for building APIs, real-time apps, and handling asynchronous operations.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Node.js basics",
            videoLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4", // Placeholder link
          },
        ],
      },
      // TOPIC 2: Working with Express.js
      {
        id: 2,
        topicName: "Working with Express.js",
        content: [
          {
            title: "Introduction to Express.js",
            text: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features to build APIs.",
          },
          {
            title: "Creating Your First Express Server",
            text: "You can easily create an Express server to handle HTTP requests.",
            exampleCode: `
            const express = require('express');
            const app = express();
  
            app.get('/', (req, res) => {
              res.send('Hello World');
            });
  
            app.listen(3000, () => {
              console.log('Server is running on port 3000');
            });
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE", // Placeholder link
          },
        ],
      },
      // TOPIC 3: Working with Databases
      {
        id: 3,
        topicName: "Working with Databases",
        content: [
          {
            title: "Connecting to a Database",
            text: "You can use libraries like Mongoose or Sequelize to connect your Node.js application to databases like MongoDB or MySQL.",
          },
          {
            title: "Basic CRUD Operations",
            text: "Learn to perform basic Create, Read, Update, and Delete (CRUD) operations using Node.js.",
            exampleCode: `
            // Example using Mongoose for MongoDB
            const mongoose = require('mongoose');
            mongoose.connect('mongodb://localhost/mydatabase');
  
            const User = mongoose.model('User', { name: String });
  
            const newUser = new User({ name: 'John' });
            newUser.save().then(() => console.log('User saved'));
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on connecting to databases in Node.js",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg", // Placeholder link
          },
        ],
      },
      // TOPIC 4: RESTful APIs
      {
        id: 4,
        topicName: "RESTful APIs",
        content: [
          {
            title: "What is a RESTful API?",
            text: "A RESTful API is an architectural style for designing networked applications, relying on stateless communication and standard HTTP methods like GET, POST, PUT, DELETE.",
          },
          {
            title: "Creating a RESTful API with Express",
            text: "You can use Express to build RESTful APIs that communicate with a client or a front-end application.",
            exampleCode: `
            app.get('/users', (req, res) => {
              res.json([{ id: 1, name: 'John' }]);
            });
  
            app.post('/users', (req, res) => {
              // Logic to create a new user
              res.status(201).send('User created');
            });
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on building RESTful APIs",
            videoLink: "https://www.youtube.com/watch?v=0oXYv3IYlHg", // Placeholder link
          },
        ],
      },
      // TOPIC 5: Authentication and Authorization
      {
        id: 5,
        topicName: "Authentication and Authorization",
        content: [
          {
            title: "Understanding Authentication",
            text: "Authentication is the process of verifying the identity of a user. In Node.js, you can implement authentication using libraries like Passport.js or JSON Web Tokens (JWT).",
          },
          {
            title: "Implementing JWT Authentication",
            text: "JWT is a popular method for securely transmitting information between parties as a JSON object.",
            exampleCode: `
            const jwt = require('jsonwebtoken');
  
            // Generate a token
            const token = jwt.sign({ id: user._id }, 'secretKey', { expiresIn: '1h' });
  
            // Verify a token
            jwt.verify(token, 'secretKey', (err, decoded) => {
              if (err) throw err;
              console.log(decoded);
            });
            `,
          },
          {
            title: "Additional Resources",
            text: "Watch this video on implementing JWT authentication",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI", // Placeholder link
          },
        ],
      },
    ],
  },
  
  {
    id: 10,
    name: "Node.js for Beginners",
    description: "Learn how to build scalable server-side applications using Node.js.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4",  // Placeholder video
      websiteLink: {
        title: "Node.js Official Documentation",
        link: "https://nodejs.org/en/docs/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Node.js",
        content: [
          {
            title: "What is Node.js?",
            text: "Node.js is a runtime environment that allows JavaScript to be executed on the server-side, enabling developers to build scalable and high-performance applications."
          },
          {
            title: "V8 Engine",
            text: "Node.js uses the V8 engine, the same engine used in Google Chrome, to execute JavaScript code outside of a browser environment."
          },
          {
            title: "Additional Resources",
            text: "Watch this introductory video on Node.js",
            videoLink: "https://www.youtube.com/watch?v=TlB_eWDSMt4"
          }
        ]
      },
      {
        id: 2,
        topicName: "Setting Up a Node.js Environment",
        content: [
          {
            title: "Installing Node.js",
            text: "To begin with Node.js, you need to install it on your local machine. You can download the installer from the Node.js official website."
          },
          {
            title: "Verifying Installation",
            text: "After installing, you can verify the installation by running `node -v` and `npm -v` commands in your terminal."
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on setting up Node.js",
            videoLink: "https://www.youtube.com/watch?v=ENrzD9HAZK4"
          }
        ]
      },
      {
        id: 3,
        topicName: "Creating Your First Server",
        content: [
          {
            title: "The HTTP Module",
            text: "Node.js has a built-in HTTP module that allows you to create a web server. You can use the `http.createServer()` method to create your first server."
          },
          {
            title: "Example Code",
            exampleCode: `
              const http = require('http');
              const server = http.createServer((req, res) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Hello, Node.js!');
              });
              server.listen(3000, () => {
                console.log('Server running at http://localhost:3000/');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on creating a Node.js server",
            videoLink: "https://www.youtube.com/watch?v=ENrzD9HAZK4"
          }
        ]
      },
      {
        id: 4,
        topicName: "Working with NPM",
        content: [
          {
            title: "What is NPM?",
            text: "NPM (Node Package Manager) is a package manager for Node.js that allows you to install third-party libraries and manage your project's dependencies."
          },
          {
            title: "Installing Packages",
            text: "You can install a package using the `npm install <package-name>` command. For example, to install the `express` package, you would run `npm install express`."
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on using NPM",
            videoLink: "https://www.youtube.com/watch?v=ENrzD9HAZK4"
          }
        ]
      },
      {
        id: 5,
        topicName: "Building APIs with Express.js",
        content: [
          {
            title: "What is Express.js?",
            text: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for building APIs and web applications."
          },
          {
            title: "Example Code",
            exampleCode: `
              const express = require('express');
              const app = express();
              app.get('/', (req, res) => {
                res.send('Hello, Express.js!');
              });
              app.listen(3000, () => {
                console.log('Server running on http://localhost:3000');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on building APIs with Express.js",
            videoLink: "https://www.youtube.com/watch?v=ENrzD9HAZK4"
          }
        ]
      }
    ]
  },
  
  {
    id: 11,
    name: "Express.js Fundamentals",
    description: "Master the basics of Express.js to build web servers in Node.js.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE",  // Placeholder video
      websiteLink: {
        title: "Express.js Documentation",
        link: "https://expressjs.com/en/starter/installing.html"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Express.js",
        content: [
          {
            title: "What is Express.js?",
            text: "Express.js is a fast, unopinionated, and minimalist web framework for Node.js, designed for building web applications and APIs."
          },
          {
            title: "Features of Express.js",
            text: "Express provides a thin layer of fundamental web application features, without obscuring Node.js features."
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction video on Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      },
      {
        id: 2,
        topicName: "Setting Up Express.js",
        content: [
          {
            title: "Installing Express.js",
            text: "You can install Express.js using NPM by running the command `npm install express`."
          },
          {
            title: "Basic Server Setup",
            exampleCode: `
              const express = require('express');
              const app = express();
              const port = 3000;
              
              app.get('/', (req, res) => {
                res.send('Hello Express.js!');
              });
              
              app.listen(port, () => {
                console.log(\`Server running at http://localhost:\${port}\`);
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on setting up Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      },
      {
        id: 3,
        topicName: "Routing in Express.js",
        content: [
          {
            title: "Defining Routes",
            text: "Express.js allows you to define routes to handle requests of different types (GET, POST, etc.) for specific URLs."
          },
          {
            title: "Example: Basic Routing",
            exampleCode: `
              app.get('/about', (req, res) => {
                res.send('About Page');
              });
              
              app.post('/submit', (req, res) => {
                res.send('Form submitted');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on routing in Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      },
      {
        id: 4,
        topicName: "Middleware in Express.js",
        content: [
          {
            title: "What is Middleware?",
            text: "Middleware functions are functions that have access to the request and response objects. They can execute any code, modify the request/response, end the request-response cycle, or call the next middleware."
          },
          {
            title: "Using Middleware",
            exampleCode: `
              app.use((req, res, next) => {
                console.log('Request received at:', new Date().toISOString());
                next();
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on using middleware in Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      },
      {
        id: 5,
        topicName: "Handling Static Files",
        content: [
          {
            title: "Serving Static Files",
            text: "Express.js can serve static files like HTML, CSS, and images using the `express.static` middleware."
          },
          {
            title: "Example: Serving Static Files",
            exampleCode: `
              app.use(express.static('public'));
  
              // Now, files in the 'public' directory can be accessed
              // e.g., http://localhost:3000/images/example.png
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on serving static files in Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      },
      {
        id: 6,
        topicName: "Error Handling in Express.js",
        content: [
          {
            title: "Handling Errors",
            text: "Error-handling middleware is used to handle any errors that occur during request processing."
          },
          {
            title: "Example: Error Handling Middleware",
            exampleCode: `
              app.use((err, req, res, next) => {
                console.error(err.stack);
                res.status(500).send('Something broke!');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on error handling in Express.js",
            videoLink: "https://www.youtube.com/watch?v=L72fhGm1tfE"
          }
        ]
      }
    ]
  },
  
  {
    id: 12,
    name: "Database Management with MongoDB",
    description: "Learn how to use MongoDB to store and manage data in your web applications.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU",  // Placeholder video
      websiteLink: {
        title: "MongoDB Official Documentation",
        link: "https://docs.mongodb.com/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to MongoDB",
        content: [
          {
            title: "What is MongoDB?",
            text: "MongoDB is a NoSQL, document-oriented database designed to store data in flexible, JSON-like documents. It allows for efficient scaling and high-performance data storage."
          },
          {
            title: "Advantages of MongoDB",
            text: "MongoDB offers scalability, flexibility in schema design, and easy integration with various web frameworks, making it ideal for web applications."
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction to MongoDB video",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      },
      {
        id: 2,
        topicName: "Setting Up MongoDB",
        content: [
          {
            title: "Installing MongoDB",
            text: "To get started, you can install MongoDB locally by downloading it from the official website or use a cloud service like MongoDB Atlas for easy setup."
          },
          {
            title: "Basic MongoDB Commands",
            exampleCode: `
              // Start MongoDB server
              mongod
  
              // Connect to MongoDB shell
              mongo
  
              // Show all databases
              show dbs;
  
              // Create or switch to a new database
              use myDatabase;
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this setup guide for MongoDB",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      },
      {
        id: 3,
        topicName: "CRUD Operations in MongoDB",
        content: [
          {
            title: "Creating Documents",
            text: "Documents in MongoDB are created using the `insertOne` or `insertMany` commands to add data into a collection."
          },
          {
            title: "Example: Inserting Data",
            exampleCode: `
              db.users.insertOne({
                name: "John Doe",
                email: "john@example.com",
                age: 30
              });
            `
          },
          {
            title: "Reading Documents",
            text: "You can retrieve documents using the `find` command with optional filters to specify which documents to return."
          },
          {
            title: "Updating Documents",
            exampleCode: `
              db.users.updateOne(
                { name: "John Doe" },
                { $set: { age: 31 } }
              );
            `
          },
          {
            title: "Deleting Documents",
            exampleCode: `
              db.users.deleteOne({ name: "John Doe" });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on MongoDB CRUD operations",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      },
      {
        id: 4,
        topicName: "Indexes in MongoDB",
        content: [
          {
            title: "What are Indexes?",
            text: "Indexes improve the performance of database queries by allowing the database to search efficiently for documents that match certain criteria."
          },
          {
            title: "Creating an Index",
            exampleCode: `
              db.users.createIndex({ email: 1 });
            `
          },
          {
            title: "Example: Using Indexes",
            text: "Indexes are useful for fields you query often, like user email addresses or product IDs."
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on indexes in MongoDB",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      },
      {
        id: 5,
        topicName: "Aggregation in MongoDB",
        content: [
          {
            title: "What is Aggregation?",
            text: "Aggregation is a powerful feature in MongoDB that allows you to process data and return computed results, similar to SQL's GROUP BY."
          },
          {
            title: "Example: Aggregation Pipeline",
            exampleCode: `
              db.users.aggregate([
                { $match: { age: { $gte: 18 } } },
                { $group: { _id: "$age", totalUsers: { $sum: 1 } } }
              ]);
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on aggregation in MongoDB",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      },
      {
        id: 6,
        topicName: "Working with MongoDB Atlas",
        content: [
          {
            title: "What is MongoDB Atlas?",
            text: "MongoDB Atlas is a cloud-based service that allows you to host and manage MongoDB databases in a secure and scalable environment."
          },
          {
            title: "Creating a Cluster in MongoDB Atlas",
            text: "With MongoDB Atlas, you can quickly create clusters, manage backups, and monitor performance through an intuitive interface."
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on getting started with MongoDB Atlas",
            videoLink: "https://www.youtube.com/watch?v=ofme2o29ngU"
          }
        ]
      }
    ]
  },
  
  {
    id: 13,
    name: "RESTful API Development",
    description: "Learn how to design and build RESTful APIs using Node.js and Express.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg", // Placeholder video
      websiteLink: {
        title: "RESTful API Design Guide",
        link: "https://restfulapi.net/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to RESTful APIs",
        content: [
          {
            title: "What is a RESTful API?",
            text: "A RESTful API is an architectural style for designing networked applications. It uses HTTP requests to perform CRUD operations (Create, Read, Update, Delete) on resources represented as URLs."
          },
          {
            title: "Principles of RESTful API",
            text: "Key principles include stateless interactions, use of HTTP methods (GET, POST, PUT, DELETE), and resource identification through URIs."
          },
          {
            title: "Additional Resources",
            text: "Watch this introductory video on RESTful APIs",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 2,
        topicName: "Setting Up Node.js and Express",
        content: [
          {
            title: "Installing Node.js and Express",
            text: "Learn how to set up a Node.js environment and install Express.js for building RESTful APIs."
          },
          {
            title: "Setting up the Express App",
            exampleCode: `
              const express = require('express');
              const app = express();
              const PORT = 3000;
  
              app.listen(PORT, () => {
                console.log(\`Server is running on port \${PORT}\`);
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this setup guide for Node.js and Express",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 3,
        topicName: "Creating Routes in Express",
        content: [
          {
            title: "Routing in Express",
            text: "Routes define how the application responds to client requests to different URLs. You can use methods like GET, POST, PUT, and DELETE to handle different requests."
          },
          {
            title: "Example: Creating Basic Routes",
            exampleCode: `
              app.get('/', (req, res) => {
                res.send('Hello, World!');
              });
  
              app.post('/api/resource', (req, res) => {
                // Handle POST request
                res.send('Resource created');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on routing in Express",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 4,
        topicName: "Working with Middleware",
        content: [
          {
            title: "What is Middleware?",
            text: "Middleware functions are executed sequentially to handle requests, modify responses, or execute additional logic before sending the response."
          },
          {
            title: "Example: Using Middleware",
            exampleCode: `
              const express = require('express');
              const app = express();
  
              // Middleware to log request method and URL
              app.use((req, res, next) => {
                console.log(\`\${req.method} \${req.url}\`);
                next();
              });
  
              app.get('/', (req, res) => {
                res.send('Middleware Example');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on middleware in Express",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 5,
        topicName: "Building CRUD APIs",
        content: [
          {
            title: "Implementing CRUD Operations",
            text: "Learn how to create APIs that allow clients to perform Create, Read, Update, and Delete operations on resources."
          },
          {
            title: "Example: Basic CRUD API",
            exampleCode: `
              const express = require('express');
              const app = express();
  
              let items = [];
  
              // Create
              app.post('/api/items', (req, res) => {
                const item = { id: items.length + 1, name: req.body.name };
                items.push(item);
                res.status(201).send(item);
              });
  
              // Read
              app.get('/api/items', (req, res) => {
                res.send(items);
              });
  
              // Update
              app.put('/api/items/:id', (req, res) => {
                const item = items.find(i => i.id === parseInt(req.params.id));
                if (!item) return res.status(404).send('Item not found');
                item.name = req.body.name;
                res.send(item);
              });
  
              // Delete
              app.delete('/api/items/:id', (req, res) => {
                const item = items.find(i => i.id === parseInt(req.params.id));
                if (!item) return res.status(404).send('Item not found');
                items = items.filter(i => i.id !== item.id);
                res.send(item);
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on building CRUD APIs with Express",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 6,
        topicName: "Handling API Errors",
        content: [
          {
            title: "Error Handling in Express",
            text: "Properly handling errors in APIs ensures that clients receive meaningful error messages and the API remains reliable."
          },
          {
            title: "Example: Error Handling Middleware",
            exampleCode: `
              app.use((err, req, res, next) => {
                console.error(err.stack);
                res.status(500).send('Something went wrong!');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on error handling in Express",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      },
      {
        id: 7,
        topicName: "Securing RESTful APIs",
        content: [
          {
            title: "Securing API Endpoints",
            text: "Learn how to secure API endpoints using authentication and authorization mechanisms such as JWT (JSON Web Tokens)."
          },
          {
            title: "Example: Implementing JWT Authentication",
            exampleCode: `
              const jwt = require('jsonwebtoken');
  
              app.post('/api/login', (req, res) => {
                // Validate user credentials (e.g., using a database)
                const token = jwt.sign({ userId: user.id }, 'secretKey');
                res.send({ token });
              });
  
              // Protecting routes using JWT
              function authenticate(req, res, next) {
                const token = req.header('Authorization').replace('Bearer ', '');
                try {
                  const decoded = jwt.verify(token, 'secretKey');
                  req.user = decoded;
                  next();
                } catch (error) {
                  res.status(401).send('Unauthorized');
                }
              }
  
              app.get('/api/protected', authenticate, (req, res) => {
                res.send('This is a protected route');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on securing APIs with JWT",
            videoLink: "https://www.youtube.com/watch?v=fgTGADljAeg"
          }
        ]
      }
    ]
  },
  
  {
    id: 14,
    name: "GraphQL for Backend",
    description: "Dive into GraphQL and learn how to build efficient and scalable APIs.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q", // Placeholder video
      websiteLink: {
        title: "GraphQL Official Documentation",
        link: "https://graphql.org/learn/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to GraphQL",
        content: [
          {
            title: "What is GraphQL?",
            text: "GraphQL is a query language for APIs and a runtime for executing those queries. It allows clients to specify the shape of the data they need and returns exactly that, making it highly efficient compared to REST."
          },
          {
            title: "Key Concepts",
            text: "Key concepts of GraphQL include schema, resolvers, queries, and mutations. Schemas define the structure of your API, and resolvers are functions that handle API requests."
          },
          {
            title: "Additional Resources",
            text: "Watch this introductory video on GraphQL",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 2,
        topicName: "Setting Up a GraphQL Server with Node.js",
        content: [
          {
            title: "Installing GraphQL and Express",
            text: "Learn how to set up a GraphQL server using Node.js and Express by installing the required packages like `express`, `express-graphql`, and `graphql`."
          },
          {
            title: "Example: Setting Up a Basic GraphQL Server",
            exampleCode: `
              const express = require('express');
              const { graphqlHTTP } = require('express-graphql');
              const { buildSchema } = require('graphql');
  
              const app = express();
  
              // Define the GraphQL schema
              const schema = buildSchema(\`
                type Query {
                  hello: String
                }
              \`);
  
              // Define the resolver
              const root = {
                hello: () => 'Hello, world!'
              };
  
              app.use('/graphql', graphqlHTTP({
                schema: schema,
                rootValue: root,
                graphiql: true
              }));
  
              app.listen(4000, () => {
                console.log('GraphQL server running on port 4000');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this setup guide for GraphQL with Node.js",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 3,
        topicName: "GraphQL Queries and Mutations",
        content: [
          {
            title: "Writing GraphQL Queries",
            text: "Queries are used to fetch data in GraphQL. You can request specific fields, and the API will return only the data you asked for."
          },
          {
            title: "Writing GraphQL Mutations",
            text: "Mutations are used to modify data, such as creating, updating, or deleting records. Mutations look similar to queries but have different semantics."
          },
          {
            title: "Example: Creating a Query and Mutation",
            exampleCode: `
              const schema = buildSchema(\`
                type Query {
                  getMessage: String
                }
  
                type Mutation {
                  setMessage(message: String): String
                }
              \`);
  
              let message = 'Hello, world!';
  
              const root = {
                getMessage: () => message,
                setMessage: ({ message: newMessage }) => {
                  message = newMessage;
                  return message;
                }
              };
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on queries and mutations",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 4,
        topicName: "GraphQL Schema Design",
        content: [
          {
            title: "Designing the GraphQL Schema",
            text: "Schemas define the shape and structure of your API. Learn how to design schemas to handle complex data relationships efficiently."
          },
          {
            title: "Example: Defining a Schema with Types and Relationships",
            exampleCode: `
              const schema = buildSchema(\`
                type Author {
                  id: ID
                  name: String
                  books: [Book]
                }
  
                type Book {
                  id: ID
                  title: String
                  author: Author
                }
  
                type Query {
                  books: [Book]
                  authors: [Author]
                }
              \`);
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on GraphQL schema design",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 5,
        topicName: "Working with Resolvers",
        content: [
          {
            title: "What are Resolvers?",
            text: "Resolvers are functions that handle requests for specific fields in the GraphQL schema. They define how and from where to fetch the requested data."
          },
          {
            title: "Example: Creating a Resolver Function",
            exampleCode: `
              const root = {
                books: () => booksList,  // Fetches the list of books
                authors: () => authorsList  // Fetches the list of authors
              };
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on building resolvers",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 6,
        topicName: "Handling Complex Data in GraphQL",
        content: [
          {
            title: "Nested Queries and Relations",
            text: "GraphQL allows you to request deeply nested data. Learn how to define relationships between different data types and handle complex data structures."
          },
          {
            title: "Example: Nested Query",
            exampleCode: `
              query {
                books {
                  title
                  author {
                    name
                  }
                }
              }
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on handling complex data with GraphQL",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 7,
        topicName: "Error Handling in GraphQL",
        content: [
          {
            title: "Handling Errors Gracefully",
            text: "Error handling in GraphQL ensures that the client is informed about what went wrong during data fetching or processing."
          },
          {
            title: "Example: Returning Errors in GraphQL",
            exampleCode: `
              const root = {
                books: () => {
                  throw new Error('Books data could not be fetched.');
                }
              };
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on error handling in GraphQL",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      },
      {
        id: 8,
        topicName: "Optimizing GraphQL Performance",
        content: [
          {
            title: "Optimizing Queries for Large Datasets",
            text: "Learn techniques like batching and caching to optimize GraphQL queries when dealing with large datasets."
          },
          {
            title: "Additional Resources",
            text: "Watch this video on optimizing GraphQL performance",
            videoLink: "https://www.youtube.com/watch?v=ed8SzALpx1Q"
          }
        ]
      }
    ]
  },
  
  {
    id: 15,
    name: "Authentication & Authorization",
    description: "Learn how to secure your backend applications with proper user authentication.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI", 
      websiteLink: {
        title: "JWT Authentication Tutorial",
        link: "https://jwt.io/introduction/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Authentication & Authorization",
        content: [
          {
            title: "What is Authentication?",
            text: "Authentication is the process of verifying the identity of a user or application. It involves checking credentials like usernames, passwords, or tokens."
          },
          {
            title: "What is Authorization?",
            text: "Authorization is the process of determining what a user is allowed to do. It ensures that the authenticated user has the proper permissions to access specific resources."
          },
          {
            title: "Difference Between Authentication and Authorization",
            text: "Authentication verifies identity, while authorization determines permissions. Both are crucial in securing backend systems."
          },
          {
            title: "Additional Resources",
            text: "Watch this overview of Authentication & Authorization",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 2,
        topicName: "JWT (JSON Web Tokens) Authentication",
        content: [
          {
            title: "What are JWTs?",
            text: "JWTs are a secure way to represent user claims between two parties. They are used for stateless authentication, where the server verifies a token without storing session data."
          },
          {
            title: "How JWTs Work",
            text: "JWTs consist of a header, payload, and signature. The header contains metadata, the payload holds the claims, and the signature ensures data integrity."
          },
          {
            title: "Example: Creating a JWT",
            exampleCode: `
              const jwt = require('jsonwebtoken');
  
              const user = { id: 1, username: 'exampleUser' };
              const token = jwt.sign(user, 'yourSecretKey', { expiresIn: '1h' });
  
              console.log(token);
            `
          },
          {
            title: "Additional Resources",
            text: "Learn more about JWTs in this tutorial",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 3,
        topicName: "Implementing Authentication with Passport.js",
        content: [
          {
            title: "What is Passport.js?",
            text: "Passport.js is a middleware for Node.js that simplifies implementing various authentication strategies, including local and third-party providers like Google or Facebook."
          },
          {
            title: "Example: Setting Up Passport for Local Authentication",
            exampleCode: `
              const passport = require('passport');
              const LocalStrategy = require('passport-local').Strategy;
  
              passport.use(new LocalStrategy(
                (username, password, done) => {
                  User.findOne({ username: username }, (err, user) => {
                    if (err) return done(err);
                    if (!user) return done(null, false, { message: 'Incorrect username.' });
                    if (!user.verifyPassword(password)) return done(null, false, { message: 'Incorrect password.' });
                    return done(null, user);
                  });
                }
              ));
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on Passport.js",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 4,
        topicName: "OAuth 2.0 Authentication",
        content: [
          {
            title: "What is OAuth 2.0?",
            text: "OAuth 2.0 is an authorization framework that allows third-party services to exchange access tokens without sharing credentials. It's commonly used for signing in with services like Google, Facebook, etc."
          },
          {
            title: "How OAuth 2.0 Works",
            text: "OAuth 2.0 uses access tokens that are granted based on user consent. The token can then be used by applications to access protected resources."
          },
          {
            title: "Example: Implementing OAuth with Google",
            exampleCode: `
              const GoogleStrategy = require('passport-google-oauth20').Strategy;
  
              passport.use(new GoogleStrategy({
                clientID: 'yourGoogleClientID',
                clientSecret: 'yourGoogleClientSecret',
                callbackURL: 'http://www.example.com/auth/google/callback'
              },
              (token, tokenSecret, profile, done) => {
                User.findOrCreate({ googleId: profile.id }, (err, user) => {
                  return done(err, user);
                });
              }));
            `
          },
          {
            title: "Additional Resources",
            text: "Learn how OAuth 2.0 works with Google",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 5,
        topicName: "Securing Routes with Middleware",
        content: [
          {
            title: "Using Middleware for Route Protection",
            text: "Middleware can be used to protect routes by checking if the user is authenticated and authorized to access specific resources."
          },
          {
            title: "Example: Protecting a Route with JWT Middleware",
            exampleCode: `
              const jwt = require('jsonwebtoken');
  
              const authenticateJWT = (req, res, next) => {
                const token = req.header('Authorization');
                if (!token) return res.status(401).send('Access Denied');
  
                try {
                  const verified = jwt.verify(token, 'yourSecretKey');
                  req.user = verified;
                  next();
                } catch (err) {
                  res.status(400).send('Invalid Token');
                }
              };
  
              app.get('/protected', authenticateJWT, (req, res) => {
                res.send('This is a protected route');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Learn how to secure routes using middleware",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 6,
        topicName: "Role-Based Authorization",
        content: [
          {
            title: "What is Role-Based Authorization?",
            text: "Role-based authorization is a security mechanism that restricts access to certain resources based on the user's role (e.g., admin, user, moderator)."
          },
          {
            title: "Example: Implementing Role-Based Access Control",
            exampleCode: `
              const checkRole = (roles) => (req, res, next) => {
                if (!roles.includes(req.user.role)) {
                  return res.status(403).send('Access Forbidden');
                }
                next();
              };
  
              app.get('/admin', authenticateJWT, checkRole(['admin']), (req, res) => {
                res.send('Welcome, Admin!');
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on role-based authorization",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 7,
        topicName: "Two-Factor Authentication (2FA)",
        content: [
          {
            title: "What is Two-Factor Authentication?",
            text: "Two-factor authentication (2FA) adds an extra layer of security by requiring two forms of identification, typically something the user knows (password) and something they have (OTP or app token)."
          },
          {
            title: "Example: Implementing Two-Factor Authentication with Google Authenticator",
            exampleCode: `
              const speakeasy = require('speakeasy');
              const qrcode = require('qrcode');
  
              const secret = speakeasy.generateSecret({ length: 20 });
              console.log(secret.base32); // Save this in the user's profile
  
              // Generate a QR code for the user's app
              qrcode.toDataURL(secret.otpauth_url, (err, data) => {
                console.log(data); // Display this QR code to the user
              });
  
              // Verifying the token
              const verified = speakeasy.totp.verify({
                secret: secret.base32,
                encoding: 'base32',
                token: req.body.token
              });
  
              if (verified) {
                console.log('Token is valid');
              } else {
                console.log('Token is invalid');
              }
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on 2FA implementation",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      },
      {
        id: 8,
        topicName: "Common Security Best Practices",
        content: [
          {
            title: "Ensuring Secure Authentication",
            text: "Follow best practices such as using strong encryption, limiting login attempts, and hashing passwords with a secure algorithm like bcrypt."
          },
          {
            title: "Example: Hashing Passwords with bcrypt",
            exampleCode: `
              const bcrypt = require('bcrypt');
  
              const saltRounds = 10;
              const plainPassword = 'userPassword';
  
              bcrypt.hash(plainPassword, saltRounds, (err, hash) => {
                console.log('Hashed Password:', hash);
              });
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on security best practices",
            videoLink: "https://www.youtube.com/watch?v=2jqok-WgelI"
          }
        ]
      }
    ]
  },
  
  {
    id: 16,
    name: "Deploying Node.js Apps",
    description: "Learn how to deploy Node.js applications using platforms like Heroku and AWS.",
    track: "Backend Web Development",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg",
      websiteLink: {
        title: "Heroku Deployment Guide",
        link: "https://devcenter.heroku.com/articles/deploying-nodejs"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Node.js Deployment",
        content: [
          {
            title: "What is Deployment?",
            text: "Deployment is the process of publishing a web application so that it is accessible to users over the internet. In this topic, you will learn how to deploy Node.js applications to popular platforms like Heroku and AWS."
          },
          {
            title: "Choosing a Deployment Platform",
            text: "Popular platforms for deploying Node.js apps include Heroku, AWS, DigitalOcean, and Vercel. Each platform offers different services and pricing."
          },
          {
            title: "Additional Resources",
            text: "Watch this overview of deploying Node.js applications",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 2,
        topicName: "Deploying on Heroku",
        content: [
          {
            title: "What is Heroku?",
            text: "Heroku is a cloud platform that allows you to deploy and manage applications with ease. It supports Node.js applications and provides free-tier hosting with some limitations."
          },
          {
            title: "Steps to Deploy a Node.js App on Heroku",
            steps: [
              "Install the Heroku CLI and log in to your account.",
              "Initialize a Git repository in your project folder.",
              "Run `heroku create` to create a new Heroku app.",
              "Push your code to Heroku using `git push heroku master`.",
              "Your app will be deployed and can be accessed at the generated Heroku URL."
            ]
          },
          {
            title: "Example: Deploying a Simple Node.js App",
            exampleCode: `
              // Install Heroku CLI and initialize Git
              heroku login
              git init
              heroku create
  
              // Add code and commit changes
              git add .
              git commit -m "Initial commit"
  
              // Deploy to Heroku
              git push heroku master
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on deploying Node.js apps on Heroku",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 3,
        topicName: "Deploying on AWS Elastic Beanstalk",
        content: [
          {
            title: "What is AWS Elastic Beanstalk?",
            text: "AWS Elastic Beanstalk is a service provided by Amazon Web Services (AWS) that simplifies the process of deploying and scaling web applications. It automatically manages infrastructure, capacity provisioning, and load balancing."
          },
          {
            title: "Steps to Deploy a Node.js App on AWS Elastic Beanstalk",
            steps: [
              "Create an AWS account and install the AWS CLI.",
              "Run `eb init` to initialize Elastic Beanstalk in your project folder.",
              "Run `eb create` to create an environment and deploy your app.",
              "Elastic Beanstalk will handle the deployment, and your app will be accessible via a public URL."
            ]
          },
          {
            title: "Example: Deploying a Node.js App on AWS Elastic Beanstalk",
            exampleCode: `
              // Install AWS CLI and initialize Elastic Beanstalk
              aws configure
              eb init
  
              // Create an environment and deploy
              eb create my-node-app-env
              eb open
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on deploying Node.js apps on AWS",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 4,
        topicName: "Environment Variables & Configuration",
        content: [
          {
            title: "Why Use Environment Variables?",
            text: "Environment variables allow you to store sensitive information, like API keys or database URLs, outside your source code. This makes it easy to switch environments (e.g., development, production) without modifying your code."
          },
          {
            title: "How to Set Up Environment Variables",
            steps: [
              "Create a `.env` file in the root directory of your project.",
              "Store sensitive data in the `.env` file (e.g., `DB_URI=mongodb://...`).",
              "Use the `dotenv` package to load environment variables into your application."
            ]
          },
          {
            title: "Example: Using Environment Variables in Node.js",
            exampleCode: `
              // Install dotenv
              npm install dotenv
  
              // Load environment variables
              require('dotenv').config();
  
              // Access environment variables
              const dbUri = process.env.DB_URI;
              console.log('Database URI:', dbUri);
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on using environment variables",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 5,
        topicName: "Scaling Node.js Apps",
        content: [
          {
            title: "What is Scaling?",
            text: "Scaling is the process of ensuring that your app can handle increased traffic by distributing the workload across multiple servers or instances."
          },
          {
            title: "Horizontal vs Vertical Scaling",
            text: "Horizontal scaling involves adding more instances or servers, while vertical scaling involves increasing the resources (e.g., CPU, memory) of a single server."
          },
          {
            title: "Scaling on Heroku",
            text: "Heroku allows you to scale horizontally by adding 'dynos' (virtual containers) to your app. You can increase the number of dynos to handle more traffic."
          },
          {
            title: "Example: Scaling a Heroku App",
            exampleCode: `
              // Scale your Heroku app by increasing the number of dynos
              heroku ps:scale web=2
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on scaling Node.js apps",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 6,
        topicName: "Monitoring and Logging",
        content: [
          {
            title: "Why Monitoring is Important",
            text: "Monitoring helps you keep track of your application's performance and identify potential issues such as slow response times or high error rates."
          },
          {
            title: "Using Logging Tools",
            text: "Logging tools like Winston and Morgan can help you capture important information about requests, responses, and errors in your app. Heroku also provides built-in logging services."
          },
          {
            title: "Example: Setting Up Winston Logging",
            exampleCode: `
              const winston = require('winston');
  
              const logger = winston.createLogger({
                level: 'info',
                format: winston.format.json(),
                transports: [
                  new winston.transports.Console(),
                  new winston.transports.File({ filename: 'app.log' })
                ]
              });
  
              logger.info('Server started');
            `
          },
          {
            title: "Additional Resources",
            text: "Learn about monitoring and logging best practices",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      },
      {
        id: 7,
        topicName: "CI/CD for Node.js Applications",
        content: [
          {
            title: "What is CI/CD?",
            text: "CI/CD (Continuous Integration/Continuous Deployment) automates the process of testing, building, and deploying your application. It ensures that new changes are quickly integrated and deployed to production."
          },
          {
            title: "Setting Up CI/CD with Heroku and GitHub",
            text: "You can set up automated deployments from GitHub to Heroku. Every time you push changes to the GitHub repository, Heroku will automatically deploy the latest version."
          },
          {
            title: "Example: Configuring Heroku CI/CD",
            exampleCode: `
              // Connect your GitHub repository to Heroku
              heroku pipelines:connect your-github-repo
  
              // Enable automatic deployments
              heroku pipelines:enable-auto-deploy
            `
          },
          {
            title: "Additional Resources",
            text: "Learn how to set up CI/CD pipelines for Node.js",
            videoLink: "https://www.youtube.com/watch?v=G3gnMSyQjGg"
          }
        ]
      }
    ]
  },
  
  {
    id: 17,
    name: "Python for Data Science",
    description: "Learn Python programming with a focus on data science applications.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      websiteLink: {
        title: "Python for Data Science",
        link: "https://www.datacamp.com/courses/intro-to-python-for-data-science"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Python",
        content: [
          {
            title: "What is Python?",
            text: "Python is a versatile, high-level programming language widely used in data science, machine learning, and automation. In this topic, you will learn the basics of Python and its applications in data science."
          },
          {
            title: "Setting Up Python for Data Science",
            text: "To start working with Python for data science, you need to install Python, set up Jupyter Notebooks, and install important libraries like NumPy, Pandas, and Matplotlib."
          },
          {
            title: "Additional Resources",
            text: "Watch this beginner’s guide to Python programming",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 2,
        topicName: "Data Types and Variables",
        content: [
          {
            title: "Python Data Types",
            text: "Python supports various data types like integers, floats, strings, lists, and dictionaries, which are commonly used to store and manipulate data in data science projects."
          },
          {
            title: "Using Variables in Python",
            text: "Variables are used to store data values. In Python, you can easily assign values to variables and use them in calculations or functions."
          },
          {
            title: "Example: Defining Variables in Python",
            exampleCode: `
              # Integer
              age = 25
              
              # Float
              height = 5.9
              
              # String
              name = "Alice"
              
              # List
              scores = [88, 92, 79]
              
              # Dictionary
              student = {"name": "Alice", "age": 25}
            `
          },
          {
            title: "Additional Resources",
            text: "Learn more about Python data types and variables",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 3,
        topicName: "Control Flow in Python",
        content: [
          {
            title: "Using If-Else Statements",
            text: "Control flow allows you to control the execution of code based on certain conditions. Python's `if`, `else`, and `elif` statements are used to implement decision-making logic."
          },
          {
            title: "Loops in Python",
            text: "Loops such as `for` and `while` are used to repeat a block of code multiple times. Loops are particularly useful when working with large datasets in data science."
          },
          {
            title: "Example: Implementing Control Flow",
            exampleCode: `
              # If-Else statement
              score = 85
              if score >= 90:
                  grade = 'A'
              elif score >= 80:
                  grade = 'B'
              else:
                  grade = 'C'
  
              # For loop
              for i in range(5):
                  print(i)
  
              # While loop
              count = 0
              while count < 5:
                  print(count)
                  count += 1
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on control flow and loops in Python",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 4,
        topicName: "Data Manipulation with Pandas",
        content: [
          {
            title: "Introduction to Pandas",
            text: "Pandas is a Python library used for data manipulation and analysis. It provides powerful tools for handling structured data, such as data frames and series."
          },
          {
            title: "Working with DataFrames",
            text: "DataFrames are 2-dimensional labeled data structures in Pandas. You can perform data manipulation tasks such as filtering, grouping, and merging data using DataFrames."
          },
          {
            title: "Example: Loading and Manipulating Data with Pandas",
            exampleCode: `
              import pandas as pd
  
              # Load a dataset
              df = pd.read_csv("data.csv")
  
              # Display the first few rows
              print(df.head())
  
              # Filter data
              filtered_df = df[df['age'] > 30]
  
              # Group data
              grouped_df = df.groupby('gender').mean()
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction to Pandas for data manipulation",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 5,
        topicName: "Data Visualization with Matplotlib",
        content: [
          {
            title: "Introduction to Matplotlib",
            text: "Matplotlib is a Python library used for creating visualizations, such as line graphs, bar charts, and scatter plots, which are essential for data analysis and reporting."
          },
          {
            title: "Creating Visualizations with Matplotlib",
            text: "You can use Matplotlib to create a wide range of visualizations. Data visualizations help you gain insights into patterns and trends in data."
          },
          {
            title: "Example: Plotting a Simple Graph with Matplotlib",
            exampleCode: `
              import matplotlib.pyplot as plt
  
              # Data for plotting
              x = [1, 2, 3, 4, 5]
              y = [10, 12, 8, 15, 7]
  
              # Create a line plot
              plt.plot(x, y)
              plt.xlabel('X Axis')
              plt.ylabel('Y Axis')
              plt.title('Simple Line Plot')
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Learn more about creating visualizations using Matplotlib",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 6,
        topicName: "Introduction to NumPy",
        content: [
          {
            title: "What is NumPy?",
            text: "NumPy is a core library in Python used for numerical and scientific computing. It provides support for working with large, multi-dimensional arrays and matrices."
          },
          {
            title: "Working with Arrays in NumPy",
            text: "NumPy arrays are similar to Python lists but provide more efficient storage and operations. You can perform mathematical operations on entire arrays at once."
          },
          {
            title: "Example: Creating and Manipulating Arrays in NumPy",
            exampleCode: `
              import numpy as np
  
              # Create a NumPy array
              arr = np.array([1, 2, 3, 4, 5])
  
              # Perform mathematical operations
              print(arr + 5)
              print(arr * 2)
  
              # Create a multi-dimensional array
              matrix = np.array([[1, 2, 3], [4, 5, 6]])
              print(matrix)
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this guide on using NumPy for scientific computing",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 7,
        topicName: "Working with APIs in Python",
        content: [
          {
            title: "What is an API?",
            text: "An API (Application Programming Interface) allows your Python programs to communicate with external services and retrieve or send data. Many data science projects involve working with APIs to gather real-world data."
          },
          {
            title: "Using the Requests Library",
            text: "The `requests` library in Python is used to make HTTP requests to APIs. You can send GET or POST requests to interact with external APIs."
          },
          {
            title: "Example: Fetching Data from an API",
            exampleCode: `
              import requests
  
              # Send a GET request to an API
              response = requests.get('https://api.example.com/data')
  
              # Convert the response to JSON format
              data = response.json()
  
              # Print the fetched data
              print(data)
            `
          },
          {
            title: "Additional Resources",
            text: "Learn how to work with APIs using Python",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      },
      {
        id: 8,
        topicName: "Introduction to Machine Learning with Python",
        content: [
          {
            title: "What is Machine Learning?",
            text: "Machine learning is a branch of artificial intelligence that allows computers to learn patterns from data without being explicitly programmed. Python provides many libraries, such as scikit-learn, for building machine learning models."
          },
          {
            title: "Building a Simple Machine Learning Model",
            text: "You can use libraries like scikit-learn to build, train, and evaluate machine learning models. Common models include linear regression, decision trees, and neural networks."
          },
          {
            title: "Example: Building a Simple Linear Regression Model",
            exampleCode: `
              from sklearn.linear_model import LinearRegression
              import numpy as np
  
              # Data for the model
              X = np.array([[1], [2], [3], [4], [5]])
              y = np.array([10, 12, 8, 15, 7])
  
              # Create a linear regression model
              model = LinearRegression()
  
              # Train the model
              model.fit(X, y)
  
              # Make predictions
              predictions = model.predict(X)
              print(predictions)
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction to machine learning with Python",
            videoLink: "https://www.youtube.com/watch?v=rfscVS0vtbw"
          }
        ]
      }
    ]
  },
  
  {
    id: 18,
    name: "Data Analysis with Pandas",
    description: "Use the Pandas library to manipulate and analyze data efficiently.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg",
      websiteLink: {
        title: "Pandas Documentation",
        link: "https://pandas.pydata.org/pandas-docs/stable/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Pandas",
        content: [
          {
            title: "What is Pandas?",
            text: "Pandas is a powerful Python library for data manipulation and analysis. It provides data structures such as Series and DataFrames to efficiently store and manipulate structured data."
          },
          {
            title: "Installing Pandas",
            text: "To use Pandas, you need to install it using the command: `pip install pandas`. It’s widely used for data analysis in Python."
          },
          {
            title: "Additional Resources",
            text: "Watch this introduction to Pandas",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 2,
        topicName: "DataFrames in Pandas",
        content: [
          {
            title: "Understanding DataFrames",
            text: "DataFrames are 2-dimensional labeled data structures in Pandas. They are similar to Excel spreadsheets or SQL tables, making them perfect for working with tabular data."
          },
          {
            title: "Creating DataFrames",
            text: "You can create DataFrames from various sources like CSV files, SQL databases, or dictionaries in Python."
          },
          {
            title: "Example: Creating a DataFrame from a CSV file",
            exampleCode: `
              import pandas as pd
  
              # Load data from a CSV file
              df = pd.read_csv('data.csv')
  
              # Display the first few rows of the DataFrame
              print(df.head())
            `
          },
          {
            title: "Additional Resources",
            text: "Learn more about DataFrames in Pandas",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 3,
        topicName: "Basic Data Manipulation",
        content: [
          {
            title: "Selecting Data",
            text: "In Pandas, you can select specific columns or rows from a DataFrame using labels or indices."
          },
          {
            title: "Filtering Data",
            text: "You can filter data in a DataFrame using conditional statements, which allow you to analyze specific subsets of data."
          },
          {
            title: "Example: Filtering Data Based on Conditions",
            exampleCode: `
              # Select a column
              age_column = df['age']
  
              # Filter rows where age is greater than 30
              filtered_data = df[df['age'] > 30]
              print(filtered_data)
            `
          },
          {
            title: "Additional Resources",
            text: "Explore how to select and filter data in Pandas",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 4,
        topicName: "Data Aggregation and Grouping",
        content: [
          {
            title: "Grouping Data",
            text: "Pandas allows you to group data by one or more columns to perform operations like sum, mean, or count on grouped data."
          },
          {
            title: "Aggregating Data",
            text: "Aggregation functions like `sum()`, `mean()`, `min()`, and `max()` can be applied to grouped data to get meaningful insights."
          },
          {
            title: "Example: Grouping and Aggregating Data",
            exampleCode: `
              # Group data by the 'gender' column and calculate the mean age
              grouped_data = df.groupby('gender')['age'].mean()
              print(grouped_data)
            `
          },
          {
            title: "Additional Resources",
            text: "Watch a tutorial on grouping and aggregating data",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 5,
        topicName: "Data Cleaning",
        content: [
          {
            title: "Handling Missing Data",
            text: "In real-world datasets, missing data is common. Pandas provides functions to handle missing values, such as filling them with a default value or dropping rows/columns with missing data."
          },
          {
            title: "Renaming and Removing Columns",
            text: "Pandas allows you to easily rename columns, drop unnecessary ones, and clean the dataset for analysis."
          },
          {
            title: "Example: Handling Missing Data",
            exampleCode: `
              # Fill missing values with the mean
              df['age'].fillna(df['age'].mean(), inplace=True)
  
              # Drop rows with missing values
              df.dropna(inplace=True)
            `
          },
          {
            title: "Additional Resources",
            text: "Learn about handling missing data in Pandas",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 6,
        topicName: "Merging and Joining Data",
        content: [
          {
            title: "Merging DataFrames",
            text: "You can merge multiple DataFrames in Pandas, similar to SQL joins, which is useful when combining different datasets."
          },
          {
            title: "Concatenating DataFrames",
            text: "Pandas also provides functions to concatenate DataFrames vertically or horizontally."
          },
          {
            title: "Example: Merging Two DataFrames",
            exampleCode: `
              # Merge two DataFrames on a common column
              df_merged = pd.merge(df1, df2, on='id')
              print(df_merged)
            `
          },
          {
            title: "Additional Resources",
            text: "Watch a guide on merging and joining data",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      },
      {
        id: 7,
        topicName: "Data Visualization with Pandas",
        content: [
          {
            title: "Plotting Data with Pandas",
            text: "Pandas integrates well with Matplotlib, allowing you to quickly visualize your data using simple commands."
          },
          {
            title: "Creating Different Plots",
            text: "You can create bar plots, line plots, scatter plots, and histograms directly from your DataFrames."
          },
          {
            title: "Example: Plotting a Line Chart",
            exampleCode: `
              # Plot a line chart for the 'age' column
              df['age'].plot(kind='line')
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Learn more about data visualization in Pandas",
            videoLink: "https://www.youtube.com/watch?v=vmEHCJofslg"
          }
        ]
      }
    ]
  },
  
  {
    id: 19,
    name: "Machine Learning Basics",
    description: "Introduction to machine learning concepts and how to implement them with Python.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=i_LwzRVP7bg&t=4018s", // Placeholder link
      websiteLink: {
        title: "Machine Learning with Python - Freecodecamp",
        link: "https://www.freecodecamp.org/learn/machine-learning-with-python/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Machine Learning",
        content: [
          {
            title: "What is Machine Learning?",
            text: "Machine Learning (ML) is a field of artificial intelligence (AI) that enables systems to learn and improve from experience without being explicitly programmed.",
            exampleCode: ""
          },
          {
            title: "Types of Machine Learning",
            text: "The main types of machine learning are supervised learning, unsupervised learning, and reinforcement learning. Each type serves different purposes and uses various algorithms.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "Watch this video for an introduction to Machine Learning",
            videoLink: "https://www.youtube.com/watch?v=ukzFI9rgwfU"
          }
        ]
      },
      {
        id: 2,
        topicName: "Supervised Learning",
        content: [
          {
            title: "Overview of Supervised Learning",
            text: "Supervised learning involves training a model on a labeled dataset, meaning the model learns from input-output pairs.",
            exampleCode: `
              from sklearn.model_selection import train_test_split
              from sklearn.linear_model import LinearRegression
              from sklearn.metrics import mean_squared_error
  
              # Sample code for linear regression
              X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
              model = LinearRegression()
              model.fit(X_train, y_train)
              predictions = model.predict(X_test)
              mse = mean_squared_error(y_test, predictions)
              print("Mean Squared Error:", mse)
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Supervised Learning",
            videoLink: "https://www.youtube.com/watch?v=4qVRBYAdLAo"
          }
        ]
      },
      {
        id: 3,
        topicName: "Unsupervised Learning",
        content: [
          {
            title: "Overview of Unsupervised Learning",
            text: "Unsupervised learning deals with finding hidden patterns or intrinsic structures in input data without labeled responses.",
            exampleCode: `
              from sklearn.cluster import KMeans
              import matplotlib.pyplot as plt
  
              # Sample code for K-means clustering
              kmeans = KMeans(n_clusters=3)
              kmeans.fit(X)
              plt.scatter(X[:, 0], X[:, 1], c=kmeans.labels_)
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Unsupervised Learning",
            videoLink: "https://www.youtube.com/watch?v=JnnaDNNb380"
          }
        ]
      },
      {
        id: 4,
        topicName: "Reinforcement Learning",
        content: [
          {
            title: "Overview of Reinforcement Learning",
            text: "Reinforcement learning is an area of ML where an agent learns to make decisions by performing certain actions and receiving rewards or penalties.",
            exampleCode: `
              import numpy as np
  
              # Sample code for simple Q-learning
              Q = np.zeros((state_space, action_space))
              for episode in range(num_episodes):
                  state = env.reset()
                  done = False
                  while not done:
                      action = np.argmax(Q[state])
                      next_state, reward, done, _ = env.step(action)
                      Q[state, action] = Q[state, action] + alpha * (reward + gamma * np.max(Q[next_state]) - Q[state, action])
                      state = next_state
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Reinforcement Learning",
            videoLink: "https://www.youtube.com/watch?v=JgvyzIkgxF0"
          }
        ]
      }
    ]
  },

  {
    id: 20,
    name: "Data Visualization with Matplotlib",
    description: "Create compelling data visualizations using Python's Matplotlib library.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=3Xc3CA655Y4", // Placeholder link
      websiteLink: {
        title: "Matplotlib Documentation",
        link: "https://matplotlib.org/stable/contents.html"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Matplotlib",
        content: [
          {
            title: "What is Matplotlib?",
            text: "Matplotlib is a plotting library for the Python programming language and its numerical mathematics extension NumPy. It provides an object-oriented API for embedding plots into applications.",
            exampleCode: ""
          },
          {
            title: "Basic Plotting",
            text: "Matplotlib allows you to create various types of plots including line plots, bar plots, histograms, and scatter plots.",
            exampleCode: `
              import matplotlib.pyplot as plt
  
              # Sample code for a basic line plot
              x = [1, 2, 3, 4, 5]
              y = [2, 3, 5, 7, 11]
              plt.plot(x, y)
              plt.xlabel('X-axis')
              plt.ylabel('Y-axis')
              plt.title('Basic Line Plot')
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video for an introduction to Matplotlib",
            videoLink: "https://www.youtube.com/watch?v=nzKy9GY12yo"
          }
        ]
      },
      {
        id: 2,
        topicName: "Advanced Plotting Techniques",
        content: [
          {
            title: "Customizing Plots",
            text: "You can customize plots by adjusting colors, styles, and labels to make them more informative and visually appealing.",
            exampleCode: `
              import matplotlib.pyplot as plt
  
              # Sample code for customizing a plot
              x = [1, 2, 3, 4, 5]
              y = [2, 3, 5, 7, 11]
              plt.plot(x, y, color='green', linestyle='--', marker='o')
              plt.xlabel('X-axis')
              plt.ylabel('Y-axis')
              plt.title('Customized Line Plot')
              plt.grid(True)
              plt.show()
            `
          },
          {
            title: "Subplots and Layouts",
            text: "Matplotlib supports creating multiple plots in a single figure with different layouts.",
            exampleCode: `
              import matplotlib.pyplot as plt
  
              # Sample code for subplots
              fig, axs = plt.subplots(2, 2)
              axs[0, 0].plot([1, 2, 3], [1, 4, 9], 'tab:blue')
              axs[0, 1].bar([1, 2, 3], [1, 4, 9], color='tab:orange')
              axs[1, 0].scatter([1, 2, 3], [1, 4, 9], color='tab:green')
              axs[1, 1].hist([1, 2, 3, 1, 2, 3], bins=3, color='tab:red')
  
              for ax in axs.flat:
                  ax.label_outer()
  
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on advanced Matplotlib techniques",
            videoLink: "https://www.youtube.com/watch?v=csXmVBw8cdo"
          }
        ]
      },
      {
        id: 3,
        topicName: "Interactive Visualizations",
        content: [
          {
            title: "Creating Interactive Plots",
            text: "Matplotlib supports interactive plots which can be useful for data exploration.",
            exampleCode: `
              import matplotlib.pyplot as plt
  
              # Sample code for interactive plotting
              from matplotlib.widgets import Slider
  
              fig, ax = plt.subplots()
              plt.subplots_adjust(left=0.25, bottom=0.25)
              t = range(100)
              s = [i**2 for i in t]
              l, = plt.plot(t, s, lw=2)
  
              axcolor = 'lightgoldenrodyellow'
              axamp = plt.axes([0.25, 0.1, 0.65, 0.03], facecolor=axcolor)
              samp = Slider(axamp, 'Scale', 0.1, 10.0, valinit=1)
  
              def update(val):
                  l.set_ydata([i**2 * samp.val for i in t])
                  fig.canvas.draw_idle()
  
              samp.on_changed(update)
              plt.show()
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on creating interactive plots with Matplotlib",
            videoLink: "https://www.youtube.com/watch?v=FBX38xd_SiE"
          }
        ]
      }
    ]
  },
  
  {
    id: 21,
    name: "Big Data with Hadoop",
    description: "Learn how to work with massive datasets using the Hadoop ecosystem.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=VmO0QgPCbZY", // Placeholder link
      websiteLink: {
        title: "Hadoop Documentation",
        link: "https://hadoop.apache.org/docs/"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Hadoop",
        content: [
          {
            title: "What is Hadoop?",
            text: "Hadoop is an open-source software framework designed for distributed storage and processing of large datasets across clusters of computers. It enables the handling of massive amounts of data using scalable, fault-tolerant infrastructure, making it a key component in managing big data.",
            exampleCode: ""
          },
          {
            title: "Hadoop Architecture",
            text: "The core components of Hadoop are the Hadoop Distributed File System (HDFS), which handles data storage, and MapReduce, a programming model used for data processing. HDFS splits large files into blocks and distributes them across multiple machines. MapReduce breaks data processing into two phases: Map (filtering and sorting) and Reduce (aggregation), enabling efficient large-scale data handling.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "Watch this video for an introduction to Hadoop",
            videoLink: "https://www.youtube.com/watch?v=aReuLtY0YMI&t=343s"
          }
        ]
      },
      {
        id: 2,
        topicName: "Working with HDFS",
        content: [
          {
            title: "Basic Commands",
            text: "HDFS is a distributed file system that allows you to store large files and access them across multiple machines. You can interact with HDFS using basic commands like listing directories, uploading files, and downloading files.",
            exampleCode: `
              # List files in HDFS
              hdfs dfs -ls /
    
              # Upload a file to HDFS
              hdfs dfs -put localfile.txt /user/hadoop/
    
              # Download a file from HDFS
              hdfs dfs -get /user/hadoop/localfile.txt localfile.txt
            `
          },
          {
            title: "File Storage and Retrieval",
            text: "In HDFS, data is stored in blocks across multiple machines, with replication to ensure fault tolerance. This allows Hadoop to retrieve data efficiently even if certain machines fail. Understanding block distribution and replication is key to mastering HDFS.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "Watch this video on working with HDFS",
            videoLink: "https://www.youtube.com/watch?v=nRX4_3qf3rc"
          }
        ]
      },
      {
        id: 3,
        topicName: "MapReduce Programming",
        content: [
          {
            title: "Introduction to MapReduce",
            text: "MapReduce is a programming model used to process large datasets in a distributed manner. The Map phase involves breaking down tasks into key-value pairs, and the Reduce phase aggregates these values. This parallel processing enables Hadoop to handle massive datasets efficiently.",
            exampleCode: ""
          },
          {
            title: "Writing a MapReduce Job",
            text: "MapReduce jobs can be written in Java, Python, or other supported languages. The key components are the Mapper, which handles the mapping of data, and the Reducer, which processes and aggregates the mapped data. Below is an example of a simple word count program in Java, which is a common introductory exercise for learning MapReduce.",
            exampleCode: `
              // Sample MapReduce job in Java
              public class WordCount {
                public static class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable> {
                  private final static IntWritable one = new IntWritable(1);
                  private Text word = new Text();
    
                  public void map(Object key, Text value, Context context) throws IOException, InterruptedException {
                    StringTokenizer itr = new StringTokenizer(value.toString());
                    while (itr.hasMoreTokens()) {
                      word.set(itr.nextToken());
                      context.write(word, one);
                    }
                  }
                }
    
                public static class IntSumReducer extends Reducer<Text, IntWritable, Text, IntWritable> {
                  private IntWritable result = new IntWritable();
    
                  public void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
                    int sum = 0;
                    for (IntWritable val : values) {
                      sum += val.get();
                    }
                    result.set(sum);
                    context.write(key, result);
                  }
                }
    
                public static void main(String[] args) throws Exception {
                  Configuration conf = new Configuration();
                  Job job = Job.getInstance(conf, "word count");
                  job.setJarByClass(WordCount.class);
                  job.setMapperClass(TokenizerMapper.class);
                  job.setCombinerClass(IntSumReducer.class);
                  job.setReducerClass(IntSumReducer.class);
                  job.setOutputKeyClass(Text.class);
                  job.setOutputValueClass(IntWritable.class);
                  FileInputFormat.addInputPath(job, new Path(args[0]));
                  FileOutputFormat.setOutputPath(job, new Path(args[1]));
                  System.exit(job.waitForCompletion(true) ? 0 : 1);
                }
              }
            `
          },
          {
            title: "Additional Resources",
            text: "Watch this video on writing MapReduce jobs",
            videoLink: "https://www.youtube.com/watch?v=UJxFZkWoxA8"
          }
        ]
      },
      {
        id: 4,
        topicName: "Advanced Hadoop Ecosystem",
        content: [
          {
            title: "Hadoop Ecosystem Components",
            text: "Hadoop's ecosystem includes a variety of tools designed to enhance data processing capabilities. Hive is used for data warehousing, allowing you to query data stored in HDFS using SQL-like syntax. Pig is a scripting tool for processing large datasets, while HBase provides NoSQL storage for real-time access to large volumes of data.",
            exampleCode: ""
          },
          {
            title: "Integrating Hadoop with Other Tools",
            text: "Hadoop can be integrated with other tools such as Apache Spark, which provides in-memory data processing for faster computations, and Apache Flume, which ingests large amounts of data from multiple sources. These integrations enhance Hadoop's data processing efficiency and expand its capabilities.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "Watch this video on advanced Hadoop ecosystem components",
            videoLink: "https://www.youtube.com/watch?v=eA4yYxLQuWU"
          }
        ]
      }
    ]
  },
  
  
  {
    id: 22,
    name: "Data Cleaning Techniques",
    description: "Master the art of cleaning messy datasets for accurate analysis.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=zTaMGQm-T5g",
      websiteLink: {
        title: "Data Cleaning Guide",
        link: "https://towardsdatascience.com/a-guide-to-data-cleaning-3e926be48a43"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Data Cleaning",
        content: [
          {
            title: "Why Data Cleaning is Important",
            text: "Data cleaning is a fundamental step in the data analysis pipeline. It involves identifying and correcting errors or inconsistencies in data to improve its quality. Clean data ensures more reliable results, better decision-making, and more accurate predictions. Inaccurate or messy data can lead to misleading insights and poor outcomes.",
            exampleCode: ""
          },
          {
            title: "Common Data Issues",
            text: "Common issues in datasets include missing values, duplicates, inconsistencies, and outliers. Missing values occur when no data is available for a particular record, which can skew analysis if not handled properly. Duplicates can inflate the data and lead to incorrect results. Inconsistencies arise when data entries differ in format or structure. Understanding these issues helps in selecting the right cleaning techniques.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "For a deeper understanding of the importance of data cleaning and best practices, watch this video which provides practical insights and examples.",
            videoLink: "https://www.youtube.com/watch?v=0l_SlOq34Ug"
          }
        ]
      },
      {
        id: 2,
        topicName: "Handling Missing Values",
        content: [
          {
            title: "Identifying Missing Values",
            text: "Detecting missing values in a dataset is crucial for proper data cleaning. Various methods can be used to identify these missing values, such as checking for null or NaN entries. Tools like Pandas in Python offer built-in functions to help with this task.",
            exampleCode: `
              import pandas as pd
  
              # Load data
              df = pd.read_csv('data.csv')
  
              # Check for missing values
              missing_values = df.isnull().sum()
              print(missing_values)
            `
          },
          {
            title: "Strategies for Imputation",
            text: "Once missing values are identified, you need to decide how to handle them. Imputation involves replacing missing values with substitute values, such as the mean, median, or mode of the column. This helps in preserving the dataset's integrity without losing too much information.",
            exampleCode: `
              from sklearn.impute import SimpleImputer
  
              # Impute missing values
              imputer = SimpleImputer(strategy='mean')
              df_imputed = imputer.fit_transform(df)
              `
          },
          {
            title: "Additional Resources",
            text: "Learn more about handling missing values and techniques for imputation by watching this informative video.",
            videoLink: "https://www.youtube.com/watch?v=uDr67HBIPz8"
          }
        ]
      },
      {
        id: 3,
        topicName: "Removing Duplicates",
        content: [
          {
            title: "Identifying Duplicates",
            text: "Duplicate records in a dataset can lead to overestimation of trends and inaccuracies in analysis. Identifying duplicates involves checking for identical records based on one or more columns. Techniques include using functions that compare rows and flag duplicates.",
            exampleCode: `
              # Identify duplicates
              duplicates = df.duplicated()
              print(df[duplicates])
            `
          },
          {
            title: "Removing Duplicates",
            text: "Once duplicates are identified, they need to be removed to maintain data quality. Removing duplicates involves filtering out the redundant rows while keeping the original or relevant ones. This step ensures that each record is unique and contributes accurately to the analysis.",
            exampleCode: `
              # Remove duplicates
              df_cleaned = df.drop_duplicates()
              `
          },
          {
            title: "Additional Resources",
            text: "For practical examples and techniques on removing duplicates, watch this video which demonstrates effective methods for cleaning your data.",
            videoLink: "https://www.youtube.com/watch?v=e5oOvU0VWBQ"
          }
        ]
      },
      {
        id: 4,
        topicName: "Data Consistency and Validation",
        content: [
          {
            title: "Ensuring Consistency",
            text: "Maintaining data consistency involves ensuring that data across different datasets or records follows the same format and rules. Consistent data is crucial for accurate analysis and reporting. Techniques include standardizing formats and verifying that related data elements are synchronized.",
            exampleCode: ""
          },
          {
            title: "Data Validation Techniques",
            text: "Data validation ensures that data meets specific criteria or constraints before it is used in analysis. Validation techniques include checking data types, ranges, and business rules to ensure data correctness. Implementing validation rules helps prevent errors and ensures data integrity.",
            exampleCode: `
              # Example of data validation
              def validate_data(value):
                  if value > 0:
                      return True
                  return False
  
              df['valid'] = df['value'].apply(validate_data)
              `
          },
          {
            title: "Additional Resources",
            text: "Watch this video to understand techniques for ensuring data consistency and validating data effectively.",
            videoLink: "https://www.youtube.com/watch?v=zo4GMXoRkFA"
          }
        ]
      }
    ]
  },
  
  
  {
    id: 23,
    name: "Deep Learning with TensorFlow",
    description: "Dive into deep learning concepts using TensorFlow and neural networks.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
      websiteLink: {
        title: "TensorFlow Tutorials",
        link: "https://www.tensorflow.org/tutorials"
      }
    },
    topics: [
      {
        id: 1,
        topicName: "Introduction to Deep Learning",
        content: [
          {
            title: "Understanding Deep Learning",
            text: "Deep learning is a specialized area of machine learning that uses neural networks with many layers to model complex patterns in data. It has become increasingly important for tasks such as image and speech recognition, natural language processing, and more.",
            exampleCode: ""
          },
          {
            title: "Basics of Neural Networks",
            text: "Neural networks are computational models inspired by the human brain's architecture. They consist of layers of interconnected nodes, or 'neurons', where each connection represents a weight that adjusts during training. Basic neural networks include input, hidden, and output layers.",
            exampleCode: ""
          },
          {
            title: "Additional Resources",
            text: "Watch this introductory video on deep learning to get a foundational understanding of the topic.",
            videoLink: "https://www.youtube.com/watch?v=tPYj3fFJGjk"
          }
        ]
      },
      {
        id: 2,
        topicName: "Building Neural Networks with TensorFlow",
        content: [
          {
            title: "Setting Up TensorFlow",
            text: "TensorFlow is an open-source library developed by Google for numerical computation and machine learning. To get started with TensorFlow, you'll need to install it and set up your development environment.",
            exampleCode: `
              # Install TensorFlow
              !pip install tensorflow
            `
          },
          {
            title: "Creating a Simple Neural Network",
            text: "Using TensorFlow, you can build neural networks to solve various problems. A simple neural network typically consists of one or more dense (fully connected) layers. You'll define the architecture, compile the model, and then train it using your data.",
            exampleCode: `
              import tensorflow as tf
              from tensorflow.keras.models import Sequential
              from tensorflow.keras.layers import Dense
  
              # Define a simple neural network
              model = Sequential([
                Dense(64, activation='relu', input_shape=(784,)),
                Dense(10, activation='softmax')
              ])
  
              # Compile the model
              model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])
              `
          },
          {
            title: "Additional Resources",
            text: "Watch this tutorial on building neural networks with TensorFlow for a hands-on approach to creating models.",
            videoLink: "https://www.youtube.com/watch?v=w2b07L6bbd8"
          }
        ]
      },
      {
        id: 3,
        topicName: "Training and Evaluating Models",
        content: [
          {
            title: "Training Neural Networks",
            text: "Training involves adjusting the weights of the neural network using a dataset. You'll split your data into training and validation sets, then use the training set to adjust weights through backpropagation and the validation set to monitor performance.",
            exampleCode: `
              # Train the model
              history = model.fit(X_train, y_train, epochs=5, validation_split=0.2)
            `
          },
          {
            title: "Evaluating Model Performance",
            text: "After training, evaluate the model's performance on a test set to determine its accuracy and generalization capabilities. Metrics such as accuracy, precision, and recall are commonly used to assess model performance.",
            exampleCode: `
              # Evaluate the model
              test_loss, test_acc = model.evaluate(X_test, y_test)
              print(f'Test accuracy: {test_acc}')
            `
          },
          {
            title: "Additional Resources",
            text: "Explore this video for detailed insights into training and evaluating machine learning models.",
            videoLink: "https://www.youtube.com/watch?v=2C8hSa8hFq8"
          }
        ]
      },
      {
        id: 4,
        topicName: "Advanced Topics in Deep Learning",
        content: [
          {
            title: "Convolutional Neural Networks (CNNs)",
            text: "CNNs are designed for processing structured grid data like images. They use convolutional layers to automatically and adaptively learn spatial hierarchies of features from input images, making them powerful for tasks like image classification and object detection.",
            exampleCode: `
              from tensorflow.keras.layers import Conv2D, MaxPooling2D
  
              # Define a CNN
              cnn_model = Sequential([
                Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
                MaxPooling2D(pool_size=(2, 2)),
                Flatten(),
                Dense(128, activation='relu'),
                Dense(10, activation='softmax')
              ])
              `
          },
          {
            title: "Recurrent Neural Networks (RNNs)",
            text: "RNNs are suitable for sequence data, like time series or text. They have loops to maintain information from previous inputs, which makes them effective for tasks such as language modeling and sequence prediction.",
            exampleCode: `
              from tensorflow.keras.layers import LSTM
  
              # Define an RNN
              rnn_model = Sequential([
                LSTM(50, activation='relu', input_shape=(10, 1)),
                Dense(1)
              ])
              `
          },
          {
            title: "Additional Resources",
            text: "Learn more about advanced deep learning techniques by watching this video on CNNs and RNNs.",
            videoLink: "https://www.youtube.com/watch?v=_e8F_W0T2o4"
          }
        ]
      }
    ]
  },
  
  {
    id: 24,
    name: "Natural Language Processing",
    description:
      "Explore the basics of Natural Language Processing (NLP) and how it enables computers to understand and generate human language.",
    track: "Data Science",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=8u73bvm7pQI",
      websiteLink: {
        title: "NLP with Python",
        link: "https://www.nltk.org/book/",
      },
    },
    topics: [
      // TOPIC 1: Introduction to NLP
      {
        id: 1,
        topicName: "Introduction to NLP",
        content: [
          {
            title: "What is NLP?",
            text: "Natural Language Processing (NLP) is a field of artificial intelligence that focuses on the interaction between computers and human (natural) languages. It involves using computational techniques to analyze and generate human language data.",
          },
          {
            title: "Applications of NLP",
            text: "NLP is used in a variety of applications such as sentiment analysis, machine translation, chatbots, and text summarization. It powers voice assistants like Siri and Alexa, and search engines like Google rely on it to understand and process user queries.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Introduction to NLP",
            videoLink: "https://www.youtube.com/watch?v=xvqsFTUsOmc",
          },
        ],
      },
      // TOPIC 2: Tokenization
      {
        id: 2,
        topicName: "Tokenization",
        content: [
          {
            title: "What is Tokenization?",
            text: "Tokenization is the process of breaking down text into smaller units called tokens. These tokens can be words, sentences, or even characters. It is a fundamental step in text preprocessing.",
          },
          {
            title: "Word vs Sentence Tokenization",
            text: "In word tokenization, text is split into individual words, whereas in sentence tokenization, the text is split into sentences. These are crucial steps for analyzing and understanding the structure of language data.",
            exampleCode: `
            // Example using NLTK in Python for word tokenization
            from nltk.tokenize import word_tokenize
  
            sentence = "Natural Language Processing is exciting!"
            tokens = word_tokenize(sentence)
            print(tokens)  // Output: ['Natural', 'Language', 'Processing', 'is', 'exciting', '!']
            `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Tokenization",
            videoLink: "https://www.youtube.com/watch?v=g2QOL6oD0E8",
          },
        ],
      },
      // TOPIC 3: Stemming and Lemmatization
      {
        id: 3,
        topicName: "Stemming and Lemmatization",
        content: [
          {
            title: "Understanding Stemming",
            text: "Stemming is the process of reducing words to their base or root form. For example, 'running' becomes 'run.' However, it might produce non-words like 'happi' from 'happiness'.",
          },
          {
            title: "Understanding Lemmatization",
            text: "Lemmatization is similar to stemming but ensures that the root word is a valid word in the language. It considers the context and reduces words to their dictionary form, such as 'better' becoming 'good'.",
            exampleCode: `
            // Example using NLTK in Python for Lemmatization
            from nltk.stem import WordNetLemmatizer
  
            lemmatizer = WordNetLemmatizer()
            print(lemmatizer.lemmatize("better", pos="a"))  // Output: 'good'
            `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Stemming and Lemmatization",
            videoLink: "https://www.youtube.com/watch?v=TbNymweHW4E",
          },
        ],
      },
      // TOPIC 4: Part-of-Speech (POS) Tagging
      {
        id: 4,
        topicName: "Part-of-Speech (POS) Tagging",
        content: [
          {
            title: "What is POS Tagging?",
            text: "POS Tagging is the process of assigning parts of speech, such as nouns, verbs, and adjectives, to each word in a sentence. This helps in understanding the grammatical structure of the text.",
          },
          {
            title: "How POS Tagging Works",
            text: "POS Tagging uses algorithms to label words based on their definition and context. It is used in various NLP applications such as named entity recognition and syntactic parsing.",
            exampleCode: `
            // Example using NLTK in Python for POS tagging
            import nltk
            nltk.download('averaged_perceptron_tagger')
  
            sentence = "NLP is fascinating!"
            words = nltk.word_tokenize(sentence)
            pos_tags = nltk.pos_tag(words)
            print(pos_tags)  // Output: [('NLP', 'NNP'), ('is', 'VBZ'), ('fascinating', 'VBG'), ('!', '.')]
            `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on POS Tagging",
            videoLink: "https://www.youtube.com/watch?v=M9Itm95JzL0",
          },
        ],
      },
      // TOPIC 5: Named Entity Recognition (NER)
      {
        id: 5,
        topicName: "Named Entity Recognition (NER)",
        content: [
          {
            title: "What is NER?",
            text: "Named Entity Recognition is a technique used to locate and classify entities such as names, organizations, locations, dates, and more in text. It helps in structuring and understanding large datasets.",
          },
          {
            title: "Examples of NER",
            text: "For example, in the sentence 'John Doe works at Google,' NER would identify 'John Doe' as a person and 'Google' as an organization.",
            exampleCode: `
            // Example using SpaCy in Python for NER
            import spacy
  
            nlp = spacy.load("en_core_web_sm")
            doc = nlp("Google is a tech company based in California.")
            for ent in doc.ents:
              print(ent.text, ent.label_)  // Output: ('Google', 'ORG'), ('California', 'GPE')
            `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on NER",
            videoLink: "https://www.youtube.com/watch?v=A3EjU9pFO7E",
          },
        ],
      },
      // TOPIC 6: Sentiment Analysis
      {
        id: 6,
        topicName: "Sentiment Analysis",
        content: [
          {
            title: "Understanding Sentiment Analysis",
            text: "Sentiment Analysis is the process of determining whether a piece of text is positive, negative, or neutral. It is widely used in social media monitoring, customer feedback, and market research.",
          },
          {
            title: "How Sentiment Analysis Works",
            text: "Sentiment Analysis involves preprocessing text, tokenizing, and then using a model (such as a machine learning or deep learning model) to classify the text's sentiment. Tools like VADER in Python can be used for simple sentiment analysis tasks.",
            exampleCode: `
            // Example using NLTK's VADER for Sentiment Analysis
            from nltk.sentiment.vader import SentimentIntensityAnalyzer
  
            sid = SentimentIntensityAnalyzer()
            sentence = "I love NLP!"
            print(sid.polarity_scores(sentence))  // Output: {'neg': 0.0, 'neu': 0.3, 'pos': 0.7, 'compound': 0.6369}
            `,
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Sentiment Analysis",
            videoLink: "https://www.youtube.com/watch?v=O5Q7PzWTmeI",
          },
        ],
      },
    ],
  },
  

  
  {
    id: 25,
    name: "Introduction to Cybersecurity",
    description:
      "Learn the fundamentals of cybersecurity and how to protect systems from attacks.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=JlZCgDPGf6s",
      websiteLink: {
        title: "Introduction to Cybersecurity by Cisco",
        link: "https://www.cisco.com/c/en/us/products/security/what-is-cybersecurity.html",
      },
    },
    topics: [
      // TOPIC 1: What is Cybersecurity?
      {
        id: 1,
        topicName: "What is Cybersecurity?",
        content: [
          {
            title: "Definition of Cybersecurity",
            text: "Cybersecurity refers to the practice of protecting networks, systems, and programs from digital attacks. These cyberattacks typically aim to access, change, or destroy sensitive information, extort money from users, or disrupt normal business processes.",
          },
          {
            title: "Importance of Cybersecurity",
            text: "With increasing amounts of sensitive data stored online, cybersecurity is crucial to protecting personal information, preventing identity theft, and ensuring data integrity. It also helps businesses avoid costly data breaches and ensures trust with customers.",
          },
          {
            title: "Additional Resources",
            text: "Check out this video on Cybersecurity basics",
            videoLink: "https://www.youtube.com/watch?v=2Tt-sS28v8g",
          },
        ],
      },
      // TOPIC 2: Types of Cyber Attacks
      {
        id: 2,
        topicName: "Types of Cyber Attacks",
        content: [
          {
            title: "Common Types of Cyber Attacks",
            text: "Cyberattacks come in various forms, including phishing, malware, ransomware, denial-of-service (DoS), and man-in-the-middle attacks. Each method aims to compromise security and access confidential data.",
          },
          {
            title: "Phishing Attacks",
            text: "Phishing involves sending fraudulent communications that appear to come from a trusted source. It is usually performed via email and aims to steal sensitive data like login credentials or credit card numbers.",
          },
          {
            title: "Malware",
            text: "Malware is software intentionally designed to cause damage to a computer, server, or network. It includes viruses, worms, and trojan horses, which can spread rapidly and cause significant harm.",
            exampleCode: `
            // Basic example of malware code (not executable)
            function malware() {
              while(true) {
                // Infinite loop to consume system resources
                console.log('System crash...');
              }
            }
            malware();
            `,
          },
          {
            title: "Additional Resources",
            text: "Explore more about different types of cyberattacks",
            videoLink: "https://www.youtube.com/watch?v=OVON_Sks03o",
          },
        ],
      },
      // TOPIC 3: Basic Security Measures
      {
        id: 3,
        topicName: "Basic Security Measures",
        content: [
          {
            title: "Strong Passwords",
            text: "Using strong and unique passwords for each account is a fundamental step in protecting your digital life. Passwords should contain a mix of letters, numbers, and special characters and be at least 12 characters long.",
          },
          {
            title: "Two-Factor Authentication (2FA)",
            text: "Two-factor authentication adds an extra layer of security to the login process by requiring two forms of identification: something you know (your password) and something you have (e.g., a phone or authentication app).",
          },
          {
            title: "Firewalls",
            text: "A firewall is a network security device that monitors and controls incoming and outgoing network traffic. It establishes a barrier between a trusted internal network and untrusted external networks.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about security measures in this video",
            videoLink: "https://www.youtube.com/watch?v=Z1qQWWIJlY0",
          },
        ],
      },
      // TOPIC 4: Encryption and Data Protection
      {
        id: 4,
        topicName: "Encryption and Data Protection",
        content: [
          {
            title: "What is Encryption?",
            text: "Encryption is the process of converting data into a code to prevent unauthorized access. It ensures that sensitive data like emails, messages, and online transactions are protected from interception by malicious actors.",
          },
          {
            title: "Symmetric vs Asymmetric Encryption",
            text: "Symmetric encryption uses the same key to encrypt and decrypt data, while asymmetric encryption uses a pair of public and private keys. Asymmetric encryption is commonly used in secure communications like SSL and TLS protocols.",
            exampleCode: `
            // Example of basic encryption using Python
            from cryptography.fernet import Fernet
  
            key = Fernet.generate_key()  // Generate key
            cipher_suite = Fernet(key)
            text = "Sensitive Data"
            encrypted_text = cipher_suite.encrypt(text.encode())  // Encrypt data
            print(encrypted_text)
            `,
          },
          {
            title: "Additional Resources",
            text: "Learn more about encryption in this video",
            videoLink: "https://www.youtube.com/watch?v=ZghMPWGXexs",
          },
        ],
      },
      // TOPIC 5: Social Engineering
      {
        id: 5,
        topicName: "Social Engineering",
        content: [
          {
            title: "What is Social Engineering?",
            text: "Social engineering is the art of manipulating people into giving up confidential information. Attackers often use psychological tricks to convince individuals to break standard security protocols.",
          },
          {
            title: "Examples of Social Engineering",
            text: "Common examples include pretexting (pretending to be someone else), baiting (offering something enticing to get information), and tailgating (following someone into a secure area without proper credentials).",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on Social Engineering techniques",
            videoLink: "https://www.youtube.com/watch?v=hhxrwx2qL8o",
          },
        ],
      },
      // TOPIC 6: Incident Response and Recovery
      {
        id: 6,
        topicName: "Incident Response and Recovery",
        content: [
          {
            title: "What is Incident Response?",
            text: "Incident response involves identifying, managing, and recovering from a security breach. A well-planned response can minimize damage and ensure that normal operations resume quickly.",
          },
          {
            title: "Steps in Incident Response",
            text: "The incident response process typically includes preparation, identification, containment, eradication, recovery, and lessons learned. It's essential for organizations to have an incident response plan in place.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about incident response strategies",
            videoLink: "https://www.youtube.com/watch?v=qD2AABoOLpY",
          },
        ],
      },
    ],
  },
  

  {
    id: 26,
    name: "Network Security Basics",
    description:
      "Understand the principles of securing network communications.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=Zj2QpXj7Gq4",
      websiteLink: {
        title: "Network Security Fundamentals by Cisco",
        link: "https://www.cisco.com/c/en/us/products/security/what-is-network-security.html",
      },
    },
    topics: [
      // TOPIC 1: What is Network Security?
      {
        id: 1,
        topicName: "What is Network Security?",
        content: [
          {
            title: "Definition of Network Security",
            text: "Network security involves practices, tools, and protocols used to prevent and monitor unauthorized access, misuse, or modification of a computer network and its resources. It aims to create a secure environment for communication and data transfer.",
          },
          {
            title: "Why Network Security is Important",
            text: "In today’s connected world, safeguarding networks is crucial to ensure data integrity, protect against cyberattacks, and maintain business continuity. Securing both internal and external communications is vital to preventing data breaches.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video to dive into the basics of network security",
            videoLink: "https://www.youtube.com/watch?v=csGafph2gQ8",
          },
        ],
      },
      // TOPIC 2: Types of Network Security Threats
      {
        id: 2,
        topicName: "Types of Network Security Threats",
        content: [
          {
            title: "Common Network Security Threats",
            text: "The most common threats include viruses, worms, Trojan horses, DoS (Denial-of-Service) attacks, man-in-the-middle attacks, and SQL injection. These threats aim to steal, damage, or disrupt data and services on a network.",
          },
          {
            title: "Denial-of-Service (DoS) Attacks",
            text: "A DoS attack aims to overwhelm a network or website with traffic, rendering it unavailable to users. These attacks can cripple an organization's ability to operate efficiently.",
          },
          {
            title: "Man-in-the-Middle Attack",
            text: "This occurs when an attacker intercepts communication between two parties, often in real-time, to steal information or inject malicious content. Common examples include intercepting login credentials over unsecured Wi-Fi.",
          },
          {
            title: "Additional Resources",
            text: "Explore network security threats and how to defend against them",
            videoLink: "https://www.youtube.com/watch?v=UiIbcN9bzlU",
          },
        ],
      },
      // TOPIC 3: Firewalls and Their Role
      {
        id: 3,
        topicName: "Firewalls and Their Role",
        content: [
          {
            title: "What is a Firewall?",
            text: "A firewall is a security device—either software or hardware—that monitors and controls incoming and outgoing network traffic based on predetermined security rules. It acts as a barrier between a trusted internal network and untrusted external networks.",
          },
          {
            title: "Types of Firewalls",
            text: "There are several types of firewalls: packet-filtering firewalls, stateful inspection firewalls, proxy firewalls, and next-generation firewalls. Each type offers a different level of security and inspection.",
          },
          {
            title: "How Firewalls Protect Networks",
            text: "Firewalls prevent unauthorized access, mitigate potential threats, and are often the first line of defense against cyberattacks. By analyzing data packets and enforcing security policies, they ensure that only legitimate traffic passes through.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on how firewalls work in network security",
            videoLink: "https://www.youtube.com/watch?v=csOZ9-O5B9I",
          },
        ],
      },
      // TOPIC 4: Encryption in Network Security
      {
        id: 4,
        topicName: "Encryption in Network Security",
        content: [
          {
            title: "What is Encryption?",
            text: "Encryption is the process of encoding information in such a way that only authorized parties can access it. In network security, encryption protects sensitive data as it travels across a network, preventing unauthorized access and eavesdropping.",
          },
          {
            title: "End-to-End Encryption",
            text: "End-to-end encryption ensures that data is encrypted at the sender’s device and only decrypted at the recipient’s device, making it unreadable to anyone in between. This is used in messaging apps, online transactions, and secure communications.",
            exampleCode: `
            // Simple encryption using Python (not executable)
            from cryptography.fernet import Fernet
  
            key = Fernet.generate_key()  // Generate a key
            cipher_suite = Fernet(key)
            message = "Secure Network Data"
            encrypted_message = cipher_suite.encrypt(message.encode())  // Encrypt the message
            print(encrypted_message)
            `,
          },
          {
            title: "Additional Resources",
            text: "Learn more about encryption techniques for securing networks",
            videoLink: "https://www.youtube.com/watch?v=G6SeV4IvQ1E",
          },
        ],
      },
      // TOPIC 5: Virtual Private Networks (VPNs)
      {
        id: 5,
        topicName: "Virtual Private Networks (VPNs)",
        content: [
          {
            title: "What is a VPN?",
            text: "A Virtual Private Network (VPN) creates a secure connection over a less secure network, such as the internet. VPNs encrypt your data, ensuring privacy and protection from cybercriminals as it passes through public networks.",
          },
          {
            title: "How VPNs Work",
            text: "VPNs work by routing your device's internet connection through the VPN's private server rather than your ISP, masking your IP address and encrypting data transferred between your device and the network.",
          },
          {
            title: "Advantages of VPNs",
            text: "VPNs help protect users when browsing on public Wi-Fi, ensure anonymous web browsing, and allow access to geo-restricted content. They are also widely used by businesses for secure remote work connections.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video to learn more about VPNs and their role in security",
            videoLink: "https://www.youtube.com/watch?v=od-vY6W6wS8",
          },
        ],
      },
      // TOPIC 6: Intrusion Detection Systems (IDS)
      {
        id: 6,
        topicName: "Intrusion Detection Systems (IDS)",
        content: [
          {
            title: "What is an IDS?",
            text: "An Intrusion Detection System (IDS) monitors a network for malicious activities or policy violations. Once an attack or breach is detected, an alert is generated to allow security personnel to take action.",
          },
          {
            title: "Types of IDS",
            text: "There are two primary types of IDS: network-based IDS (NIDS), which monitors network traffic, and host-based IDS (HIDS), which monitors individual devices for signs of intrusion.",
          },
          {
            title: "How IDS Improves Security",
            text: "An IDS helps identify potential threats early, allowing administrators to respond before significant damage is done. It works in conjunction with other security tools like firewalls and antivirus software.",
          },
          {
            title: "Additional Resources",
            text: "Learn about IDS and how it helps in network security",
            videoLink: "https://www.youtube.com/watch?v=Q4oHAYm-UBY",
          },
        ],
      },
    ],
  },
  
  {
    id: 27,
    name: "Ethical Hacking",
    description:
      "Learn the tools and techniques used in ethical hacking to identify system vulnerabilities.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=H17LY6FZdvE",
      websiteLink: {
        title: "Ethical Hacking Basics by EC-Council",
        link: "https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/",
      },
    },
    topics: [
      // TOPIC 1: What is Ethical Hacking?
      {
        id: 1,
        topicName: "What is Ethical Hacking?",
        content: [
          {
            title: "Definition of Ethical Hacking",
            text: "Ethical hacking is the authorized practice of bypassing system security to identify potential data breaches and threats in a network. The aim is to improve the security of the system by finding vulnerabilities before malicious attackers do.",
          },
          {
            title: "Role of an Ethical Hacker",
            text: "An ethical hacker, also known as a white-hat hacker, uses the same tools and techniques as a malicious hacker, but with permission and within legal limits to safeguard systems.",
          },
          {
            title: "Importance of Ethical Hacking",
            text: "Ethical hacking helps organizations protect their data and ensure that their systems are safe from cybercriminals by identifying vulnerabilities and providing solutions.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video for a quick overview of ethical hacking",
            videoLink: "https://www.youtube.com/watch?v=4Wt9wts4ISY",
          },
        ],
      },
      // TOPIC 2: Types of Hacking
      {
        id: 2,
        topicName: "Types of Hacking",
        content: [
          {
            title: "White Hat Hacking",
            text: "White-hat hackers are ethical hackers who work with organizations to identify and fix security vulnerabilities. They follow strict rules and legal guidelines in their hacking activities.",
          },
          {
            title: "Black Hat Hacking",
            text: "Black-hat hackers are malicious attackers who exploit vulnerabilities for personal gain. Their hacking activities are illegal and harmful.",
          },
          {
            title: "Gray Hat Hacking",
            text: "Gray-hat hackers fall between white-hat and black-hat hacking. While they may not have malicious intent, they often find vulnerabilities without permission, sometimes offering to fix them for a fee.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about different types of hackers",
            videoLink: "https://www.youtube.com/watch?v=UGQQqqv5AAc",
          },
        ],
      },
      // TOPIC 3: Ethical Hacking Tools and Techniques
      {
        id: 3,
        topicName: "Ethical Hacking Tools and Techniques",
        content: [
          {
            title: "Popular Ethical Hacking Tools",
            text: "Common tools include Nmap, Metasploit, Wireshark, and Burp Suite. These tools help ethical hackers scan networks, find vulnerabilities, capture network packets, and conduct penetration testing.",
          },
          {
            title: "Penetration Testing",
            text: "Penetration testing (pentesting) involves simulating cyberattacks to identify weaknesses in a system's defenses. This helps organizations understand potential risks and how to mitigate them.",
          },
          {
            title: "Social Engineering",
            text: "Social engineering involves manipulating people into divulging confidential information. Ethical hackers use this technique to test human vulnerabilities in an organization's security system.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on how ethical hackers use various tools",
            videoLink: "https://www.youtube.com/watch?v=OLyNEPDP9q0",
          },
        ],
      },
      // TOPIC 4: Stages of Ethical Hacking
      {
        id: 4,
        topicName: "Stages of Ethical Hacking",
        content: [
          {
            title: "Reconnaissance",
            text: "The first stage of ethical hacking involves gathering information about the target system or network. This is often done using open-source intelligence (OSINT) to understand the system's architecture and vulnerabilities.",
          },
          {
            title: "Scanning",
            text: "Once reconnaissance is complete, the next step is scanning. Tools like Nmap and Wireshark are used to scan the network for open ports, services, and vulnerabilities.",
          },
          {
            title: "Gaining Access",
            text: "The ethical hacker attempts to exploit vulnerabilities to gain unauthorized access to the system. This is where penetration testing comes into play.",
          },
          {
            title: "Maintaining Access",
            text: "Once access is gained, the ethical hacker ensures continued control over the system to gather further data, but without causing harm. This helps in understanding long-term vulnerabilities.",
          },
          {
            title: "Covering Tracks",
            text: "Finally, ethical hackers mimic malicious attackers by covering their tracks and erasing logs to show how attackers could hide their presence.",
          },
          {
            title: "Additional Resources",
            text: "Learn about the stages of ethical hacking in this video",
            videoLink: "https://www.youtube.com/watch?v=zuJjDLOKNJY",
          },
        ],
      },
      // TOPIC 5: Legal and Ethical Considerations
      {
        id: 5,
        topicName: "Legal and Ethical Considerations",
        content: [
          {
            title: "Why Ethics Matter",
            text: "Ethical hackers must always work within the bounds of the law. Obtaining consent from the target organization is critical to avoid legal repercussions.",
          },
          {
            title: "The CFAA and GDPR",
            text: "The Computer Fraud and Abuse Act (CFAA) in the U.S. and the General Data Protection Regulation (GDPR) in Europe set strict guidelines for data security and privacy. Ethical hackers must comply with these regulations.",
          },
          {
            title: "Bug Bounty Programs",
            text: "Many companies run bug bounty programs, offering rewards to ethical hackers who find and report vulnerabilities. This encourages a collaborative approach to cybersecurity.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on the legalities of ethical hacking",
            videoLink: "https://www.youtube.com/watch?v=sX7rEdU8xiw",
          },
        ],
      },
    ],
  },
  
  {
    id: 28,
    name: "Cryptography Essentials",
    description:
      "Understand cryptographic methods for securing data and communications.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=iVfw8cHiZ2A",
      websiteLink: {
        title: "Cryptography Overview by Stanford",
        link: "https://crypto.stanford.edu/",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Cryptography
      {
        id: 1,
        topicName: "Introduction to Cryptography",
        content: [
          {
            title: "What is Cryptography?",
            text: "Cryptography is the practice of securing communication and information through the use of codes, ensuring that only the intended recipients can access the data. It is a key component in cybersecurity, protecting sensitive information from unauthorized access.",
          },
          {
            title: "History of Cryptography",
            text: "Cryptography has been used throughout history, from ancient ciphers to modern encryption techniques. The course begins with an overview of its historical development, including the Caesar cipher and the Enigma machine.",
          },
          {
            title: "Applications of Cryptography",
            text: "Cryptography is essential in securing emails, financial transactions, and confidential communications. Its use in technologies such as SSL/TLS and VPNs ensures the safety of online data transmission.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video for an overview of cryptography",
            videoLink: "https://www.youtube.com/watch?v=jmIcxKXZ2YE",
          },
        ],
      },
      // TOPIC 2: Symmetric Encryption
      {
        id: 2,
        topicName: "Symmetric Encryption",
        content: [
          {
            title: "How Symmetric Encryption Works",
            text: "Symmetric encryption involves using the same key for both encryption and decryption. Popular algorithms include the Data Encryption Standard (DES) and the Advanced Encryption Standard (AES).",
          },
          {
            title: "Block Ciphers vs. Stream Ciphers",
            text: "Block ciphers encrypt data in fixed-size blocks, while stream ciphers encrypt data one bit or byte at a time. Both have specific use cases depending on the data size and application.",
          },
          {
            title: "Common Symmetric Encryption Algorithms",
            text: "AES (Advanced Encryption Standard) is the most widely used symmetric encryption algorithm, securing everything from online transactions to data storage.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about symmetric encryption in this video",
            videoLink: "https://www.youtube.com/watch?v=vcT_7mnviXw",
          },
        ],
      },
      // TOPIC 3: Asymmetric Encryption
      {
        id: 3,
        topicName: "Asymmetric Encryption",
        content: [
          {
            title: "How Asymmetric Encryption Works",
            text: "Asymmetric encryption uses two keys: a public key for encryption and a private key for decryption. This method is commonly used in secure communication systems, such as SSL certificates.",
          },
          {
            title: "Public and Private Keys",
            text: "In asymmetric encryption, the public key can be freely shared to encrypt messages, while the private key is kept secret for decrypting them. RSA (Rivest-Shamir-Adleman) is the most well-known algorithm.",
          },
          {
            title: "Applications of Asymmetric Encryption",
            text: "Asymmetric encryption is used in digital signatures, email encryption, and securing web traffic (e.g., HTTPS). It ensures data authenticity and integrity.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video explaining public and private keys",
            videoLink: "https://www.youtube.com/watch?v=AQDCe585Lnc",
          },
        ],
      },
      // TOPIC 4: Hashing Functions
      {
        id: 4,
        topicName: "Hashing Functions",
        content: [
          {
            title: "What is Hashing?",
            text: "Hashing is the process of converting data into a fixed-length string of characters, which is typically a hash code. Hash functions are commonly used in data integrity checks and password storage.",
          },
          {
            title: "MD5, SHA-256, and Other Hashing Algorithms",
            text: "Common hashing algorithms include MD5, SHA-1, and SHA-256. While MD5 and SHA-1 have vulnerabilities, SHA-256 remains widely used in blockchain and security protocols.",
          },
          {
            title: "Uses of Hashing",
            text: "Hashing is used in password management, digital signatures, and verifying data integrity. Hashing ensures that even small changes in input result in significantly different hash outputs.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about SHA-256 and its uses",
            videoLink: "https://www.youtube.com/watch?v=fYjYY47eCyI",
          },
        ],
      },
      // TOPIC 5: Digital Signatures and Certificates
      {
        id: 5,
        topicName: "Digital Signatures and Certificates",
        content: [
          {
            title: "How Digital Signatures Work",
            text: "Digital signatures are a form of asymmetric cryptography that provide data integrity, authentication, and non-repudiation. They use the sender's private key to sign messages and the recipient’s public key to verify them.",
          },
          {
            title: "Role of Digital Certificates",
            text: "Digital certificates authenticate the identity of entities in online transactions. They are issued by certificate authorities (CAs) to ensure the legitimacy of public keys.",
          },
          {
            title: "Applications in SSL/TLS",
            text: "Digital certificates are used in SSL/TLS to secure web traffic, ensuring the integrity and authenticity of websites.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on digital certificates",
            videoLink: "https://www.youtube.com/watch?v=nbpFVSRZTfo",
          },
        ],
      },
      // TOPIC 6: Future of Cryptography - Quantum Cryptography
      {
        id: 6,
        topicName: "Future of Cryptography - Quantum Cryptography",
        content: [
          {
            title: "What is Quantum Cryptography?",
            text: "Quantum cryptography leverages the principles of quantum mechanics to develop secure communication methods. Quantum Key Distribution (QKD) is one such approach that enables secure data transmission.",
          },
          {
            title: "Quantum Threats to Modern Cryptography",
            text: "The development of quantum computers poses a threat to current encryption algorithms, particularly RSA and ECC. Post-quantum cryptography aims to develop algorithms that are resistant to quantum attacks.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about the impact of quantum computing on cryptography",
            videoLink: "https://www.youtube.com/watch?v=F_Riqjdh2oM",
          },
        ],
      },
    ],
  },
  
  {
    id: 29,
    name: "Incident Response & Management",
    description:
      "Learn how to handle security breaches and mitigate their impact.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=6tCyGmfMVcg",
      websiteLink: {
        title: "Incident Response Best Practices",
        link: "https://www.sans.org/cyber-security-resources/",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Incident Response
      {
        id: 1,
        topicName: "Introduction to Incident Response",
        content: [
          {
            title: "What is Incident Response?",
            text: "Incident response (IR) is a structured approach for handling and managing the aftermath of a security breach or cyberattack. The goal is to control the situation and minimize damage, recovery time, and costs.",
          },
          {
            title: "The Importance of Incident Response",
            text: "Effective incident response can prevent breaches from escalating and causing severe damage. It is essential for maintaining business continuity and protecting sensitive data.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video for a general overview of incident response processes",
            videoLink: "https://www.youtube.com/watch?v=CTxunR-LzFQ",
          },
        ],
      },
      // TOPIC 2: Incident Response Phases
      {
        id: 2,
        topicName: "Incident Response Phases",
        content: [
          {
            title: "1. Preparation",
            text: "The preparation phase involves establishing and training an incident response team, developing an incident response plan, and setting up detection mechanisms. This step ensures that the organization is ready to respond quickly to incidents.",
          },
          {
            title: "2. Identification",
            text: "In the identification phase, the security team detects and determines the nature and scope of the incident. This could involve the use of security monitoring tools, such as intrusion detection systems (IDS), to pinpoint breaches or abnormal activities.",
          },
          {
            title: "3. Containment",
            text: "Once an incident is confirmed, containment strategies are used to prevent further damage. This can involve isolating affected systems or deploying patches to prevent spread.",
          },
          {
            title: "4. Eradication",
            text: "The eradication phase involves removing the root cause of the incident, whether it's malicious software, unauthorized access, or vulnerabilities exploited during the attack.",
          },
          {
            title: "5. Recovery",
            text: "After resolving the incident, the recovery phase focuses on restoring systems and operations to normal. It also includes monitoring to ensure that there are no remaining threats.",
          },
          {
            title: "6. Lessons Learned",
            text: "The lessons learned phase is critical for improving future incident response efforts. Teams analyze the incident, assess what went wrong, and update response plans to prevent recurrence.",
          },
          {
            title: "Additional Resources",
            text: "Learn about the phases of incident response in this video",
            videoLink: "https://www.youtube.com/watch?v=7_h9WLnlmdg",
          },
        ],
      },
      // TOPIC 3: Incident Response Teams and Roles
      {
        id: 3,
        topicName: "Incident Response Teams and Roles",
        content: [
          {
            title: "The Role of Incident Response Teams",
            text: "Incident response teams are responsible for coordinating responses to security breaches. Teams typically include specialists in network security, forensics, and legal or compliance roles.",
          },
          {
            title: "Team Structure",
            text: "A typical incident response team consists of a team leader, security analysts, forensic experts, and IT support personnel. Each team member has clearly defined responsibilities during the response process.",
          },
          {
            title: "Coordination with External Stakeholders",
            text: "In some incidents, it may be necessary to coordinate with law enforcement, public relations, or legal teams to address compliance issues and communicate with affected parties.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video about incident response teams",
            videoLink: "https://www.youtube.com/watch?v=AEwop7BuWIo",
          },
        ],
      },
      // TOPIC 4: Legal and Compliance Considerations
      {
        id: 4,
        topicName: "Legal and Compliance Considerations",
        content: [
          {
            title: "Understanding Compliance Requirements",
            text: "Incident response must comply with industry regulations such as GDPR, HIPAA, or PCI-DSS, depending on the type of data involved. Organizations need to ensure their response plan includes measures to meet these legal obligations.",
          },
          {
            title: "Legal Implications of Incident Response",
            text: "Incident response teams may need to collect evidence during a breach investigation. It is important to ensure that evidence is gathered and preserved in a way that complies with legal requirements for court cases or regulatory reviews.",
          },
          {
            title: "Incident Reporting and Notifications",
            text: "Depending on the incident type, organizations may be required to notify affected individuals and regulatory bodies. Incident response teams should be aware of notification requirements to avoid fines or legal consequences.",
          },
          {
            title: "Additional Resources",
            text: "Learn about compliance in incident response here",
            videoLink: "https://www.youtube.com/watch?v=4yY4_fih4Io",
          },
        ],
      },
      // TOPIC 5: Cybersecurity Tools for Incident Response
      {
        id: 5,
        topicName: "Cybersecurity Tools for Incident Response",
        content: [
          {
            title: "Intrusion Detection and Prevention Systems (IDPS)",
            text: "IDPS tools monitor network traffic for suspicious activity and provide early warnings to incident response teams.",
          },
          {
            title: "Security Information and Event Management (SIEM)",
            text: "SIEM systems collect and analyze log data from various sources to identify potential security incidents. They play a key role in incident detection and response.",
          },
          {
            title: "Forensic Tools",
            text: "Digital forensics tools are used to investigate security breaches, trace attackers' actions, and gather evidence. Tools like FTK (Forensic Toolkit) and Autopsy are commonly used.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on incident response tools",
            videoLink: "https://www.youtube.com/watch?v=q7wd8MDN9Ls",
          },
        ],
      },
      // TOPIC 6: Post-Incident Reviews and Continuous Improvement
      {
        id: 6,
        topicName: "Post-Incident Reviews and Continuous Improvement",
        content: [
          {
            title: "Why Post-Incident Reviews Matter",
            text: "Conducting post-incident reviews is essential to learn from the breach, understand the organization's strengths and weaknesses, and make necessary improvements to the incident response plan.",
          },
          {
            title: "Improving Incident Response Plans",
            text: "Based on lessons learned, organizations can update their incident response procedures, enhance staff training, and invest in more advanced security tools to better prepare for future incidents.",
          },
          {
            title: "Continuous Monitoring and Threat Hunting",
            text: "Organizations should implement continuous monitoring and proactive threat-hunting strategies to detect security incidents early and respond effectively.",
          },
          {
            title: "Additional Resources",
            text: "Explore post-incident review techniques",
            videoLink: "https://www.youtube.com/watch?v=piF9PpqaAgE",
          },
        ],
      },
    ],
  },
  
  {
    id: 30,
    name: "Risk Management",
    description:
      "Understand how to identify, assess, and mitigate security risks.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=8qKMjR7cSjk",
      websiteLink: {
        title: "Comprehensive Risk Management Guide",
        link: "https://www.nist.gov/risk-management-framework",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Risk Management
      {
        id: 1,
        topicName: "Introduction to Risk Management",
        content: [
          {
            title: "What is Risk Management?",
            text: "Risk management involves identifying, assessing, and controlling threats to an organization's capital and earnings. These threats could stem from various sources such as financial uncertainty, legal liabilities, or cybersecurity breaches.",
          },
          {
            title: "Importance of Risk Management in Cybersecurity",
            text: "In cybersecurity, risk management helps organizations identify and protect against potential threats, ensuring that resources are used efficiently to mitigate risks and minimize impact.",
          },
          {
            title: "Additional Resources",
            text: "Learn about risk management in cybersecurity with this video",
            videoLink: "https://www.youtube.com/watch?v=QaQzv-lGiN4",
          },
        ],
      },
      // TOPIC 2: Risk Identification
      {
        id: 2,
        topicName: "Risk Identification",
        content: [
          {
            title: "How to Identify Risks",
            text: "Risk identification involves recognizing potential risks before they occur. In cybersecurity, this includes understanding the organization's assets, vulnerabilities, and potential threat vectors.",
          },
          {
            title: "Techniques for Risk Identification",
            text: "Common techniques include brainstorming, SWOT analysis (Strengths, Weaknesses, Opportunities, and Threats), and risk assessment frameworks such as ISO 27001 and NIST SP 800-30.",
          },
          {
            title: "Common Cybersecurity Risks",
            text: "Some of the most common risks in cybersecurity include phishing attacks, ransomware, insider threats, data breaches, and vulnerabilities in software and hardware systems.",
          },
          {
            title: "Additional Resources",
            text: "For more on identifying risks, check out this guide",
            videoLink: "https://www.youtube.com/watch?v=2QceSJSaGOA",
          },
        ],
      },
      // TOPIC 3: Risk Assessment and Analysis
      {
        id: 3,
        topicName: "Risk Assessment and Analysis",
        content: [
          {
            title: "Risk Assessment Process",
            text: "Risk assessment involves evaluating the likelihood of a risk occurring and the potential impact it would have on the organization. This includes both quantitative and qualitative approaches.",
          },
          {
            title: "Tools for Risk Assessment",
            text: "Popular tools include risk matrices, heat maps, and probability-impact charts. These tools help organizations prioritize risks based on their severity and likelihood.",
          },
          {
            title: "Conducting a Risk Analysis",
            text: "Risk analysis includes understanding the potential consequences of an incident and determining appropriate mitigation strategies. It often involves cost-benefit analysis to decide on the best course of action.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on risk assessment techniques",
            videoLink: "https://www.youtube.com/watch?v=f94ew9CjRPI",
          },
        ],
      },
      // TOPIC 4: Risk Mitigation Strategies
      {
        id: 4,
        topicName: "Risk Mitigation Strategies",
        content: [
          {
            title: "Approaches to Risk Mitigation",
            text: "Risk mitigation strategies aim to reduce the likelihood of a threat or minimize its impact. Common approaches include avoiding the risk, transferring it (e.g., via insurance), reducing its likelihood, or accepting the risk if its impact is low.",
          },
          {
            title: "Implementing Security Controls",
            text: "Security controls, such as firewalls, encryption, and multi-factor authentication, can mitigate risks by reducing vulnerabilities in systems and data.",
          },
          {
            title: "Monitoring and Continuous Improvement",
            text: "Risk management is an ongoing process. Continuous monitoring helps organizations identify new risks and adjust their risk management strategies as needed.",
          },
          {
            title: "Additional Resources",
            text: "Learn about risk mitigation techniques in this video",
            videoLink: "https://www.youtube.com/watch?v=MLHd0rlTqwo",
          },
        ],
      },
      // TOPIC 5: Risk Governance and Compliance
      {
        id: 5,
        topicName: "Risk Governance and Compliance",
        content: [
          {
            title: "Establishing Risk Governance Framework",
            text: "Risk governance involves setting up the organizational structure and processes for managing risks. This includes defining roles, responsibilities, and oversight mechanisms.",
          },
          {
            title: "Compliance and Regulatory Requirements",
            text: "Organizations must ensure that their risk management practices comply with relevant regulations such as GDPR, HIPAA, or PCI-DSS. Compliance frameworks help to align risk management with legal requirements.",
          },
          {
            title: "Reporting and Risk Communication",
            text: "Clear communication of risks to stakeholders, such as executives and board members, is crucial for ensuring that risk management strategies are understood and supported at all levels of the organization.",
          },
          {
            title: "Additional Resources",
            text: "Explore governance and compliance best practices",
            videoLink: "https://www.youtube.com/watch?v=xbJu_vYUgXg",
          },
        ],
      },
      // TOPIC 6: Emerging Risks and Trends in Cybersecurity
      {
        id: 6,
        topicName: "Emerging Risks and Trends in Cybersecurity",
        content: [
          {
            title: "New and Emerging Threats",
            text: "As technology evolves, so do cybersecurity risks. Emerging threats such as AI-powered attacks, deepfakes, and quantum computing require organizations to adapt their risk management strategies.",
          },
          {
            title: "Future Trends in Risk Management",
            text: "Risk management is increasingly focusing on proactive approaches, such as threat intelligence and automation, to better predict and respond to evolving threats.",
          },
          {
            title: "Preparing for the Future",
            text: "Organizations should stay updated with the latest cybersecurity trends, invest in training, and implement advanced technologies to mitigate future risks effectively.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video to understand the future of cybersecurity risks",
            videoLink: "https://www.youtube.com/watch?v=gFyJw1sMiYA",
          },
        ],
      },
    ],
  },
  
  {
    id: 31,
    name: "Security Auditing & Compliance",
    description:
      "Learn the essentials of auditing and ensuring compliance with security standards.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=AEjFi8jZgkA",
      websiteLink: {
        title: "Comprehensive Guide to Security Auditing",
        link: "https://www.isaca.org/resources",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Security Auditing
      {
        id: 1,
        topicName: "Introduction to Security Auditing",
        content: [
          {
            title: "What is Security Auditing?",
            text: "Security auditing involves evaluating an organization's security measures to ensure they meet regulatory standards and protect assets from threats. It is a systematic process that identifies security gaps.",
          },
          {
            title: "The Importance of Security Audits",
            text: "Regular security audits help organizations ensure compliance with legal regulations, mitigate security risks, and improve their overall security posture.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about security auditing with this video",
            videoLink: "https://www.youtube.com/watch?v=AEjFi8jZgkA",
          },
        ],
      },
      // TOPIC 2: Security Standards and Compliance Frameworks
      {
        id: 2,
        topicName: "Security Standards and Compliance Frameworks",
        content: [
          {
            title: "Understanding Compliance Standards",
            text: "Organizations must comply with security standards such as ISO/IEC 27001, GDPR, HIPAA, and PCI-DSS. These frameworks guide the implementation of security measures and protect sensitive information.",
          },
          {
            title: "Key Security Frameworks",
            text: "Common frameworks include the NIST Cybersecurity Framework, COBIT, and ISO/IEC 27001. These frameworks provide best practices for managing information security and ensuring compliance.",
          },
          {
            title: "Additional Resources",
            text: "Explore various compliance frameworks",
            videoLink: "https://www.youtube.com/watch?v=aIX_8lDBaA0",
          },
        ],
      },
      // TOPIC 3: Conducting Security Audits
      {
        id: 3,
        topicName: "Conducting Security Audits",
        content: [
          {
            title: "Steps in a Security Audit",
            text: "A security audit involves planning, assessing current security practices, identifying risks, and creating recommendations for improvements. It also includes reviewing policies, procedures, and systems.",
          },
          {
            title: "Types of Security Audits",
            text: "There are various types of security audits, including internal audits, external audits, and compliance audits. Each focuses on ensuring that security practices are effective and compliant with regulations.",
          },
          {
            title: "Using Auditing Tools",
            text: "Auditing tools like Nessus, OpenVAS, and Splunk help in the automated evaluation of system vulnerabilities, log analysis, and tracking compliance issues.",
          },
          {
            title: "Additional Resources",
            text: "Learn about conducting audits in this guide",
            videoLink: "https://www.youtube.com/watch?v=WrDV-1ODzGc",
          },
        ],
      },
      // TOPIC 4: Managing Compliance
      {
        id: 4,
        topicName: "Managing Compliance",
        content: [
          {
            title: "Compliance Management Process",
            text: "Managing compliance involves ensuring that the organization adheres to security regulations and frameworks. This includes staying updated on new regulations and adjusting security policies as needed.",
          },
          {
            title: "Tools for Compliance Management",
            text: "Compliance management tools, such as TrustArc and ZenGRC, help organizations track and document compliance efforts, assess risks, and prepare for audits.",
          },
          {
            title: "Monitoring and Reporting Compliance",
            text: "Continuous monitoring of compliance ensures that security measures remain effective. Regular reporting to stakeholders and regulatory bodies is crucial to maintaining transparency.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on compliance management",
            videoLink: "https://www.youtube.com/watch?v=3bzxwCzm1ZI",
          },
        ],
      },
      // TOPIC 5: Remediation and Continuous Improvement
      {
        id: 5,
        topicName: "Remediation and Continuous Improvement",
        content: [
          {
            title: "Identifying Gaps and Remediation",
            text: "After an audit, remediation involves addressing identified security gaps and implementing necessary changes to strengthen the security posture. This could include upgrading security controls or revising policies.",
          },
          {
            title: "Continuous Improvement in Security",
            text: "Security is not a one-time effort. Continuous improvement involves regularly updating security measures, adopting new technologies, and staying informed about evolving threats.",
          },
          {
            title: "Additional Resources",
            text: "Learn about remediation strategies in this video",
            videoLink: "https://www.youtube.com/watch?v=JwJv_zgyDa0",
          },
        ],
      },
      // TOPIC 6: Future Trends in Security Auditing
      {
        id: 6,
        topicName: "Future Trends in Security Auditing",
        content: [
          {
            title: "Automating Audits with AI",
            text: "The future of auditing involves the increasing use of AI and machine learning to automate auditing processes, detect anomalies, and identify security risks more efficiently.",
          },
          {
            title: "Risk-based Auditing",
            text: "Risk-based auditing focuses on prioritizing high-risk areas to ensure that critical vulnerabilities are addressed first. This approach allows for more targeted and efficient audits.",
          },
          {
            title: "Preparing for Emerging Regulations",
            text: "As regulations evolve, organizations must be prepared for new compliance requirements, particularly in areas such as data privacy, AI ethics, and cloud security.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video on future trends in auditing",
            videoLink: "https://www.youtube.com/watch?v=dPZh9bgblP0",
          },
        ],
      },
    ],
  },
  
  {
    id: 32,
    name: "Cloud Security Basics",
    description: "Discover how to secure cloud-based systems and infrastructure.",
    track: "Cybersecurity",
    additionalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=kpSKEkTKw_s", // Cloud Security basics
      websiteLink: {
        title: "Cloud Security Best Practices",
        link: "https://cloudsecurityalliance.org/",
      },
    },
    topics: [
      // TOPIC 1: Introduction to Cloud Security
      {
        id: 1,
        topicName: "Introduction to Cloud Security",
        content: [
          {
            title: "What is Cloud Security?",
            text: "Cloud security involves securing cloud-based systems, data, and infrastructure against threats. It covers data protection, compliance, and security management in cloud environments.",
          },
          {
            title: "Types of Cloud Models",
            text: "Cloud models include public, private, and hybrid clouds. Security needs and implementations vary depending on the model used by the organization.",
          },
          {
            title: "Additional Resources",
            text: "Learn more about the basics of cloud security",
            videoLink: "https://www.youtube.com/watch?v=F0p8YEM1g0I",
          },
        ],
      },
      // TOPIC 2: Cloud Security Threats and Risks
      {
        id: 2,
        topicName: "Cloud Security Threats and Risks",
        content: [
          {
            title: "Common Threats in Cloud Environments",
            text: "Some common cloud security threats include data breaches, insider threats, insecure interfaces, and account hijacking. These risks require constant monitoring and appropriate security measures.",
          },
          {
            title: "Understanding Shared Responsibility",
            text: "In cloud security, the shared responsibility model divides the security roles between the cloud provider and the customer. Understanding who is responsible for what is crucial in mitigating security risks.",
          },
          {
            title: "Additional Resources",
            text: "Explore more on cloud security risks in this video",
            videoLink: "https://www.youtube.com/watch?v=2xz_nIvn2pM", // Cloud security risks and how to mitigate
          },
        ],
      },
      // TOPIC 3: Data Encryption in the Cloud
      {
        id: 3,
        topicName: "Data Encryption in the Cloud",
        content: [
          {
            title: "Encrypting Data at Rest and in Transit",
            text: "Encryption is essential to securing data in the cloud. Data can be encrypted at rest (stored data) and in transit (data being transmitted) using various cryptographic methods.",
          },
          {
            title: "Cloud Encryption Tools",
            text: "There are a number of encryption tools available for securing cloud data, such as AWS KMS (Key Management Service), Google Cloud KMS, and Azure Key Vault.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video to understand cloud encryption",
            videoLink: "https://www.youtube.com/watch?v=y5k1BUEzrTo", // Explanation of encryption in the cloud
          },
        ],
      },
      // TOPIC 4: Identity and Access Management (IAM)
      {
        id: 4,
        topicName: "Identity and Access Management (IAM)",
        content: [
          {
            title: "Securing Access in the Cloud",
            text: "IAM systems ensure that the right people and devices have the right access to cloud resources. This includes authentication, authorization, and auditing.",
          },
          {
            title: "IAM Best Practices",
            text: "Best practices for IAM include using multi-factor authentication (MFA), least privilege access, and regular audits of user permissions.",
          },
          {
            title: "Additional Resources",
            text: "Learn about IAM in this cloud security video",
            videoLink: "https://www.youtube.com/watch?v=ts8xlXc0Zs4", // Introduction to IAM in the cloud
          },
        ],
      },
      // TOPIC 5: Cloud Security Tools and Solutions
      {
        id: 5,
        topicName: "Cloud Security Tools and Solutions",
        content: [
          {
            title: "Popular Cloud Security Tools",
            text: "Popular tools for cloud security include AWS Security Hub, Azure Security Center, and Google Cloud Security Command Center. These tools help monitor and secure cloud environments.",
          },
          {
            title: "Additional Resources",
            text: "Watch this video to explore cloud security tools",
            videoLink: "https://www.youtube.com/watch?v=h5NiD_lhA7A", // Overview of popular cloud security tools
          },
        ],
      },
      // TOPIC 6: Compliance and Regulatory Requirements in the Cloud
      {
        id: 6,
        topicName: "Compliance and Regulatory Requirements in the Cloud",
        content: [
          {
            title: "Ensuring Cloud Compliance",
            text: "Cloud providers and customers must comply with various regulations such as GDPR, HIPAA, and PCI DSS. Regular audits and compliance checks ensure that cloud environments meet legal requirements.",
          },
          {
            title: "Additional Resources",
            text: "Learn about cloud compliance regulations",
            videoLink: "https://www.youtube.com/watch?v=Zbg6RUrgALw", // Cloud compliance and regulatory framework explained
          },
        ],
      },
    ],
  }
  
];

export default courses;
