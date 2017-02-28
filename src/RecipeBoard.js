import React from "react";
import {add, all} from "./Storage"; 
import Modal from "./Modal";
import Form from "./Form";
import RecipeBox from "./RecipeBox";


const RecipeBoard = React.createClass({

	getInitialState() {
		return {
			"add" : false, //add a new recipe ?
			"recipes" : all()
		}
	},

	render () {

		let modal = null;

		if (this.state.add) {
			let form = <Form submit={this.addNewRecipe}/>
			modal = <Modal title="Add a new recipe" form={form} close={this.close} />;
		}

		let recipes = this.state.recipes;

		return (
			<div className="container">
			    <div className="columns">
			        <div className="column col-md-3">
			        	<a href="" onClick={this.showFormForNewRecipe}>
			        		Add a new recipe
			        	</a>
			        </div>

			        <div className="column col-md-6">
			        	{recipes.map((recipe) => {
			        		return (<RecipeBox key={recipe.title} 
			        			{...recipe} reload={this.reload} />)
			        	})}
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
			this.reload();
			return;
		}

		alert(`A recipe box with the title, ${data.title} already exists`)
	},

	reload() {
		this.setState({
			'add' : false,
			'recipes' : all()
		});	
	}
});

export default RecipeBoard;
