import "./LandingV2.css";
import SocialLinksVertical from "../UI/SocialLinksVertical";
import "animate.css";

const LandingV2 = (props) => {
  let content = {
    English: {
      morning: "Good Morning",
      afternoon: "Good Afternoon",
      evening: "Good Evening",
    },
    Japanese: {
      morning: "おはようございます",
      afternoon: "こんにちは",
      evening: "こんばんは",
    },
  };

  props.language === "Japanese"
    ? (content = content.Japanese)
    : (content = content.English);

  // find if the user is in the morning, afternoon, or evening
  const time = new Date().getHours();
  let currGreeting = "Hello";
  if (time < 12) {
    currGreeting = content.morning;
  } else if (time < 18) {
    currGreeting = content.afternoon;
  } else {
    currGreeting = content.evening;
  }

  return (
    <div className="landing-v2">
      <h1 className="landing-v2-title animate__animated animate__fadeIn">
        <span>{`${currGreeting}`}, I'm </span>
        <span
          style={{
            color: "var(--secondary-color)",
          }}
        >
          Zach
        </span>
        <span> and I build </span>
        <span
          style={
            {
              // color: "var(--third-color)",
            }
          }
        >
          {" "}
          web
        </span>
        <span> and </span>
        <span
          style={
            {
              // color: "var(--fourth-color)",
            }
          }
        >
          {" "}
          iOS
        </span>
        <span> applications.</span>
      </h1>
      <SocialLinksVertical />
    </div>
  );
};

export default LandingV2;
