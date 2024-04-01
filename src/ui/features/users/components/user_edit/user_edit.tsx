import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { getUserDetailFetch, selectUserError, patchUserDetail } from "../../../../../state/users/users.slice.ts";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { object, string } from "yup";
import { ControlledInput } from "../../../../components/form/input/input.tsx";
import Styled from "./user_edit.styled.ts";
import { selectUserDetail } from "../../../../../state/users/users.slice.ts";
import Card from "../../../../components/card/card.tsx";
import { selectUserPatchSuccess } from "../../../../../state/users/users.slice.ts";
import type EditUserInput from "../../../../../core/users/domain/view_models/edit_user_input.ts";

interface EditUserFormValues {
  name: string;
  job: string;
}

const defaultValues: EditUserFormValues = {
  name: "",
  job: ""
};

export default function UserEdit() {
  const dispatch = useDispatch();
  const hasError = useSelector(selectUserError);
  const userDetail = useSelector(selectUserDetail);
  const success = useSelector(selectUserPatchSuccess);

  const handleSubmit = useCallback(
    async (values: EditUserFormValues) => {
      if (userDetail) {
        dispatch(patchUserDetail({ name: values.name, job: values.job, id: userDetail?.id } as EditUserInput));
      }
    },
    [dispatch, userDetail]
  );

  const validationSchema = useMemo(
    () =>
      object().shape({
        name: string().required("Required"),
        job: string().required("Required")
      }),
    []
  );

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema, { abortEarly: false }),
    reValidateMode: "onChange"
  });

  useEffect(() => {
    if (!userDetail?.id) {
      const id = location.pathname.split("/")[2];
      dispatch(getUserDetailFetch(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (userDetail) {
      form.setValue("name", userDetail.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userDetail]);

  return (
    <Card width={400}>
      <Styled.Wrapper>
        <h1>{"Edit user"}</h1>
        <FormProvider {...form}>
          <Styled.Form onSubmit={form.handleSubmit(handleSubmit)}>
            <ControlledInput name="name" label={"Name"} />
            <ControlledInput name="job" label={"Job"} />
            <Styled.SubmitButton type="submit" disabled={form.formState.isSubmitting}>
              Submit
            </Styled.SubmitButton>
            {hasError && <Styled.ErrorMessage>{"There's been a problem. Please try again."}</Styled.ErrorMessage>}
            {success && (
              <Styled.SuccessMessage>
                {"User has been edited"} <a href={`/users/${userDetail?.id}`}>Go back</a>
              </Styled.SuccessMessage>
            )}
          </Styled.Form>
        </FormProvider>
      </Styled.Wrapper>
    </Card>
  );
}
