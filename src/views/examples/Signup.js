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


//auth & redux
import { signupUser } from "auth/actions/userActions";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

// Loader spinner
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { StyledContainer } from "components/Styles";
// Icons
import { FiMail, FiLock, FiUser, FiPhone } from "react-icons/fi";

const Signup = ({ signupUser }) => {
  const history = useHistory();
  return (
    <div>
      <StyledContainer>
      <StyledFormArea>
        <Avatar image={Avi} />
        <StyledTitle color={colors.theme} size={30}>
          Member Signup
        </StyledTitle>

        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            phone: "",
            name: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            name: Yup.string().required("Required"),
            phone: Yup.number().required("Required"),
            password: Yup.string()
              .required("Required")
              .min(8, "Password is too short"),
            repeatPassword: Yup.string()
              .required("Required")
              .oneOf([Yup.ref("password")], "Password must match"),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            signupUser(values, history, setFieldError, setSubmitting);
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <TextInput
                name="name"
                type="text"
                placeholder="full name"
                icon={<FiUser />}
                label="Full Name"
              />
              <TextInput
                name="email"
                type="text"
                label="Email Address"
                icon={<FiMail />}
                placeholder="abc@example.com"
              />
              <TextInput
                name="phone"
                type="tel"
                label="phone Number"
                icon={<FiPhone />}
              />
              <TextInput
                name="password"
                label="Password" 
                type="password"
                icon={<FiLock />}
                placeholder="********"
              />
              <TextInput
                name="repeatPassword"
                type="password"
                label="Repeat Password"
                icon={<FiLock />}
                placeholder="********"
              />

              <ButtonGroup>
                {!isSubmitting && (
                  <StyledFormButton type="submit">Signup</StyledFormButton>
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
          Already have an account? <TextLink to="/login">Login</TextLink>
        </ExtraText>
      </StyledFormArea>
      </StyledContainer>
    
    </div>
  );
};

export default connect(null, { signupUser })(Signup);
