
import './App.css';
import { Button, Form, FormGroup, Label, Input,Badge }from 'react-bootstrap'; //import the tools of the form 
import { FacebookLoginButton } from "react-social-login-buttons";
import { Container, Navbar, Carousel, ControlledCarousell, Alert, setShow } from 'react-bootstrap';



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
<Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100  "
      src="https://educationvoterspa.org/wp-content/uploads/2016/02/we-want-to-hear-from-you-post-banner.png"
      alt="First slide"
      
    /> 
  </Carousel.Item>
</Carousel>

<Alert variant="success">
  <Alert.Heading className="Alert">Hey, nice to see you</Alert.Heading>
  <p className="Alert">
    Thanks for helping us to improve our website!  Please tell us what you think of our website
  </p>
 
  
</Alert>
      
<div >
<h1 className="top">
    FeedBack <Badge variant="secondary">Form</Badge>
    <Badge variant="light">Log in First</Badge>
  </h1>
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
