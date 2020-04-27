import React, { Component } from "react";
import items from "./data";
import Client from "./Contentful";
Client.getEntries()
  .then(response => console.log(response.items))
  .catch(err => console.log(err));

const ProjectContext = React.createContext();

class ProjectProvider extends Component {
  state = {
    projects: [],
    sortedProjects: [],
    loading: true,
    type: "all"
  };

  componentDidMount() {
    let projects = this.formatData(items);
    this.setState({
      projects,
      sortedProjects: projects,
      loading: false
    });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let project = { ...item };
      return project;
    });
    return tempItems;
  }

  changeHandler = e => {
    const target = e.target;
    console.log(target);

    const value = target.value;
    const type = e.target.name;
    console.log(`this is ${type}, this is ${value}`);
    this.setState({ [type]: value }, this.filterProjects);
  };

  filterProjects = () => {
    let { projects, type } = this.state;

    let tempProjects = [...projects];
    console.log(tempProjects);

    if (type !== "all") {
      tempProjects = tempProjects.filter(project => project.type === type);
    }

    this.setState({ sortedProjects: tempProjects });
  };

  render() {
    return (
      <ProjectContext.Provider
        value={{ ...this.state, changeHandler: this.changeHandler }}
      >
        {this.props.children}
      </ProjectContext.Provider>
    );
  }
}

const ProjectConsumer = ProjectContext.Consumer;

export function withProjectConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <ProjectConsumer>
        {value => <Component {...props} context={value} />}
      </ProjectConsumer>
    );
  };
}
export { ProjectProvider, ProjectConsumer, ProjectContext };
