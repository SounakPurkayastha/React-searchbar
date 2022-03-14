import "./SearchResult.css";

const SearchResult = (props) => {
  const clickHandler = () => {
    console.log(props.user);
  };

  return (
    <div className="search-result" onClick={clickHandler}>
      <div>{props.user.first_name + " " + props.user.last_name}</div>
      <div>{props.user.email}</div>
      <div></div>
    </div>
  );
};

export default SearchResult;
