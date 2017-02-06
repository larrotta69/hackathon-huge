# React Tech Workshop

## Run the project

* Clone the repo `https://github.com/larrotta69/hackathon-huge.git`

* Go to `huge-workshop` branch, run `git checkout huge-workshop`
* Go to `hackathon-huge` folder
* Run `npm install`
* Then `npm start`
* Webpack will open a new tab in your browser
*  You'll see the "Welcome to React WorkShop"

## First example
#### Topics

* Props
* Event Handlers
* LiveCycle




#### Example
* Render of the component inside the DOM

```js
import React from 'react'
import { render } from 'react-dom'
import styles from './styles/main.scss'

class HomePage extends React.Component {
	render () {
		return (
			<section className="row">
				<div className="col-md-9">
					HomePage
				</div>
			</section>
		)

	}
}

render(
	<HomePage />,
	document.getElementById('app')
)
```
* Passing Props (Data) to component

```js
const data = {
	appTitle: "List of Posts",
	posts: [
		{
			title: "1. sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "Bacon ipsum dolor amet meatloaf turducken alcatra doner cupim. Bresaola kevin landjaeger doner, cow leberkas ground round bacon pig frankfurter shank tenderloin beef ribs beef. Swine fatback kevin sirloin."
		},
		{
			title: "2. sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "Bacon ipsum dolor amet meatloaf turducken alcatra doner cupim. Bresaola kevin landjaeger doner, cow leberkas ground round bacon pig frankfurter shank tenderloin beef ribs beef. Swine fatback kevin sirloin."
		},
		{
			title: "3. sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "Bacon ipsum dolor amet meatloaf turducken alcatra doner cupim. Bresaola kevin landjaeger doner, cow leberkas ground round bacon pig frankfurter shank tenderloin beef ribs beef. Swine fatback kevin sirloin."
		},
		{
			title: "4. sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "Bacon ipsum dolor amet meatloaf turducken alcatra doner cupim. Bresaola kevin landjaeger doner, cow leberkas ground round bacon pig frankfurter shank tenderloin beef ribs beef. Swine fatback kevin sirloin."
		},
		{
			title: "5. sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
			body: "Bacon ipsum dolor amet meatloaf turducken alcatra doner cupim. Bresaola kevin landjaeger doner, cow leberkas ground round bacon pig frankfurter shank tenderloin beef ribs beef. Swine fatback kevin sirloin."
		}
	]
}

export default data

```

```js
render(
	<HomePage data={data} />,
	document.getElementById('app')
)
```

* Create the `HomePage` file, iterate over props, then render a list

```js
class HomePage extends React.Component {
	render () {
		const { posts, appTitle } = this.props.data
		console.log(posts)
		return (
			<section className="row">
				<h1>{appTitle}</h1>
				{posts.map((post, index) => {
                    return(
                        <div key={index} className="col-sm-12 col-xs-12 col-md-4 col-lg-3">
                            <div className="thumbnail bootsnipp-thumb">
                                <h4 className="list-group-item-heading">{post.title}</h4>
                                <p className="list-group-item-text">{post.body}</p>
                            </div>
                        </div>
                    )
                })}
			</section>
		)
	}
}

HomePage.propTypes = {
	data: PropTypes.object,
	appTitle: PropTypes.string
}

export default HomePage
```
* Handling with events

```js
randomColor(event){
	const color = `rgb(${Math.floor(Math.random()*256)} , ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`
	event.target.setAttribute('style', `color: ${color}`)
}
<h4 className="list-group-item-heading" onClick={event => this.randomColor(event)}>
	{post.title}
</h4>
```

```js
constructor(props){
	super(props)
	this.randomColor = this.randomColor.bind(this)
}
<h4 className="list-group-item-heading" onClick={this.randomColor}>
	{post.title}
</h4>
```
> Note the HotRealoading, isn't reloading the browser

* Explanation of LifeCycle

```js
componentWillMount() {
	console.log('Will Be Mounted, occurs before render()')
}
componentDidMount() {
	console.log('Was Mounted, occurs after render()')
}
```
* Fetching Data from API

```js
componentWillMount(){
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => {
			return response.json()
		})
		.then(data => {
			console.log(data)
		})
}
```
## Second example
#### Topics

* Dynamic Attr (states)
* Forms

#### Example
* Last example, add the state to render the posts

```js
// 1. Inside constructor this.state = { posts: [] }
// 2. Inside render const homePagePosts = this.state.posts || []
// 3. Inside the Promise this.setState({posts: data})
// 4. Remove props from index.js
```
* Create FormPage file

```js
import FormPage from './components/form/FormPage'
```

* Explanation about `defaultValue` and `value` for forms
* Set the defaultValue for first inputs section

```js
this.state = {
	billingName: 'Daniel',
	shippingName: '',
	sameAddress: false
}
// const { state } = this
// defaultValue={state.billingName}
```

* Update the checkbox, to set `sameAddress`

```js
<input 
	name="check" 
	type="checkbox" 
	onChange={event => this.setState({ sameAddress: event.target.checked })}/>
	Same as billing
```
* Set the values of the second inputs section

```js
value={state.sameAddress ? state.billingName : state.shippingName}
```

* Set the `onChange` to update the inputs values

```js
onChange={event => this.setState({ billingName: event.target.value })}


<input
	type="text"
	name="ShippingName"
	value={state.sameAddress ? state.billingName : state.shippingName}
	onChange={(event) => {
		if (!state.sameAddress){
			this.setState({ shippingName: event.target.value })
		}
	}}
/>
```
* Add `serializeForm`

```js
import serializeForm from 'form-serialize'
```


*  Serialize and send the data

```js
handleSubmit(e) {
    e.preventDefault()
    const values = serializeForm(e.target, { hash: true })
    console.log(values)
}

// Add the button tag to form
//Add the onSubmit method
<form onSubmit={this.handleSubmit}>
<button>click</button>
```
### Switch to first and second example
#### Topics

* Nested Components (instead of Inheritance)
* Routing

#### Example
* Create App (Layout) Page

```js
class App extends React.Component {
	render () {
		return (
			<div className="container">
				{this.props.children}		
			</div>
		);
	}
}
export default App;
```
* Render the HomePage inside the the new App wrapper

```js
render(
	<App>
		<HomePage data={data} />
	</App>,
	document.getElementById('app')
)
```
* Import the Header and the Footer on the App layout, then use them

```js
import Header from './common/Header'
import Footer from './common/Footer'

<div className="container">
	<Header/>
	{this.props.children}
	<Footer/>
</div>
```
* Let's create a Router, then we can access to HomePage and FormPage

```js
import {browserHistory, Router, Route, IndexRoute} from 'react-router'


render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={() => <HomePage data={data}/>}/>
			<Route path="/form" component={FormPage}/>
		</Route>
	</Router>
	,document.getElementById('app')
)
```
