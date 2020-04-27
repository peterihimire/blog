import React from "react";
import { useContext } from "react";
import { ProjectContext } from "../context";

// get all unique values
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const TechFilter = ({ projects }) => {
  const context = useContext(ProjectContext);
  console.log(context);

  const { changeHandler, type } = context;

  let types = getUnique(projects, "type");
  types = ["all", ...types];
  types = types.map((item, index) => {
    return (
      <option value={item} key={index} className="option-text">
        {item}
      </option>
    );
  });

  return (
    <>
      <form>
        <div className="sort-look">
          {/* <label htmlFor="technologies">choose technology</label> */}
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={changeHandler}
          >
            {types}
          </select>
        </div>
      </form>

      {/* <form>
        <div className="sort-look">
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
      </form> */}
    </>
  );
};
export default TechFilter;
