import React from "react";

const Modal = (props) => {

	return (
		<div className="modal active">
			<div className="modal-overlay">

			</div>
			
			<div className="modal-container">
			    <div className="modal-header">
			        <button className="btn btn-clear float-right"></button>
			        <div className="modal-title">{props.title}</div>
			    </div>
			    <div className="modal-body">
			            <div className="content">
			            {props.form}
			            </div>
			    </div>
			    <div className="modal-footer">
					<button className="btn btn-link" onClick={props.close}>
						Close
					</button>			    	
			    </div>
			</div>
		</div>
	)
};

export default Modal;
