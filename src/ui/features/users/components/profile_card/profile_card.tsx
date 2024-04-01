import { useSelector } from "react-redux";
import { selectUser } from "../../../../../state/session/session.slice.ts";
import Card from "../../../../components/card/card.tsx";
import { locator } from "../../../../../core/app/ioc";
import type { IEnvVars } from "../../../../../core/app/domain/interfaces/env_vars.ts";
import { TYPES } from "../../../../../core/app/ioc/types.ts";
import Styled from "./profile_card.styled.ts";
import { Avatar } from "../../../../assets/icons";

export default function ProfileCard() {
  const profile = useSelector(selectUser);
  const authURL = locator.get<IEnvVars>(TYPES.IEnvVars).authURL;

  return (
    <Card widthAuto>
      {profile && (
        <Styled.Wrapper>
          <Styled.Avatar>{profile.avatar ? <img src={profile.avatar} alt={profile.name} /> : <Avatar />}</Styled.Avatar>
          <Styled.TextGroup>
            <Styled.LogOutButton href={`${authURL}/auth/logout`}>log Out</Styled.LogOutButton>
            <h1>
              Welcome<Styled.LightSpan>, {profile.name}!</Styled.LightSpan>
            </h1>
            {profile.email && <Styled.Email>{profile.email}</Styled.Email>}
          </Styled.TextGroup>
        </Styled.Wrapper>
      )}
    </Card>
  );
}
