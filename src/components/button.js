import React, { useEffect, useState } from 'react';

function Button(props) {

        // state
        const [click, setClick] = useState(0);


        // methods
        useEffect(() => {
           document.title = `You clicked ${click} times`;
        });
        
        return (
            <button onClick={() => setClick(click + 1)}>
               {props.text} {click}
            </button>
        )
}

  Button.defaultProps = {
    text: "Counter: "
  }

  export default Button;