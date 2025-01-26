import React from "react";
import linkedinLogo from "../assets/images/linkedinLogo.png";
import githubLogo from "../assets/images/githubLogo.png";
import xLogo from "../assets/images/xLogo.png";
import instagramlogo from "../assets/images/instagramlogo.png";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: null,
    };
  }
  async componentDidMount() {
    console.log("componentDidMount called");
    const data = await fetch("https://api.github.com/users/Aadesh-9");
    const jsonData = await data.json();
    this.setState({
      userInfo: jsonData,
    });
    console.log(jsonData);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  clickHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    const { email } = this.props;
    const { count } = this.state;
    const { name, location, avatar_url } = this.state.userInfo || {};
    return (
      <div className="about-creator">
        <h4>About creator </h4>
        <p>count - {count}</p>
        <button
          onClick={() => {
            this.clickHandler();
          }}
        >
          Increase Count
        </button>

        <img className="creator-image" src={avatar_url} />
        <p>name - {name}</p>
        <p>address - {location}</p>
        <p>email - {email}</p>
        <div className="social-media-links-container">
          <a
            className="social-media-logo"
            href="https://www.linkedin.com/in/aadesh-wasamkar-5a012822b"
            alt="linkedin-logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} />
          </a>
          <a
            className="social-media-logo"
            href="https://github.com/Aadesh-9"
            alt="github-logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} />
          </a>
          <a
            className="social-media-logo"
            href="https://twitter.com/AadeshWasamkar"
            alt="x-logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xLogo} />
          </a>
          <a
            className="social-media-logo"
            href="https://www.instagram.com/its_aadesh__9/?igsh=Nm1tNWsyMWptYXdz#"
            alt="instagram-logo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramlogo} />
          </a>
        </div>
      </div>
    );
  }
}

export default UserClass;
