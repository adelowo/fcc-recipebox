import React from "react";
import {remove} from "./Storage";

const RecipeBox = React.createClass({

	getInitialState() {
		return {
			"preview" : false
		}
	},

	render() {

		let preview = null;

		if (this.state.preview) {
			preview = this.getModal();
		}

		return (

			<p>
				{this.props.title} <button className="btn btn-link" onClick={this.showRecipe}>
					Click to view recipe
				</button> <button className="btn btn-primary" onClick={this.delete}>
					Delete this recipe
				</button>

				{preview}
			</p>
		)	
	},

	delete(e) {
		remove(this.props.title);
		this.props.reload();
	},

	showRecipe(e) {
		e.preventDefault();
		this.setState({
			"preview" : true
		})
	},

	close(e) {
		e.preventDefault();
		this.setState({
			"preview" : false
		});
	},

	getModal() {
		return (
			<div className="modal active">
				<div className="modal-overlay">
					Recipe :::: {this.props.title}
				</div>
				
				<div className="modal-container">
				    <div className="modal-header">
				        <button className="btn btn-clear float-right"></button>
				        <div className="modal-title">{this.props.title}</div>
				    </div>
				    <div className="modal-body">
				            <div className="content">
				            	Ingredients :::: {this.props.ingredients}
				            </div>

				            <div className="content">
				            	Description :::: {this.props.description}
				            </div>
				    </div>
				    <div className="modal-footer">
						<button className="btn btn-link" onClick={this.close}>
							Close
						</button>			    	
				    </div>
				</div>
			</div>
		)
	}
});

export default RecipeBox;
