import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
// import Qrcode from './components/Qrcode;
// import Contacts from './components/Contacts';
// import Card from './components/Card;

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLInk = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLInk.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>

//         {/* <div className="flex-column justify-flex-start min-100-vh"> */}
//           <Header />
//           <div className="container">

//             <Route exact path="/">
//               <Home />
//             </Route>

//             <Route exact path="/sign-up">
//               {/* <Signup /> */}
//             </Route>

//             {/* <Route exact path="//:thoughtId">
//               <Contacts /> */}
//             {/* </Route> */}
//           </div>
//           {/* <Footer /> */}
//         {/* </div> */}

//       </Router>
//     </ApolloProvider>
//   );
// }

function App() {
  return (
    <div className="site_container">
      <ApolloProvider client={client}>
        <Header></Header>
        <Home />
      </ApolloProvider>
    </div>
  );
}

export default App;
