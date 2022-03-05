import React from "react";
import styled from "styled-components";
import { Avatar, IconButton, Button } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {addDoc} from "firebase/firestore"

const Sidebar = () => {
  const [user] = useAuthState(auth);

  const createChat = async () => {
    const input = prompt(
      "Please enter an email address for a user you want to chat with."
    );

    if (!input) return null;

    // Email validation
    if (EmailValidator.validate(input) && input !== user.email) {
      // We need to add the chat into the DB `chats` collection
      await addDoc(collection(db, "chats"), {
          users: [user.email, input], 
      })
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} />

        <IconsContainer>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconsContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SearchInput placehoder="Search in chats" />
      </Search>

      <SideBarButton onClick={createChat}>Start a new chart</SideBarButton>

      {/* List of chats */}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  border-radius: 2px;
`;

const SearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const SideBarButton = styled(Button)`
  width: 100%;
  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
    /* margin-left: 20px;
    margin-right: 120px; */
  }
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;

const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const IconsContainer = styled.div``;
