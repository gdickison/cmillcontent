const HomeSubheader = ({subheaderText}) => {
  return (
    <div className="homeSubheader-subheaderSection">
      <div className="homeSubheader-subheaderBorder">
        <hr/>
      </div>
      <div className="homeSubheader-subheaderContainer">
        <p className="homeSubheader-subheaderText">
          {subheaderText}
        </p>
      </div>
      <div className="homeSubheader-subheaderBorder">
        <hr/>
      </div>
    </div>
  );
}

export default HomeSubheader;