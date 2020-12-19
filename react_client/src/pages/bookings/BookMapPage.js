import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
// child pages
import BookFormPage from './BookFormPage';
// import constants
import { bookingData } from '../../constants/bookingData';

export default function MemesPage() {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:bookingID`}>
        <BookFormPage bookingData={bookingData} />
      </Route>
      <Route path={match.path}>
        <div>
          <h1>BOOK MAP</h1>
          <p>Toss a Google Maps w/ Markers here</p>
        </div>
      </Route>
    </Switch>
  )
}