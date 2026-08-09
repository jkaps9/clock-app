import Button from "./components/Button";
import MoreIcon from "./assets/icons/icon-arrow-down.svg";
import LessIcon from "./assets/icons/icon-arrow-up.svg";
export default function App() {
  return (
    <>
      <Button>
        {"More"}{" "}
        <div className="icon-circle">
          <img src={MoreIcon} alt="" aria-hidden="true" />
        </div>
      </Button>
      <Button>
        {"Less"}{" "}
        <div className="icon-circle">
          <img src={LessIcon} alt="" aria-hidden="true" />
        </div>
      </Button>
    </>
  );
}
