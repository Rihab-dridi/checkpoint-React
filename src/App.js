
import './App.css';
import { Button, Form, FormGroup, Label, Input }from 'react-bootstrap'; //import the tools of the form 
import { FacebookLoginButton } from "react-social-login-buttons";
import { Container, Navbar } from 'react-bootstrap';



function App() {
  return (
    <div >
     <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">React</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">about Us </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">FeedBack</a>
      </li>
    </ul>
  </div>
</nav> 
<div classeName="top">
<h1>--------------------------------- <span className="font-weight-bold">FeedBack </span>form ---------------------------------</h1>
      <h2>-----------------------------------------------Welcome-----------------------------------------------</h2>
      <h6>--------------------------------------------------------------------------------------------------Log in First--------------------------------------------------------------------------------------------------</h6>
</div>
    <form className="App">
      <FormGroup >
            <input className="label" type="First name" placeholder="First name"/>
            <input className="label" type="Last name" placeholder="Last name"/>
            </FormGroup>
            <FormGroup >
           <input className="input" type="email" placeholder="Email"/>
           </FormGroup>
           <FormGroup >
           <input className="input" type="Password" placeholder="Password"/>
           

      </FormGroup>
      <button className="btn-dark btn-lg btn-block"  > LOG IN</button>
      <div className="text-center pt-3">or Continue with your Facebook acount</div>
      <FacebookLoginButton classeName="  text-center mt=3"></FacebookLoginButton>
      <div classeName="text-center"> 
        <a href="#">sign up</a>
        <span classeName=" pl-2">|</span>
        <a href="#">Forgot password?</a>
      </div>

    </form>
    </div>
  );
}

export default App;
