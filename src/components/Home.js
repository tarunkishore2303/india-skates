import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginPage from "./LoginPage";
import Registration from "./Registration";

function Home() {
	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			paddingTop: "10%",
			alignContent: "center",
		},
		avatar: {
			margin: theme.spacing(1),
			backgroundColor: theme.palette.secondary.main,
		},
		form: {
			width: "100%", // Fix IE 11 issue.
			marginTop: theme.spacing(1),
		},
		submit: {
			margin: theme.spacing(3, 0, 2),
		},
		headerText: {
			textAlign: "right",
			paddingLeft: "83%",
		},
		root: {
			"& > *": {
				margin: theme.spacing(1),
			},
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			margin: "auto",
			position: "absolute",
			top: 0,
			left: 0,
			bottom: 0,
			right: 0,
		},
		button: {
			paddingRight: 10,
		},
	}));
	const classes = useStyles();
	return (
		<div>
			<AppBar position='absolute'>
				<Toolbar>
					<img
						src='https://indiaskate.com/skaterbase20/jimages/logo169.png'
						alt='logo'
					/>
					<Typography variant='h6' className={classes.headerText}>
						Skater Login
					</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.root}>
				<Link to='/login'>
					<Button
						variant='contained'
						color='primary'
						size='large'
						className={classes.button}
					>
						Skater Login
					</Button>
				</Link>
				<Link to='/register'>
					<Button variant='contained' color='primary' size='large'>
						Enroll new Skater
					</Button>
				</Link>
			</Container>
		</div>
	);
}

export default Home;
