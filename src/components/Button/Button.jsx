
export const Button = ({ onSubmit, page, searchValue }) => {

const handlerSubmit = () => {
    page = page + 1;
    onSubmit(searchValue, page);
}

return (
    <button type="submit" className="Button" id="Button" onClick={handlerSubmit}>
      <span className="Button-label">Load more</span>
    </button>
)}