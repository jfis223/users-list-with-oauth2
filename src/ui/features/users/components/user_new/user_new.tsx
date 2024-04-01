import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { selectUserError, selectUserPostSuccess } from "../../../../../state/users/users.slice.ts";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { object, string } from "yup";
import { ControlledInput } from "../../../../components/form/input/input.tsx";
import Styled from "../user_edit/user_edit.styled.ts";
import Card from "../../../../components/card/card.tsx";
import { postUserDetail } from "../../../../../state/users/users.slice.ts";
import type NewUserInput from "../../../../../core/users/domain/view_models/new_user_input.ts";

interface NewUserFormValues {
  name: string;
  job: string;
}

const defaultValues: NewUserFormValues = {
  name: "",
  job: ""
};

export default function UserNew() {
  const dispatch = useDispatch();
  const hasError = useSelector(selectUserError);
  const newId = useSelector(selectUserPostSuccess);

  const handleSubmit = useCallback(
    async (values: NewUserFormValues) => {
      dispatch(postUserDetail({ name: values.name, job: values.job } as NewUserInput));
    },
    [dispatch]
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

  return (
    <Card width={400}>
      <Styled.Wrapper>
        <h1>New user</h1>
        <FormProvider {...form}>
          <Styled.Form onSubmit={form.handleSubmit(handleSubmit)}>
            <ControlledInput name="name" label={"Name"} />
            <ControlledInput name="job" label={"Job"} />
            <Styled.SubmitButton type="submit" disabled={form.formState.isSubmitting}>
              Create
            </Styled.SubmitButton>
            {hasError && <Styled.ErrorMessage>{"There's been a problem. Please try again."}</Styled.ErrorMessage>}
            {newId && (
              <Styled.SuccessMessage>
                {`User successfully created with ID: ${newId}. `}
                <a href={`/users`}>Go to users</a>
              </Styled.SuccessMessage>
            )}
          </Styled.Form>
        </FormProvider>
      </Styled.Wrapper>
    </Card>
  );
}
