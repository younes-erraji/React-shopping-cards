import React, { Component } from "react";
import Nav from "./components/Nav";
import ShoppingCard from "./components/ShoppingCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  tags = [
    // { name: "First", count: 0, exists: true },
    // { name: "Second", count: 0, exists: true },
    { name: "Third", count: 3, exists: false },
    // { name: "Fourth", count: 0, exists: true },
    // { name: "Fifth", count: 0, exists: true },
  ];
  components = this.tags.map((tag, index) => {
    if (tag.exists) {
      return (
        <ShoppingCard
          key={index}
          name={tag.name}
          exists={tag.exists}
          count={tag.count}
        >
          <h4>- #{tag.name}</h4>
        </ShoppingCard>
      );
    } else {
      return (
        <p key={0} className="alert alert-primary m-2">Please add a new tag</p>
      )
    }
  });

  addTag = () => {

    this.tags.push({name: 'Test', count: 0, exists: true});

  }

  render() {
    return (
      <React.Fragment>
        <Nav />
        <div className="container mt-4 mb-4">
            <label htmlFor="tagName" className="form-label">Tag name</label>
            <input type="text" className="form-control" id="tagName" placeholder="..." />
        </div>
        <div className="container mt-3 mb-3">
          <button className="btn btn-primary m-2">Reset</button>
          <button onClick={this.addTag} className="btn btn-success m-2">Add</button>
        </div>
        <div className="container">
          <hr />
        </div>
        <div className="container">
          <section className="row mt-4 mb-4">
            {this.components.length === 0 && (
              <p className="alert alert-primary m-2">Please add a new tag</p>
            )}
            {this.components.length ? (
              this.components
            ) : (
              <p className="alert alert-danger m-2">There's No Data</p>
            )}
          </section>
        </div>
        <div className="container">
          <hr />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
