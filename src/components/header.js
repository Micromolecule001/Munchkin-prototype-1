import React from 'react';


// Header component | default funtction
function Header(props) {
  return (
    <header>

        {/* one variable and many props */}
        <h1 className="title">{props.title}</h1>
    </header>
  )
}


/* 
// Header component | class
class Header extends React.Component {
    render() {
      return (   
        <header>
  
          
          <h1 className="title"> {this.props.title} </h1> 
        </header>
      )
    }
  }
*/
  export default Header;