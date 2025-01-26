import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1 className="main-heading">This is Food-Buddy-Online</h1>
      <h3 className="main-heading"> a local food delivery platform</h3>

      <UserClass
        name={"Aadesh Wasamkar"}
        address={
          "306 , Dhumal prestige , behind RMD college , warje , pune - 411058"
        }
        email={"aadeshwasamkar@gmail.com"}
      />
    </div>
  );
};

export default About;
