import { useState } from "react";
import classes from "./App.module.css";
import { sectionA, sectionB } from "./data";
import Keypad from "./Components/Keypad/Keypad";
import Controls from "./Components/Controls/Controls";

function App() {
  // Application State
  const [dataUsed, setDataUsed] = useState(sectionA);
  const [power, setPower] = useState(true);
  const [section, setSection] = useState(false);
  const [volume, setVolume] = useState(30);
  const [clickedInstrument, setClickedInstrument] = useState({});

  const onPowerChange = () => {
    setPower((prevState) => {
      return !prevState;
    });
    setClickedInstrument({});
  };

  const onKeyClick = (itemId) => {
    const filteredInstrument = dataUsed.filter((el) => {
      return el.id === itemId;
    });
    if (power) {
      const filteredElementObject = filteredInstrument[0];
      const audio = new Audio(filteredElementObject.url);
      audio.volume = volume / 100;
      audio.play();
      setClickedInstrument(filteredInstrument[0]);
    }
  };

  const onVolumeChange = (e, newValue) => {
    setVolume(newValue);
  };

  const onSectionChange = () => {
    setSection((prevState) => {
      return !prevState;
    });
    setDataUsed((prevState) => {
      return prevState === sectionA ? sectionB : sectionA;
    });
  };

  return (
    <div className={classes.app}>
      <div className={classes.core}>
        <div>
          <Keypad
            dataUsed={dataUsed}
            onKeyClick={onKeyClick}
            clickedInstrument={clickedInstrument}
          />
        </div>
        <div>
          <Controls
            className={classes.controls}
            power={power}
            onPowerChange={onPowerChange}
            volume={volume}
            onVolumeChange={onVolumeChange}
            section={section}
            onSectionChange={onSectionChange}
            dataUsed={dataUsed}
            clickedInstrument={clickedInstrument}
          />
        </div>
      </div>
      <p>by Dip Sagun Gurung</p>
    </div>
  );
}

export default App;
