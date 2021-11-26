import React from "react";
import getPartyClassMap from "../utils";

class Electorate extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelection = this.handleSelection.bind(this);
    this.handleDeselection = this.handleDeselection.bind(this);
  }

  /*
   * Get a string containing the CSS classes (aside from 'electorate') that this
   * component should have. This is primarily used to determine the colour of the
   * electorate.   
   */
  getElectorateClasses() {
    let classes = "";
    const delimiter = " ";

    // The square should be blank if it does not contain an electorate
    if (this.props.name === "none") {
      classes += "electorate-none" + delimiter;
    } else {
      let partyClass = getPartyClassMap().get(this.props.party);

      if (partyClass === undefined) {
        partyClass = "";
      }

      classes += partyClass + delimiter;
    }

    return classes.trimEnd();
  }

  /*
   * Update the currently selected electorate in the map component when the
   * mouse enters this electorate
   */
  handleSelection() {
    this.props.onSelectionChange(this.props.name);
  }

  /* 
   * Reset the currently selected electorate in the map component to no
   * electorate when the mouse leaves this electorate
   */
  handleDeselection() {
    this.props.onSelectionChange("none");
  }

  render() {
    return (
      <div
        className={"electorate " + this.getElectorateClasses()}
        onMouseEnter={this.handleSelection}
        onMouseLeave={this.handleDeselection}
      >
      </div>
    );
  } 
}

export default Electorate;
