import Card from "../../../../components/card/card.tsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsersFetch, selectUserError, selectUserLoading, selectUsers } from "../../../../../state/users/users.slice.ts";
import Styled from "./users_list.styled.ts";
import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import { Eye } from "../../../../assets/icons";
import LoadingSpinner from "../../../../components/loading_spinner/loading_spinner.tsx";

export default function UsersList() {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = searchParams.get("page") ? +searchParams.get("page")! : 1;
  const [pageNumber, setPageNumber] = useState(initialPage);
  // TODO Pagination: If API returns a lot of pages, you should show current page + two or three previous and next numbers
  const pages: () => Array<number> = useCallback(() => {
    const pages = Array.apply("", Array(users?.totalPages)).map(function (_, i) {
      return i + 1;
    });
    return pages;
  }, [users?.totalPages]);

  const prevOrNextHandler = (type: "prev" | "next") => {
    if (type === "prev" && users?.totalPages) {
      pageNumber !== 1 ? setPageNumber(pageNumber - 1) : setPageNumber(users?.totalPages);
    } else if (type === "next" && users?.totalPages) {
      pageNumber !== users?.totalPages ? setPageNumber(pageNumber + 1) : setPageNumber(1);
    }
  };

  useEffect(() => {
    dispatch(getUsersFetch(pageNumber));
  }, [dispatch, pageNumber]);

  useEffect(() => {
    setSearchParams({ page: `${pageNumber}` });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  const isLoading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <Styled.ErrorMessage>{"An error has occurred while loading the users list. Please retry."}</Styled.ErrorMessage>;
  }

  return (
    <Card>
      {users && (
        <Styled.TableWrapper>
          <Styled.Table>
            <thead>
              <tr>
                <Styled.THead>Image</Styled.THead>
                <Styled.THead>Name</Styled.THead>
                <Styled.THead>Email</Styled.THead>
                <Styled.THead></Styled.THead>
              </tr>
            </thead>
            <tbody>
              {users?.items.map((item) => (
                <tr key={item.id}>
                  <Styled.TD>
                    <Styled.Centerer>
                      <img src={item.avatar} alt={item.name} />
                    </Styled.Centerer>
                  </Styled.TD>
                  <Styled.TD>{item.name}</Styled.TD>
                  <Styled.TD>
                    <a href={`mailto:${item.email}`}>{item.email}</a>
                  </Styled.TD>
                  <Styled.TD>
                    <Styled.IconLink href={`/users/${item.id}/`}>
                      View More <Eye />
                    </Styled.IconLink>
                  </Styled.TD>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>
                  <Styled.PaginationWrapper>
                    <Styled.PaginationButton type="button" onClick={() => prevOrNextHandler("prev")}>
                      {"<"}
                    </Styled.PaginationButton>
                    {pages().map((page) => (
                      <Styled.PaginationButton
                        type="button"
                        key={page}
                        onClick={() => setPageNumber(page)}
                        className={page === pageNumber ? "current" : ""}
                      >
                        {page}
                      </Styled.PaginationButton>
                    ))}
                    <Styled.PaginationButton type="button" onClick={() => prevOrNextHandler("next")}>
                      {">"}
                    </Styled.PaginationButton>
                  </Styled.PaginationWrapper>
                </td>
              </tr>
            </tfoot>
          </Styled.Table>
        </Styled.TableWrapper>
      )}
    </Card>
  );
}
