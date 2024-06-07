import ReactSlider from "react-slider";
import PropTypes from "prop-types";
import "../assets/styles/components/Slider.css";

function Slider({ setSlide, min, max }) {
  return (
    <div className="slider-container">
      <p>Filter by note:</p>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="thumb"
        trackClassName="track"
        defaultValue={[min, max]}
        min={min}
        max={max}
        minDistance={0.5}
        step={0.5}
        onChange={(value) => setSlide(value)}
        ariaLabel="Note slider"
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        // eslint-disable-next-line react/jsx-props-no-spreading
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
    </div>
  );
}

Slider.propTypes = {
  setSlide: PropTypes.shape({
    setNote: PropTypes.number.isRequired,
  }).isRequired,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
};

export default Slider;
