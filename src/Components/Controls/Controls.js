import { Switch, Grid, Slider } from "@material-ui/core";
import classes from "./Controls.module.css";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const Controls = (props) => {
  const {
    power,
    onPowerChange,
    clickedInstrument,
    volume,
    onVolumeChange,
    section,
    onSectionChange,
  } = props;
  return (
    <div className={classes.controls}>
      <div className={classes.powerButton}>
        <h3>Power</h3>
        <Switch
          checked={power}
          onChange={onPowerChange}
          className={classes.switch}
          color="default"
          style={{ color: "#606060" }}
        />
      </div>

      <div className={classes.instrumentInfo}>
        <h3>{power && clickedInstrument.id}</h3>
      </div>

      <div className={classes.volumeSlider}>
        <Grid container spacing={2}>
          <Grid item>
            <VolumeDownIcon style={{ color: "#606060" }} />
          </Grid>
          <Grid item xs>
            <Slider
              value={volume}
              onChange={onVolumeChange}
              aria-labelledby="continuous-slider"
              style={{ color: "#606060" }}
            />
          </Grid>
          <Grid item>
            <VolumeUpIcon style={{ color: "#606060" }} />
          </Grid>
        </Grid>
      </div>

      <div className={classes.instrumentButton}>
        <h3>Instrument</h3>
        <Switch
          checked={section}
          onChange={onSectionChange}
          className={classes.switch}
          color="default"
          style={{ color: "#606060" }}
        />
      </div>
    </div>
  );
};

export default Controls;
