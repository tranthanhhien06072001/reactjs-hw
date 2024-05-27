import React from 'react';
import './About.css';


const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">1. What is the Document Object Model?</h1>
      <p className="about-content">
        The Document Object Model (DOM) connects web pages to scripts or programming languages by representing the structure of a document—such as the HTML representing a web page—in memory. Usually it refers to JavaScript, even though modeling HTML, SVG, or XML documents as objects are not part of the core JavaScript language.
      </p>
      <p className="about-content">
        The DOM represents a document with a logical tree. Each branch of the tree ends in a node, and each node contains objects. DOM methods allow programmatic access to the tree. With them, you can change the document's structure, style, or content.
      </p>
      <img src={`${process.env.PUBLIC_URL}/DOM.png`} alt="Document Object Model" className="about-image" style={{ width: '60%' }} />
      <br></br>
      <h1 className="about-title">2. Manipulating the DOM in React</h1>
      <p className="about-content">
      In React, instead of directly manipulating the DOM, it utilizes a virtual DOM - a lightweight representation of the actual DOM. When a React component is rendered, it generates a corresponding virtual DOM tree, which is utilized to determine the minimum number of changes required to update the actual DOM.
      </p>
      <p className="about-content">
      One of the reasons for React's speed is its utilization of the virtual DOM. After identifying the changes made, React updates only those parts of the actual DOM that require modification. This process, known as <strong><em>reconciliation</em></strong>, minimizes the number of necessary updates and avoids costly DOM operations, thereby enhancing performance.
      </p>
      <p className="about-content">
      Another factor contributing to React's speed is its support for writing reusable components. These components can be employed across multiple pages and applications, reducing the volume of code that needs to be written and maintained.
      </p>
      <img src={`${process.env.PUBLIC_URL}/DOMinReact.png`} alt="Document Object Model" className="about-image" style={{ width: '80%' }} />
      <br></br>
      <h1 className="about-title">2. Manipulating the DOM in Vue</h1>
      <p className="about-content">
      Vue.js is a progressive JavaScript framework for building user interfaces. It uses a Virtual DOM implementation to improve the efficiency of DOM manipulation. The Virtual DOM is an in-memory representation of the actual DOM, which allows Vue.js to perform changes on the Virtual DOM first and then update the actual DOM in a batched and optimized manner.
      </p>
      <br></br>
      <p className="about-content">
      <em>Both Vue.js and React use Virtual DOM implementations to optimize DOM updates. While the underlying concepts are similar, their implementations and APIs differ. Vue.js tends to be more approachable for beginners, whereas React is more popular and has a larger ecosystem. The choice between the two depends on your project requirements, personal preferences, and familiarity with the frameworks.</em>
      </p>
    </div>
  );
};

export default About;
