import "./Searchbox.css";
import { useState } from "react";
import SearchResult from "./SearchResult";
import Search from "@mui/icons-material/Search";
import { useEffect } from "react";
const axios = require("axios");

const Searchbox = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);

  const keys = ["first_name", "last_name", "email"];

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get(`http://localhost:8000?q=${query}`);
      setUsers(data);
    };
    fetchUsers();
  }, [query]);

  return (
    <div>
      <div className="searchbox-container">
        <div className="searchbox-input-container">
          <Search />
          <input
            type="text"
            placeholder="Search for people"
            className="searchbox-input"
            onInput={(e) => setQuery(e.target.value)}
          />
        </div>
        <ul className={"search-list " + (query ? "" : "hidden")}>
          {users.map((user) => (
            <li key={user.id}>
              <SearchResult user={user} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Searchbox;
