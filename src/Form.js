import React from "react";

const Form = React.createClass({

	getInitialState() {
		return {
			"title" : "",
			"ingredients" : "",
			"description" : ""
		}
	},

	syncTitle(e) {
		this.setState({
			'title' : this.formatData(e.target.value)								
		});
	},

	syncIngredients(e) {
		this.setState({	
			'ingredients' : this.formatData(e.target.value)								
		});
	},

	syncDescription(e) {
		this.setState({
			'description' : e.target.value								
		});
	},	

	render() {
		return (
			<form onSubmit={this.submit}>
			    <div className="form-group">
			        <label className="form-label">Title</label>
			        <input className="form-input" type="text" id="recipe_title" 
			        	placeholder="Recipe title" onChange={this.syncTitle}/>
			    </div>

			    <div className="form-group">
			        <label className="form-label" >Ingredients</label>
			        <input className="form-input" type="text" id="ingredients" 
			        	placeholder="Ingredients here" onChange={this.syncIngredients}/>
			    </div>

			     <div className="form-group">
			        <label className="form-label" >Description</label>
			        <textarea className="form-input" id="description" 
			        placeholder="A description of your recipe here" rows="3" 
			        onChange={this.syncDescription}></textarea>
			    </div>
				
			    <div>
					<button className="btn btn-link">Submit</button>		    
			    </div>
	    	</form>		
		)
	},

	submit(e) {
		e.preventDefault();
		this.props.submit(this.state);
	},

	formatData(s) {
		//Remove all commas and spaces found at the end of the string.
		//This is to allow a consistent "string" 
		//and it'd be much more easier to query the localstorage api 
		//without having to worry about strings with spaces at the end.
		//Removal of commas is just athestics, nothing more.
		return s.trim().replace("/,{0,}$/", "");
	}
});

export default Form;
