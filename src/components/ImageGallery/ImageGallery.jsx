import { ImageGalleryItem } from './ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchPage, toggleModal }) => {

const onClickTransit = (id) => {
    toggleModal(id);
}

    return (

<ul className="ImageGallery">
    { searchPage.map(({ id, webformatURL, tags }) => <ImageGalleryItem onClickTransit={onClickTransit} id={id} key={id} webformatURL={webformatURL} tags={tags}/>)}
</ul>
)};


ImageGallery.propTypes = {
    searchPage: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired,
};