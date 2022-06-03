class App extends React.Component {
    state = {
        list: list,
        item: '',
    }

    handleFilter = (event) => {
        const tempReceipts = receipts.filter(receipt => receipt.person.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({receipts: tempReceipts});
    }

    handleChange = (e) => {
        const property = e.target.id;
        const value = e.target.value;
        this.setState({[property]:value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     const receipts = this.state.receipts.filter(receipt => receipt.person !== event.target.name);
    //     // const receipts = this.state.receipts.map((obj)=>{
    //     //     if(obj.person === event.target.name){
    //     //         obj.paid = true;
    //     //     }
    //     //     return obj;
    //     // })
    //     this.setState({receipts});
    // }

    render(){
        return(
            <React.Fragment>
                <h1>Shooping List</h1>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Item:</label>
                    <input type="text" value={this.state.item} onChange={this.handleChange} id="item"></input>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text"  id="brand"></input>
                    <label htmlFor="units">Units:</label>
                    <input type="text" id="units"></input>
                    <label htmlFor="quantity">Quantity:</label>
                    <input type="Number" min="0" id="quantity"></input>
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