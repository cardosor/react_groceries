class App extends React.Component {
    state = {
        list: list,
        item: '',
        brand:'',
        units:'',
        quantity:0
    }

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        this.setState({[property]:value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            item: this.state.item,
            brand: this.state.brand,
            units: this.state.units,
            quantity: this.state.quantity,
            isPurchased: false
        }
        const list = [...this.state.list, newItem]
        this.setState({
            list: list,
            item: '',
            brand:'',
            units:'',
            quantity:0
        })
        
    }

    render(){
        return(
            <React.Fragment>
                <h1>Shooping List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Item:</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item"></input>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" value={this.state.brand} onChange={this.handleChange} id="brand"></input>
                    <label htmlFor="units">Units:</label>
                    <input type="text" value={this.state.units} onChange={this.handleChange} id="units"></input>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="Number" value={this.state.quantity} onChange={this.handleChange} min="0" id="quantity"></input>
                    <input type="submit"></input>
                </form>
                <hr/>
                <div className="display">
                    {this.state.list.map((item) => !item.isPurchased && <Item item={item} />)}
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.container')
)