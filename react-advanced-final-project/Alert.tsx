import React, { FC, ReactNode } from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { BsCheck2Circle } from 'react-icons/bs';
import { Alert as BootstrapAlert } from 'react-bootstrap';
import styled from 'styled-components';

// Define the props for the Alert component
type Props = {
  type: string;
  msg: string;
  dismissible?: boolean;
  btn?: ReactNode;
  onClose?: () => void;
};

// Alert component
const Alert: FC<Props> = ({ type, msg, dismissible = true, btn, onClose }) => {
  return (
    <AlertContent variant={type} onClose={onClose} dismissible={dismissible}>
      {/* Display success or warning icon based on the alert type */}
      {type === 'success' ? (
        <BsCheck2Circle size={25} />
      ) : (
        <IoWarningOutline size={25} />
      )}
      <span>{msg}</span>
      {btn && <span>{btn}</span>}
    </AlertContent>
  );
};

// Styled AlertContent component
const AlertContent = styled(BootstrapAlert)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 4px;
  flex-wrap: nowrap;
  padding: 8px;

  // Custom styling for the close button in a dismissible alert
  &.alert-dismissible .btn-close {
    padding: 0;
    top: 12px;
    right: 6px;
  }
`;

// Memoize the Alert component for performance optimization
export default React.memo(Alert);
