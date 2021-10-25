import React from "react";
import Nav from "./components/Nav";
import Reset from "./components/Reset";
import ShoppingCard from "./components/ShoppingCard";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let tags = [
      { name: "First", count: 0, exists: true },
      { name: "Second", count: 0, exists: true },
      { name: "Third", count: 3, exists: false },
      { name: "Fourth", count: 0, exists: true },
      { name: "Fifth", count: 0, exists: true },
    ],
    components = tags.map((tag, index) => {
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
      }
    });

  return (
    <React.Fragment>
      <Nav />
      <Reset />
      <div className="container">
        <hr />
      </div>
      <div className="container">
        <section className="row mt-4 mb-4">
          {components.length === 0 && (
            <p className="alert alert-primary m-2">Please add a new tag</p>
          )}
          {components.length ? (
            components
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

export default App;
