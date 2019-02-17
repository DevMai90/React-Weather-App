// import React, { Component } from "react";

// const Context = React.createContext();

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "GET_WEATHER":
//       return {
//         ...state,
//         city: action.payload
//       };
//     default:
//       return state;
//   }
// };

// export class Provider extends Component {
//   state = {
//     city: "San Jose",
//     country: "US",
//     temperature: "70",
//     humidity: "28",
//     description: "clear sky",
//     error: "",
//     dispatch: action => {
//       this.setState(state => reducer(state, action));
//     }
//   };
//   render() {
//     return (
//       <Context.Provider value={this.state}>
//         {this.props.children}
//       </Context.Provider>
//     );
//   }
// }

// export const Consumer = Context.Consumer;

// /*
// temperature: res.data.main.temp,
//     //   city: res.data.name,
//     //   country: res.data.sys.country,
//     //   humidity: res.data.main.humidity,
//     //   description: res.data.weather[0].description,
//     //   error: ""
// */
