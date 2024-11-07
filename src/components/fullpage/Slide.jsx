import PropTypes from "prop-types";

const Slide = (props) => {
  return (
    <div className={`full-page-slide ${props.activestate}`} {...props} style={{ ...props.style, height: "100%" }}>
      {props.children}
    </div>
  );
};

Slide.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Slide.defaultProps = {
  children: null,
  style: {},
};

Slide.isSlideOfFullpage = true;

export default Slide;
