import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar'
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Wrap } from './App.styled';

const APIKEY = '30180377-fac51c2acf971fb8cf8c6aeca';
const URL = `https://pixabay.com/api/?&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`;
const Status = {
    IDLE: 'idle',
    PENDING: 'pending',
    RESOLVED: 'resolved',
    REJECTED: 'rejected',}


export class App extends Component {
  state = {
    searchPage: null,
    error: null,
    status: Status.IDLE,
    searchValue: '',
    page: 0,
    showModal: false,
    selectedId: 0,
  };

  componentDidUpdate(_, prevState) {
    const prevValue = prevState.searchValue;
    const nextValue = this.state.searchValue;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    if (prevValue !== nextValue || prevPage !== currentPage) {
      this.setState({ status: Status.PENDING });

      fetch(`${URL}&page=${currentPage}&q=${nextValue}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          return Promise.reject(new Error(`No pictures with word ${this.props.searchValue}`));
        })
        .then(searchPage => {
          if (searchPage.total === 0) {
            return Promise.reject(new Error(`No pictures with word "${this.state.searchValue}"`))
          }
          const oldData = JSON.parse(localStorage.getItem('searchPage'));
          if(oldData) {
            localStorage.setItem('searchPage', JSON.stringify(oldData.concat(searchPage.hits)));
            } else {
            localStorage.setItem('searchPage', JSON.stringify(searchPage.hits));}
          this.setState({ searchPage: JSON.parse(localStorage.getItem('searchPage')), status: Status.RESOLVED });
        })
        .catch(error => {this.setState({ error, status: Status.REJECTED })
        });
    };
  }

  
  onSubmit = (value, page) => {
    this.setState({page: page});
    this.setState({ searchValue: value });
  }

  toggleModal = (id) => {
    this.setState({selectedId: id});
    this.setState(({ showModal }) => ({ showModal: !showModal}));
  };

  render() {
    const { searchPage, error, status, showModal, selectedId, page, searchValue} = this.state;

    return (
      <main className="App">
        <Searchbar onSubmit={this.onSubmit}/>
        <Wrap>

          {(status === Status.RESOLVED) && (<>
<ImageGallery searchPage={searchPage} toggleModal={this.toggleModal}/>
<Button onSubmit={this.onSubmit} page={page} searchValue={searchValue}/>
</>)}
          {(status === Status.PENDING) && <Loader/>}
          {(status === Status.REJECTED) && <p>{error.message}</p>}
          {(showModal) && <Modal selectedId={selectedId} searchPage={searchPage} onClose={this.toggleModal}/>}
        </Wrap>
      </main>
  )}
}

