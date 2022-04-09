import {
  StyledTitle,
  StyledFormButton,
  ButtonGroup,
  StyledFormArea,
  colors,
  Avatar,
  ExtraText,
  TextLink,
} from "components/Styles";

import { Formik, Form } from "formik";
import * as Yup from "yup";
import { TextInput } from "components/FormLib";

import Avi from "assets/img/theme/volt.png";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Icons
import { FiMail, FiLock } from "react-icons/fi";

// Auth & redux
import { connect } from "react-redux";
import { loginUser } from "auth/actions/userActions";
import { useHistory, useParams } from "react-router-dom";
import { StyledContainer } from "components/Styles";


// Loader spinner
import Loader from "react-loader-spinner";

const Login = ({ loginUser }) => {
  const history = useHistory();
  const {userEmail} = useParams();

  return (
    <div>
      <StyledContainer>
      <StyledFormArea>
        <Avatar image={Avi} />
        <StyledTitle color={colors.theme} size={30}>
          Member Login
        </StyledTitle>

        <Formik
          initialValues={{
            email: userEmail,
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password is too short")
              .max(30, "Password is too long")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            loginUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                placeholder="olga1@example.com"
                icon={<FiMail />}
              />
              <TextInput
                name="password"
                type="password"
                label="Password"
                placeholder="********"
                icon={<FiLock />}
              />
              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Login</StyledFormButton>
                )}
                {isSubmitting && (
                  <Loader
                    type="ThreeDots"
                    color={colors.theme}
                    height={49}
                    width={100}
                  />
                )}
              </ButtonGroup>
            </Form>
          )}
        </Formik>
        <ExtraText>
          New here? <TextLink to="/signup">Signup</TextLink>
        </ExtraText>
      </StyledFormArea>
      </StyledContainer>
     
    </div>
  );
};

export default connect(null, { loginUser })(Login);
