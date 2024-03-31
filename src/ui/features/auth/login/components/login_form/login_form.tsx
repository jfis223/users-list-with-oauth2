import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { localLoginFetch, selectLoginError } from "../../../../../../state/session/session.slice.ts";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMemo } from "react";
import { object, string } from "yup";
import { ControlledInput } from "../../../../../components/form/input/input.tsx";
import Styled from "./login_form.styled.ts";

interface LoginFormValues {
  email: string;
  password: string;
}

const defaultValues: LoginFormValues = {
  email: "",
  password: ""
};

export default function LoginForm() {
  const dispatch = useDispatch();
  const hasError = useSelector(selectLoginError);

  const handleSubmit = useCallback(
    async (values: LoginFormValues) => {
      dispatch(localLoginFetch({ email: values.email, password: values.password }));
    },
    [dispatch]
  );

  const validationSchema = useMemo(
    () =>
      object().shape({
        email: string().required("Required").email("Invalid Email"),
        password: string().required("Required")
      }),
    []
  );

  const form = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema, { abortEarly: false }),
    reValidateMode: "onChange"
  });

  return (
    <FormProvider {...form}>
      <Styled.Form onSubmit={form.handleSubmit(handleSubmit)}>
        <ControlledInput name="email" label={"Email"} />
        <ControlledInput name="password" type="password" label={"Password"} />
        <Styled.SubmitButton type="submit" disabled={form.formState.isSubmitting}>
          Log In
        </Styled.SubmitButton>
        {hasError && <Styled.ErrorMessage>Invalid credentials. Please try again.</Styled.ErrorMessage>}
      </Styled.Form>
    </FormProvider>
  );
}
