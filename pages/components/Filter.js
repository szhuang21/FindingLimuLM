import React, { Component } from "react";

const Filter = () => {
  return (
    <div className="bg-blue-600">
      <div className="container">
        <input
          className="rounded-checkbox"
          type="checkbox"
          // onChange={handleChange}
          // checked={checked}
        />

        <label>github</label>
      </div>
    </div>
    
    // <div className="filter-options">
    //     <div className="filter-title">FILTERS</div>
    //     <Checkbox
    //     id="1"
    //     title="slack"
    //     name="slack"
    //     checked={this.state.categories.slack}
    //     handleChange={this.handleChange}
    //     />
    //     <Checkbox
    //     id="2"
    //     title="confluence"
    //     name="confluence"
    //     handleChange={this.handleChange}
    //     checked={this.state.categories.confluence}
    //     />
    //     <Checkbox
    //     id="3"
    //     title="github"
    //     name="github"
    //     handleChange={this.handleChange}
    //     checked={this.state.categories.github}
    //     />
    //     <Checkbox
    //     id="4"
    //     title="rightanswers"
    //     name="rightanswers"
    //     handleChange={this.handleChange}
    //     checked={this.state.categories.rightanswers}
    //     />
    //     <Checkbox
    //     id="5"
    //     title="stackoverflow"
    //     name="stackoverflow"
    //     handleChange={this.handleChange}
    //     checked={this.state.categories.stackoverflow}
    //     />



    // </div>

  )
}

export default Filter