// var GroceryListItem = (props) => (
// 	<ul>
// 		<li>{props.groceryItems[0]}</li>
// 		<li>{props.groceryItems[1]}</li>
// 	</ul>


	// );


// var GroceryList = (props) => (

// 	<GroceryListItem groceryItems={['chocolate', 'nescafe']} />
// 	);


var GroceryList = (props) => (
	<ul>
		{props.items.map(item =>
		<GroceryListItem key={item.toString()} item = {item} />
		)}
	</ul>
	);
		


class GroceryListItem extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
        	selected: false
     	};
	}

	onListItemClick() 
	{
	    this.setState({
	      selected: !this.state.selected
	    });
    }
	
	render()
	{

		var style = {
      		textDecoration: this.state.selected ? 'line-through' : 'none'
    	};
		return (
			<li style={style} onClick={this.onListItemClick.bind(this)}> {this.props.item}</li>
			);
	}
}


var items = ['banana','apple','cake'];

ReactDOM.render(<GroceryList items={items} />, document.getElementById("app"));

