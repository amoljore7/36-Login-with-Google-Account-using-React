import React, { useState } from "react";
import GoogleLogin from "react-google-login";

function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setImageUrl(response.profileObj.imageUrl);
  }
  return (
    <React.Fragment>
      <h1>Login with Google</h1>
      <h2>Welcome : {name}</h2>
      <h2>email : {email}</h2>
      {/* <img src={imageUrl} alt="email-image" /> */}
      <GoogleLogin
        clientId="1003906124625-2trrj2elg5sgoadssuom3fj99jknmrdj.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </React.Fragment>
  );
}

export default App;
