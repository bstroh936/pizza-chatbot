import React from 'react';
import logo from './pizzaLogo100.png';
import './UserStore.css'
//import ReactDOM from 'react-dom';

class PageBanner extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        userLocation: '',
        selectedStore: '',
        storePicked: false,        
    };
  }
  selectStore(uLocation){
    
  }
}
class UserStore extends React.Component{
  constructor(props){
    super(props);
    this.state = {        
        userTxt: '',        
    };
    this.handleChange = this.handleChange.bind(this);    
  }

  handleChange(event){
    this.setState({userTxt: event.target.value});
  }
  render(){
    const buttonDesc = this.state.curLoc ? 'Update Location' : 'Submit';
    return(
      <div>
        <header role="banner">
        <form >
          <ul>
            <li>
              <img src={logo} alt="Logo"/>
            </li>
            <li>
              <p>Welcome to Sliced!</p>
            </li>
            <li>
              <label>Enter your location:</label>
              <input type="text" value={this.state.userTxt} onChange={this.handleChange}></input>
            </li>
            <li>
              <button onClick={() => {this.updateLoc(this.state.userTxt)}}>{buttonDesc}</button>
            </li>
          </ul>         
          </form>          
          </header>
      </div>
            

      );
  }
}
export default UserStore;