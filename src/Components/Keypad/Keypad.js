import classes from "./Keypad.module.css";
import Key from "../Key/Key";

const Keypad = (props) => {
  const { dataUsed, onKeyClick, clickedInstrument } = props;
  return (
    <div className={classes.keypad}>
      {dataUsed.map((item, index) => {
        return (
          <Key
            key={item.id}
            keyword={item.keyTrigger}
            onKeyClick={onKeyClick}
            id={item.id}
            clickedInstrument={clickedInstrument}
          />
        );
      })}
    </div>
  );
};

export default Keypad;
