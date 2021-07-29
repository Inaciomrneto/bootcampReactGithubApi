import React, {useState} from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styled';

const Header = () =>{
  const {getUser} = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState(undefined);

  const submitGetUser = () =>{
    if(!usernameForSearch) return;
    return getUser(usernameForSearch)
  }

  return(
    <S.Wrapper>
        <input type="text" placeholder="Digite o username github para pesquisa" onChange={(event) => setUsernameForSearch(event.target.value)}/>
        <button type="submit" onClick={submitGetUser}>Buscar</button>
    </S.Wrapper>
  )
}

export default Header;