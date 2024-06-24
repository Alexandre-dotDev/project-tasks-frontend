import Tasks from "./components/Tasks";

// Component of the Class
// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.handleChangeMessage = this.handleChangeMessage.bind(this);
//         this.handleStateTasks = this.handleStateTasks.bind(this);
//         this.state = {
//             tasks: [
//                 {
//                     id: "1",
//                     description: "Estudar Programação",
//                     isCompleted: false,
//                 },
//                 {
//                     id: "2",
//                     description: "Estudar Lógica",
//                     isCompleted: true,
//                 },
//             ],
//             message: "Hello world in class",
//         };
//     }

//     componentDidUpdate(prevProps, prevState) {
//         console.log(prevState);
//         console.log("Component was updated");
//     }
//     handleChangeMessage = () => {
//         this.setState({
//             message: "Olá mundo na classe",
//         });
//     };

//     handleStateTasks() {
//         this.setState({
//             tasks: [],
//         });
//     }

//     render() {
//         return (
//             <>
//                 <div>
//                     <div>
//                         <p>{this.state.message}</p>
//                         <button onClick={this.handleChangeMessage}>
//                             Chance message
//                         </button>
//                     </div>
//                     {this.state.tasks.map((task) => (
//                         <>
//                             <TaskItem key={task.id} props={task} />
//                             <p>
//                                 {task.isCompleted ? "Completo" : "Não completo"}
//                             </p>
//                         </>
//                     ))}
//                     <button onClick={this.handleStateTasks}>Clear task</button>
//                 </div>
//             </>
//         );
//     }
// }

// Component of the Function
const App = () => {
    return (
        <>
            <Tasks />
        </>
    );
};

export default App;
