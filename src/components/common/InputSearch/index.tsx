import { Box, InputBase } from "@mui/material";
import styled from "styled-components"
import SearchIcon from "@mui/icons-material/Search"
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = styled(Box)`
  display:flex;
  color: #20b2aa;
  align-items: center;
  gap:5px;
  :hover {
    color: #2e8b57;
  }
`;

const SearchIconWrapper = styled(Box)``;

const StyledInputBase = styled(InputBase)`
  .MuiInputBase-input {
  }
`;

const InputSearch = () => {
  
  let [searchParams, setSearchParams] = useSearchParams();
  const history = useNavigate();

  let search = searchParams.get("search") === null ? "" : searchParams.get("search");

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon color="secondary"/>
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Buscar..."
        value={search}
        onChange={(e) => {
          history(`/admin?search=${e.target.value}`)
         }}
      />
    </Search>
  );
};

export { InputSearch };
