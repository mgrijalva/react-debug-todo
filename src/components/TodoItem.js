import PropTypes from "prop-types";

export const TodoItem = (props) => {
  return <li><input type="checkbox" checked={props.completed} onChange={props.onCheckClick} />{props.text}</li>;
};

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onCheckClick: PropTypes.func.isRequired
};
