import React from "react";

class ListItem extends React.Component {
  toggleActive = () => {
    this.props.onSelect(this.props.title);
  };

  render() {
    return (
      <li
        className={`px-6 py-4 rounded-lg shadow hover:cursor-pointer transition ${
          this.props.active
            ? "bg-slate-800 text-white"
            : "bg-white hover:bg-slate-100"
        }`}
        onClick={this.toggleActive}
      >
        {this.props.title}
      </li>
    );
  }
}

export default ListItem;
