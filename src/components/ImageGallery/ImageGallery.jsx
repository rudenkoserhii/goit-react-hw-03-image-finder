import { ImageGalleryItem } from './ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled'
import PropTypes from 'prop-types';

export const ImageGallery = ({ searchPage, toggleModal }) => {

const onClickTransit = (id) => {
    toggleModal(id);
}

    return (

<ImageGalleryStyled className="ImageGallery">
    { searchPage.map(({ id, webformatURL, tags }) => <ImageGalleryItem onClickTransit={onClickTransit} id={id} key={id} webformatURL={webformatURL} tags={tags}/>)}
</ImageGalleryStyled>
)};


ImageGallery.propTypes = {
    searchPage: PropTypes.array.isRequired,
    toggleModal: PropTypes.func.isRequired,
};