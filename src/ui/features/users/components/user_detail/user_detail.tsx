import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserDetailFetch, selectUserDetail, selectUserError, selectUserLoading } from "../../../../../state/users/users.slice.ts";
import { useLocation } from "react-router-dom";
import LoadingSpinner from "../../../../components/loading_spinner/loading_spinner.tsx";
import Styled from "./user_detail.styled.ts";
import Card from "../../../../components/card/card.tsx";
import { Avatar, Edit, Back } from "../../../../assets/icons";

export default function UserDetail() {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const userDetail = useSelector(selectUserDetail);
  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  useEffect(() => {
    dispatch(getUserDetailFetch(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Styled.ErrorMessage>{"An error has occurred while loading the user's details. Please retry."}</Styled.ErrorMessage>;
  }

  return (
    <Card widthAuto>
      <Styled.Wrapper>
        <Styled.IconLink className={"absolute"} href={`/users/`}>
          Back <Back />
        </Styled.IconLink>
        <Styled.Avatar>{userDetail?.avatar ? <img src={userDetail.avatar} alt={userDetail.name} /> : <Avatar />}</Styled.Avatar>
        <Styled.Title>
          Name: <Styled.Thin>{userDetail?.name}</Styled.Thin>
        </Styled.Title>
        <Styled.Element>
          Email: <Styled.Thin>{userDetail?.email}</Styled.Thin>
        </Styled.Element>
        <Styled.Element>
          ID: <Styled.Thin>{userDetail?.id}</Styled.Thin>
        </Styled.Element>
        <Styled.IconLink href={`/users/${userDetail?.id}/edit`}>
          Edit <Edit />
        </Styled.IconLink>
      </Styled.Wrapper>
    </Card>
  );
}
