const Testimonial = ({testimonial, source}) => {
  return (
    <div className="testimonialSection">
      <div className="testimonialBorder">
        <hr/>
      </div>
      <div className="testimonialContainer">
        <p className="testimonialText">
          &quot;{testimonial}&quot;
        </p>
        <p className="testimonialSource">
          - {source}
        </p>
      </div>
      <div className="testimonialBorder">
        <hr/>
      </div>
    </div>
  );
}

export default Testimonial;