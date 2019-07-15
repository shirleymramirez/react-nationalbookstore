import React from 'react';

class AddBook extends React.Component {
    state = {
        title: "",
        subtitle: "",
        author: "",
        published: "",
        publisher: "",
        pages: "",
        description: "",
        website:"",
        inCart: false,
        price: null,

    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state)
    }
    render() {
        return (
            <div>
                <h1 className="editAddHeader">Add New Book</h1>
                <form onSubmit={this.handleSubmit} className="addBookForm">
                    <div className="newBookDetails">
                        <label>Title </label> 
                        <input
                            type="text" 
                            onChange={this.handleChange} 
                            value={this.state.title} 
                            name="title" 
                        />
                        <label>SubTitle </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.subtitle}
                            name="subtitle"
                        />
                        <label>Author</label>
                        <input
                            type="text" 
                            onChange={this.handleChange} 
                            value={this.state.author} 
                            name="author" 
                        />
                        <label>Published </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.published}
                            name="published"
                        />
                        <label>Publisher </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.publisher}
                            name="publisher"
                        />
                        <label>Pages </label>
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.pages}
                            name="pages"
                        />
                        <label>Description </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.description}
                            name="description"
                        />
                        <label>Website </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.website}
                            name="website"
                        />
                        <label>Incart </label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.inCart}
                            name="inCart"
                        />
                        <label>Price</label>
                        <input
                            type="number"
                            onChange={this.handleChange}
                            value={this.state.price}
                            name="price"
                        />
                    </div>
                    <div className="saveBookButton">
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default AddBook;