// Component of the Function
// const TaskItem = ({ props }) => {
//     return (
//         <>
//             <h1>{props.description}</h1>
//             <p>{props.isCompleted}</p>
//         </>
//     );
// };

import React from "react";

// Component of the Class
class TaskItem extends React.Component {
    render() {
        const { props } = this.props;
        return (
            <>
                <h1>{props.description}</h1>
                <p>{props.isCompleted}</p>
            </>
        );
    }
}

export default TaskItem;
