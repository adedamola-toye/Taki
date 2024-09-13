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
      videoLink: "https://www.youtube.com/watch?v=kUMe1FH4CHE",
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
    additonalResource: {
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

    additonalResource: {
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
    additonalResource: {
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


  {
    id: 6,
    name: "Responsive Web Design",
    description:
      "Master the art of creating web pages that adapt to different screen sizes.",
    track: "Frontend Web Development",
    additonalResource: {
      title: "Additional Resource",
      videoLink: "https://www.youtube.com/watch?v=srvUrASNj0s", // Placeholder link
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

  {
    id: 8,
    name: "Building Interactive UIs with React",
    description:
      "Learn how to create dynamic user interfaces using React's component system.",
    track: "Frontend Web Development",
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
