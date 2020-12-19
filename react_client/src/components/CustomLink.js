import React from 'react';
// ReactRouter Link
import { Link as RouterLink } from 'react-router-dom';
// Prop Type checking
import PropTypes from 'prop-types';
// Material UI components
import { Link } from '@material-ui/core';

export default function CustomLink(props) {
  const { to } = props;

  const renderLink = React.useMemo(
    () => React.forwardRef((itemProps, ref) => <RouterLink to={to} ref={ref} {...itemProps} />),
    [to],
  );

  return (
    <Link 
      component={renderLink}
      color="inherit"
    >
      {props.children}
    </Link>
  );
}

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
};