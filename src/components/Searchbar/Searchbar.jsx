import { Component } from 'react';

export class Searchbar extends Component {
state = {
    value: '',
}

// handlerChange = (e) => {
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
// }

onChange = e => {
    this.setState({ value: e.currentTarget.value.toLowerCase() });
    };

handleSubmit = e => {
    e.preventDefault();


    if (this.state.value.trim() === '') {
        alert('No search word entered!');
        return;
    }
    localStorage.clear();
    this.props.onSubmit(this.state.value, 1);
    this.setState({ value: '' });

    e.target.reset();
};


    render() {
        return (
<header className="Searchbar" onSubmit={this.handleSubmit}>
  <form className="SearchForm">
    <button type="submit" className="SearchForm-button">
        {<span className="SearchForm-button-label">Search</span>}
    </button>
    <input
        name="searchValue"
        className="SearchForm-input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        onChange={this.onChange}
    />
  </form>
</header>
)}};


// ContactForm.propTypes = {
//     options: PropTypes.array.isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
// };