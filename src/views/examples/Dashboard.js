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
import { useHistory } from "react-router-dom";
import { StyledContainer } from "components/Styles";

//auth & redux
import { connect } from "react-redux";
import { logoutUser } from "auth/actions/userActions";

const Dashboard = ({ logoutUser, user }) => {
  const history = useHistory();
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
        <StyledTitle size={65}>Welcome, {user.name}</StyledTitle>

        <ExtraText color={colors.light1}>{user.email}</ExtraText>
        <ExtraText color={colors.light1}>
          {new Date(user.dateOfBirth).toLocaleDateString()}
        </ExtraText>
        <ButtonGroup>
          <StyledButton to="#" onClick={() => logoutUser(history)}>
            Logout
          </StyledButton>
        </ButtonGroup>
      </StyledFormArea>
    </Welcome>
  );
};

const mapStateToProps = ({ session }) => ({
  user: session.user,
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
