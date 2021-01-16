import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import Registration from "./components/Registration";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route exact path='/'>
						<Home />
					</Route>
					<Route path='/login'>
						<LoginPage />
					</Route>
					<Route path='/register'>
						<Registration />
					</Route>
				</Switch>
			</Router>
			{/* <Home /> */}
			{/* <Registration /> */}
			{/* <LoginPage /> */}
		</div>
	);
}

export default App;
