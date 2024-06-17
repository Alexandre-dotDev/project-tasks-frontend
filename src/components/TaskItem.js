import { useEffect } from "react";

// Component of the Function
const TaskItem = ({ props }) => {
    useEffect(() => {
        console.log("Component was mounted with component function");
        return () => {
            console.log("I will unmounted with component");
        };
    }, []);
    return (
        <>
            <h1>{props.description}</h1>
            <p>{props.isCompleted}</p>
        </>
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
