import React from "react";
import { Formik, Form } from "formik";

import { useSelector, useDispatch } from "react-redux";
import { selectPositions } from "../../redux/usersSelector";
import { getUsers, sendUser } from "../../redux/usersOperations";
import { SignupSchema } from "../../utils/validation";
import PersonalDataForm from "./PersonalDataForm/PersonalDataForm";
import Select from "./Select/Select";
import FileUpload from "./FileUpload/FileUpload";
import { FormContainer } from "./SignUp.styled";
import { GlobalContainer } from "../../globalContainer/GlobalContainer";

const SignUp = () => {
  const positions = useSelector(selectPositions);

  const dispatch = useDispatch();

  return (
    <GlobalContainer>
      <FormContainer id="signup">
        <Formik
          initialValues={{
            name: "",
            email: "",
            phone: "",
            position_id: positions[0]?.id,
            photo: "",
          }}
          validationSchema={SignupSchema}
          validateOnChange={true}
          onSubmit={(values, { setSubmitting }) => {
            let formData = new FormData();
            Object.keys(values).forEach((value) => {
              formData.append(value, values[value]);
            });

            dispatch(sendUser(formData))
              .unwrap()
              .then((result) => {
                console.log("then after unwrap");
                dispatch(getUsers({ page: 1 }));
                setSubmitting(false);
              })
              .catch((error) => {
                console.error("Error sending user:", error);
                setSubmitting(false);
              });
          }}
        >
          {({ isSubmitting, setFieldValue, errors, touched, isValid }) => (
            <Form>
              <PersonalDataForm errors={errors} touched={touched} />
              <Select setFieldValue={setFieldValue} />
              <FileUpload
                setFieldValue={setFieldValue}
                errors={errors}
                touched={touched}
              />
              <div className="form__sign-up-btn__container">
                <button
                  type="submit"
                  disabled={isSubmitting || !isValid}
                  className="form__sign-up-btn"
                >
                  Sign up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </GlobalContainer>
  );
};

export default SignUp;
