const Testimonial = ({testimonial, source}) => {
    return (
        <div className="testimonial-section">
            <div className="testimonial-border">
                <hr/>
            </div>
            <div className="testimonial-container">
                <p className="testimonial-text">{testimonial}</p>
                <p className="testimonial-source">- {source}</p>
            </div>
            <div className="testimonial-border">
                <hr/>
            </div>
        </div>
    );
}

export default Testimonial;