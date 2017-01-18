import React, {PropTypes} from 'react';

class FormPage extends React.Component {
	render() {
		return (<div className="row">
			<h1>Form Page</h1>
			<form>
				<fieldset>
					<legend>Billing Address</legend>
					<p>
						<label>Billing Name:
							<input
								type="text"
								name="BillingName"
								/>
						</label>
					</p>
				</fieldset>

				<br/>

				<fieldset>
					<label>
						<input
							name="check"
							type="checkbox"
							/>Same as billing
					</label>
					<legend>Shipping Address</legend>
					<p>
						<label>Shipping Name:
							<input
								type="text"
								name="ShippingName"
							/>
						</label>
					</p>
				</fieldset>
			</form>
		</div>);
	}
}

export default FormPage;
