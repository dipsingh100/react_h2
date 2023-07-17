import React, { Component } from "react";
import "../css/form.css";
import "../css/showdata.css";

class Form extends Component {
  state = {
    Name: "",
    Dep: "",
    Rating: "",
    EmpData: [],
  };
  changeHandle = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  clickHandle = () => {
    const newObj = {
      name: this.state.Name,
      dept: this.state.Dep,
      rate: this.state.Rating,
    };

    this.state.EmpData.push(newObj);
    this.setState({ EmpData: this.state.EmpData });
  };
  render() {
    return (
      <>
        <div className="fBox">
          <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
          <div className="inputCont">
            <div className="cont2">
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="Name"
                id="name"
                value={this.state.Name}
                onChange={this.changeHandle}
              />
            </div>
            <div className="cont2">
              <label htmlFor="dept">Department :</label>
              <input
                type="text"
                name="Dep"
                id="dept"
                value={this.state.Dep}
                onChange={this.changeHandle}
              />
            </div>
            <div className="cont2">
              <label htmlFor="rate">Rating :</label>
              <input
                type="text"
                name="Rating"
                id="rate"
                value={this.state.Rating}
                onChange={this.changeHandle}
              />
            </div>
          </div>

          <button type="button" onClick={this.clickHandle}>
            Submit
          </button>
        </div>

        <div className="show-container">
          {this.state.EmpData.map((item, index) => {
            return (
              <div className="innerBox">
                Name : {item.name} | Department : {item.dept} | Rating :{" "}
                {item.rate}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Form;
