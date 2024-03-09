import React from "react";
const Car = (props) =>{
  const myLists = props.myLists;  
  const listItems = myLists.map((myList ) =>  
    <li>{myList}</li>
  );  
  return (  
    <div>  
        <h2>Rendering Lists inside component</h2>  
              <ul>{listItems}</ul>  
    </div>  
  );
} ;

export default Car;