import React, {Component, Fragment} from 'react';

class App extends Component {
  render(){
   return (
    <Fragment>
    <div>
     <div className="Header">
      Phone Directory
     </div>
     <button> Add </button>
     <div>
       <span> Name </span><br/>
       <span> Phone </span>
     </div>
     <label htmlFor="name">Name: </label>
     <input id="name" type="text" placeholder="Type Here" defaultValue="Shilpa"/>
        </div>
        </Fragment>
   );
 }
}

export default App;
