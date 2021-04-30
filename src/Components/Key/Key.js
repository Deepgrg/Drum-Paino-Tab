import { useState } from "react";
import classes from "./Key.module.css";

const Key = (props) => {
  const [myStyle, setMyStyle] = useState(classes.key);

  const { keyword, onKeyClick, id } = props;

  const handleEvent = (e) => {
    if (e.type === "mousedown") {
      setMyStyle(`${classes.key} ${classes.mouseDown}`);
    }
    if (e.type === "mouseup") {
      setMyStyle(`${classes.key} ${classes.mouseUp}`);
    }
  };

  return (
    <div
      className={myStyle}
      onClick={() => onKeyClick(id)}
      onMouseDown={handleEvent}
      onMouseUp={handleEvent}
    >
      <h3>{keyword}</h3>
    </div>
  );
};

export default Key;
