////////////////////////////////////////////////////////////////////////////////
// Exercise
//
// - When the checkbox is checked:
//   - Fill in the shipping fields with the values from billing
//   - Disable the shipping fields so they are not directly editable
//   - Keep the shipping fields up to date as billing fields change
//   - Hint: you can get the checkbox value from `event.target.checked`
// - When the form submits, console.log the values
//
// Got extra time?
//
// - If there are more than two characters in the "state" field, let the user
//   know they should use the two-character abbreviation
// - If the user types something into shipping, then checks the checkbox, then
//   unchecks the checkbox, ensure the field has the information from
//   before clicking the checkbox the first time
import React from 'react'
import ReactDOM from 'react-dom'
import serializeForm from 'form-serialize'

class CheckoutForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			billingName: 'Daniel',
			shippingName: '',
			sameAddress: false
		}

		this.handleSubmit  = e => {
			e.preventDefault()

			const values = serializeForm(e.target, { hash: true })
			console.log(values)
		}
	}

    render() {
        const { state } = this
        return (
            <div className="row">
                <h1>Checkout</h1>
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <legend>Billing Address</legend>
                        <p>
                            <label>Billing Name:
                                <input
                                type="text"
                                name="BillingName"
                                defaultValue={state.billingName}
                                onChange={ event => this.setState({ billingName: event.target.value })}
                                />
                            </label>
                        </p>
                    </fieldset>
                    <br/>
                    <fieldset>
                        <label><input name="check" type="checkbox"
							onChange={event => this.setState({ sameAddress: event.target.checked })}
                            />Same as billing</label>
                        <legend>Shipping Address</legend>
                        <p>
                            <label>Shipping Name: <input
                                type="text"
                                name="ShippingName"
                                value={state.sameAddress ? state.billingName : state.shippingName}
                                onChange={event => this.setState({ shippingName: event.target.value })}
                                />
                            </label>
                        </p>
                    </fieldset>
					<button>click</button>
                </form>
            </div>
        )
    }
}
export default CheckoutForm
