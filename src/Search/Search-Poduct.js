import axios from "axios";
import { Component } from "react";

class SearchPro extends Component {
    state = {
        product: [],
        searchTerm: ""
    };

    fetchProducts = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        this.setState({
            product: response.data
        });
    };

    changeFetch = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    };

    componentDidMount() {
        this.fetchProducts();
    }

    render() {
        const filteredProducts = this.state.product.filter((val) =>
            val.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
        );

        return (
            <>
                <input type="text" onChange={this.changeFetch} />
                {filteredProducts.map((val) => (
                    <h2 key={val.id}>{val.name}</h2>
                ))}
            </>
        );
    }
}

export default SearchPro;
