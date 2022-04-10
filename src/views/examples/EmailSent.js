import {
  StyledTitle,
  Welcome,
  StyledButton,
  ButtonGroup,
  Avatar,
  StyledFormArea,
  colors,
  ExtraText,
} from "components/Styles";

import Avi from "assets/img/theme/volt.png";

// React router
import { useParams } from "react-router-dom";
import { StyledContainer } from "components/Styles";

const EmailSent = () => {
  const { userEmail } = useParams();

  return (
    <Welcome>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "transparent",
          width: "100%",
          padding: "15px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <Avatar image={Avi} />
      </div>
      <StyledFormArea bg={colors.dark2}>
        <StyledTitle size={65}>Account Confirmation</StyledTitle>

        <ExtraText color={colors.light1}>
          An email with your account confirmation link has been sent to your
          email: <b style={{ color: colors.primary }}>{userEmail}</b>
        </ExtraText>
        <ExtraText color={colors.light1}>
          Check your email and come back to proceed!
        </ExtraText>
        <ButtonGroup>
          <StyledButton to={`/login/${userEmail}`}>Proceed</StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </Welcome>
  );
};

export default EmailSent;
