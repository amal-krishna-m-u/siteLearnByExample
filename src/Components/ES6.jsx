import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ES61 from "./ES61";
import ES62 from "./ES62";
import ES63 from "./ES63";
import ES64 from "./ES64";
import ES65 from "./ES65";
import ES66 from "./ES66";
import ES67 from "./ES67";
import ES68 from "./ES68";

const ES6 = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  return (
    <Router>
      <div>
        <h1>In This Section You will learn about ES6 feature</h1>
        <button onClick={toggleDropdown}>Select Topic</button>
        {dropdownVisible && (
          <div>
            <button onClick={closeDropdown}>Close</button>
            <ul>
              <li>
                <Link to="/es6/destructuring-object">Destructuring Object</Link>
              </li>
              <li>
                <Link to="/es6/2">ES6.2</Link>
              </li>
              <li>
                <Link to="/es6/3">ES6.3</Link>
              </li>
              <li>
                <Link to="/es6/4">ES6.4</Link>
              </li>
              <li>
                <Link to="/es6/5">ES6.5</Link>
              </li>
              <li>
                <Link to="/es6/6">ES6.6</Link>
              </li>
              <li>
                <Link to="/es6/7">ES6.7</Link>
              </li>
              <li>
                <Link to="/es6/8">ES6.8</Link>
              </li>
            </ul>
          </div>
        )}

        <Routes>
          <Route path="/es6/arrow-function" element={<ES61 />} />
          <Route path="/es6/default-parameters" element={<ES62 />} />
          <Route path="/es6/3" element={<ES63 />} />
          <Route path="/es6/4" element={<ES64 />} />
          <Route path="/es6/5" element={<ES65 />} />
          <Route path="/es6/6" element={<ES66 />} />
          <Route path="/es6/7" element={<ES67 />} />
          <Route path="/es6/8" element={<ES68 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ES6;
