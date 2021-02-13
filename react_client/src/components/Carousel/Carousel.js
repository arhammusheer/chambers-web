import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Paper,
} from '@material-ui/core';
import restaurantFoodImg from '../../constants/img/sharing-lunch-in-restaurant.jpg';
import generalCovidImg from '../../constants/img/Boston-Hospitality-Review.png';
import restaurantFoodImg2 from '../../constants/img/shutterstock_425004079.jpg';

function Project(props) {
  const { item } = props;
  return (
    <Paper
      style={{
        backgroundColor: item.color,
        backgroundImage: `url(${item.imgPath})`,
        backgroundSize: 'cover',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '200px'
      }}
      elevation={10}
    />
  )
}

const items = [
  {
    name: "General Covid",
    description: "My Solution on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1",
    imgPath: generalCovidImg
  },
  {
    name: "Covid in Restaurants",
    description: "A PDF Reader specially designed for musicians.",
    color: "#64ACC8",
    imgPath: restaurantFoodImg
  },
  {
    name: "Terrio",
    description: "A exciting mobile game game made in the Unity Engine.",
    color: "#CE7E78",
    imgPath: restaurantFoodImg2
  }
]

export default function MyCarousel() {
  return (
    <Carousel
      className="SecondExample"
      autoPlay={true}
      timer={500}
      animation={"fade"}
      indicators={true}
      timeout={500}
      navButtonsAlwaysVisible={true}
      navButtonsAlwaysInvisible={false}
      style={{width: '500px'}}
    >
      {
        items.map((item, index) => {
          return <Project item={item} key={index} />
        })
      }
    </Carousel>
  )
}