import { sessionService } from "redux-react-session";
import axios from "axios";

//keeping the remote endpoint around
//const remoteUrl = "https://voltency.herokuapp.com/";
const localUrl = "http://localhost:5000/";
const currentUrl = localUrl;

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  // check credentials and make api calls

  axios
    .post(`${currentUrl}user/signin`, credentials, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // Checking for specific error
        if (message.includes("credentials")) {
          setFieldError("email", message);
          setFieldError("password", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        } else if (message.toLowerCase().includes("email")) {
          setFieldError("email", message);
        }
      } else if (data.status === "SUCCESS") {
        const userData = data.data[0];

        const token = userData._id;

        sessionService
          .saveSession(token)
          .then(() => {
            sessionService
              .saveUser(userData)
              .then(() => {
                history.push("/dashboard");
              })
              .catch((err) => console.error(err));
          })
          .catch((err) => console.error(err));
      }
      // complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));
};

export const signupUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  axios
    .post(
      `${currentUrl}user/signup`,

      credentials,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => {
      const { data } = response;

      if (data.status === "FAILED") {
        const { message } = data;

        // Checking for specific error
        if (message.includes("name")) {
          setFieldError("name", message);
        } else if (message.includes("email")) {
          setFieldError("email", message);
        } else if (message.includes("date")) {
          setFieldError("phone", message);
        } else if (message.includes("password")) {
          setFieldError("password", message);
        }
      } else if (data.status === "PENDING") {
        const { email } = credentials;
        history.push(`/emailsent/${email}`);
      }

      // complete submission
      setSubmitting(false);
    })
    .catch((err) => console.error(err));
};

export const logoutUser = (history) => {
  sessionService.deleteSession();
  sessionService.deleteUser();
  history.push("/");
};
