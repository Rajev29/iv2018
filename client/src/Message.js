import React, { useEffect, useState } from 'react'

function Message(props) {
  //const App = (props)  => {
    const [counter, setCounter] = useState(0);
    useEffect(
      () => {
        console.log('Hello');
        setCounter(1);
      },
      [props.visible]
    );
    return <div>{counter}</div>
  }
//}

export default Message



// function Message() {
//   const App = (props)  => {
//     const [counter, setCounter] = useState(0);
//     useEffect(
//       () => {
//         console.log('Hello');
//         setCounter(1);
//       },
//       [props.visible]
//     );
//     return <div>{counter}</div>
//   }
// }

// export default Message
// // React is loaded and is available as React and ReactDOM
// // imports should NOT be used
// class Message extends React.Component {
//   render() {
//     return (<React.Fragment>
//           <a href="#">Want to buy a new car?</a>
//           <p>Call +11 22 33 44 now!</p>
//         </React.Fragment>);
//   }
// }

// document.body.innerHTML = "<div id='root'> </div>";
  
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Message />, rootElement);

// console.log("Before click: " + rootElement.innerHTML);
// document.querySelector("a").click();
// console.log("After click: " + rootElement.innerHTML);