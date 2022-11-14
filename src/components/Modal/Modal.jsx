import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.onClickEscape)
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.onClickEscape)
    }

    onClickEscape = (e) => {
        if(e.code === 'Escape') {
        this.props.onClose();
        }
    }

    onClickBackdrop = (e) => {
        if(e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

filtered = this.props.searchPage.hits.filter(({ id }) => id === this.props.selectedId);

render() {
return createPortal(
<div className="Overlay" onClick={this.onClickBackdrop}>
  <div className="Modal">
    <img src={this.filtered[0].largeImageURL} alt={this.filtered[0].tags} />
  </div>
</div>, modalRoot,

)}}