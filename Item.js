class Item extends React.Component {
    state = {
        isPurchased: false
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({isPurchased:true});
        this.props.item.isPurchased = true;
    }

    render(){
        const item = this.props.item;
        const displayItem =
            <div className="item-box">
                <ul>
                    <li>
                        <h2>Name: {item.item}</h2>
                    </li>
                    <ul>
                        <li>
                            <h3>Brand: {item.brand}</h3>
                        </li>
                        <li>
                            <h3>{item.quantity}/{item.units}</h3>
                        </li>
                    </ul>
                </ul>
                <button onClick={this.handleSubmit}>Buy</button>
            </div>
        return(
            <React.Fragment>
                {!this.state.isPurchased && displayItem}
            </React.Fragment>
        )
        
    }
}