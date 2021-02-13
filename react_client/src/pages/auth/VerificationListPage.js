import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
// custom components
import VerificationCardList from '../../components/VerificationCardList';
// child pages
import VerificationDetailsPage from './VerificationDetailsPage';

export default function VerificationListPage(props) {
  let match = useRouteMatch();
  const { verificationList } = props;
  
  return (
    <Switch>
      <Route path={`${match.path}/:verificationID`}>
        <VerificationDetailsPage verificationList={verificationList} />
      </Route>
      <Route path={match.path}>
        <h3 style={{textAlign: "center"}}>QR Codes List</h3>
        <VerificationCardList verificationList={verificationList} />
      </Route>
    </Switch>
  )
}