import s from "./SearchBox.module.css";

const SearchBox = ({ value, onUserText }) => {
  return (
    <>
      <p className={s.text}>Finds contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={value}
        onChange={(e) => onUserText(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
