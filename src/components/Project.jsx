import React from "react";
import "../styles/Project.css";

//component - a function declaration or function expression

// //option vs arrow function -> function Header (){ <div>...}
// function Header() {
//   return (
//     <div>
//       <nav>This is a header</nav>
//     </div>
//   );
// }

// const Header = () => (
//     <div>
//         <nav>
//             This is a header
//         </nav>
//     </div>
// )

// see Header component created above is nested in ProjectsComponent - gets exported as nested and imported to be used
const ProjectsComponent = () => (
  <div class="container">
    <div class="card">Project</div>
    <div class="card">Project</div>
  </div>
); // note these are Smooth Braces/parenthesis

// how to get it to render into the root --> nest this component inside app.js & import it to app.js
// inject into app.js <ProjectsComponent />

export default ProjectsComponent;

// second option: export { ProjectsComponent, Header } --> see correspond import in app.js
//     {/* <Header /> */}
