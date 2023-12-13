// Import necessary dependencies and components
import React, { useState, useEffect, ChangeEvent, Fragment, useContext } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';
// Import Alert component from the correct path
import Alert from '../../components/UI/Alert/Alert'; 
// Import necessary GraphQL types and hooks from the correct path
import {
  SaveEventMutation,
  useSaveEventMutation,
} from '../../generated/graphql'; 
// Import IAuth type from the correct path
import { IAuth } from '../../types'; 
import { MdSaveAlt } from 'react-icons/md';
import { Button } from 'react-bootstrap';
// Import LoginContainer and BtnSpinner from the correct paths
import LoginContainer from '../user/LoginContainer/LoginContainer'; 
import { BtnSpinner } from '../../components/UI/BtnSpinner/BtnSpinner'; 

// ... (rest of the code remains the same)

// Define the AddEvent component
function AddEvent() {
  // ... (rest of the code remains the same)
}

// CustomAlert component for displaying different alerts
const CustomAlert = ({
  auth,
  data,
  error,
  onClose,
  onLogin,
}) => {
  // ... (rest of the code remains the same)
};
