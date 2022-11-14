import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ webformatURL, tags, id, onClickTransit }) => {


    const onClick = () => {
        onClickTransit(id);
    };

    return  (

<li className="ImageGalleryItem" onClick={onClick} id={id}>
  <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
</li>

)};

ImageGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClickTransit: PropTypes.func,
};