import React from "react";
import { useContext } from "react";

const techFilter = () => {
  return (
    <>
      <form>
        <div className="sort-look">
          <label htmlFor="technologies">choose technology</label>
          <select
            name="technologies"
            id="technologies"
            className="form-control"
          >
            <option value="all">All</option>
            <option value="html/css">HTML/CSS</option>
            <option value="javascript">JAVASCRIPT</option>
            <option value="react">REACT</option>
          </select>
        </div>
      </form>
    </>
  );
};
export default techFilter;
