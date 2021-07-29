import React from 'react';
import useGithub from '../../hooks/githubHooks';
import * as S from './styled'


const Profile = () =>{
  const {githubState} = useGithub();

  return(
      <S.Wrapper>
        <S.WrapperImg src={githubState.user.avatar} alt="avatar user" />
        <S.WrapperInfo>
          <h1>{githubState.user.name}</h1>
          <S.WrapperUser>
            <h3>user name:</h3>
            <a 
            href={githubState.user.html_url} 
            target="_blank" 
            rel="noreferrer">{githubState.user.login}</a>
          </S.WrapperUser>
          <S.WrapperFollows>
            <div>
              <h4>followers</h4>
              <span>{githubState.user.followers}</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>{githubState.user.following}</span>
            </div>
            <div>
              <h4>Gists</h4>
              <span>{githubState.user.public_gists}</span>
            </div>
            <div>
              <h4>Repos</h4>
              <span>{githubState.user.public_repos}</span>
            </div>
          </S.WrapperFollows>
        </S.WrapperInfo>
      </S.Wrapper>
  );
};
export default Profile;