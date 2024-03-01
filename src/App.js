import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 0,
    mode: "light",
  };

  setProgress = (progress) => {
    this.setState({ progress: progress });
  };

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark" });
      document.body.style.backgroundColor = "#042743";
    } else {
      this.setState({ mode: "light" });
      document.body.style.backgroundColor = "white";
    }
  };
  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar toggleMode={this.toggleMode} mode={this.state.mode} />

          <LoadingBar
            height={3}
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="general"
                  pageSize={12}
                  country="in"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="business"
                  pageSize={12}
                  country="in"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="entertainment"
                  pageSize={12}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="health"
                  pageSize={12}
                  country="in"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="science"
                  pageSize={12}
                  country="in"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="sports"
                  pageSize={12}
                  country="in"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  mode={this.state.mode}
                  key="technology"
                  pageSize={12}
                  country="in"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
          <div
            className="upArrow"
            style={{
              fontSize: "50px",
              bottom: "15px",
              right: "14px",
              position: "fixed",
              color: this.state.mode === 'dark' ? 'white' : 'black',
            }}
            onClick={this.scrollToTop}
          >
            <i className="fa-solid fa-circle-arrow-up" ></i>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
