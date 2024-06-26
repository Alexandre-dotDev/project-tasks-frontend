import "./TaskItem.scss";

import { AiFillDelete } from "react-icons/ai";
// Component of the Function
const TaskItem = ({ props }) => {
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        props.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {props.description}
                    <input type="checkbox" defaultChecked={props.isCompleted} />
                    <span
                        className={
                            props.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete size={18} color="#F97474" />
            </div>
        </div>
    );
};

export default TaskItem;

// import React from "react";

// // Component of the Class
// class TaskItem extends React.Component {
//     componentDidMount() {
//         console.log("Component was mounted");
//     }
//     componentWillUnmount() {
//         console.log("I will unmounted");
//     }
//     render() {
//         const { props } = this.props;
//         return (
//             <>
//                 <h1>{props.description}</h1>
//                 <p>{props.isCompleted}</p>
//             </>
//         );
//     }
// }
