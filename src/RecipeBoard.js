import React from "react";
import {ensureLocalStorageIsAvailable, add} from "./Storage"; 
import Modal from "./Modal";
import Form from "./Form";


const RecipeBoard = React.createClass({

	getInitialState() {
		return {
			"add" : false //add a new recipe ?
		}
	},

	componentWilMount() {
		ensureLocalStorageIsAvailable();
	},

	render () {

		let modal = null;

		if (this.state.add) {
			let form = <Form submit={this.addNewRecipe}/>
			modal = <Modal title="Add a new recipe" form={form} close={this.close} />;
		}

		return (
			<div className="container">
			    <div className="columns">
			        <div className="column col-md-3">
			        	<a href="" onClick={this.showFormForNewRecipe}>
			        		Add a new recipe
			        	</a>
			        </div>

			        <div className="column col-md-6">

			        </div>
			        
			        <div className="column col-md-3">
			        {modal}
			        </div>
			    </div>
			</div>
		)
	},

	showFormForNewRecipe(e) {
		e.preventDefault();
		this.setState({
			'add' : true
		});
	},

	close (e) {
		this.setState({
			'add' : false
		});
	},

	addNewRecipe(data) {

		if (add(data.title, data)) {
			this.setState({
				'add' : false
			});

			return;
		}

		alert(`A recipe box with the title, ${data.title} already exists`)
	}
});

export default RecipeBoard;
