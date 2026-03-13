'use client'
import React, { useState } from 'react'
import { CarList,Title,Header,Wrap } from './SlideBar.style'
import Card from './Card';

const cars = [
  {
    name: "BMW",
    carClass: "normal",
    imgUrl: "/assets/cars/bmw.png"
  },
  {
    name: "MERS",
    carClass: "exlusive",
    imgUrl: "/assets/cars/mers.png"
  },
  {
    name: "Audi",
    carClass: "normal",
    imgUrl: "/assets/cars/audi.png"
  },
  {
    name: "MERS1",
    carClass: "exclusive",
    imgUrl: "/assets/cars/mers.png",
  },
  {
    name: "BMW2",
    carClass: "normal",
    imgUrl: "/assets/cars/mers.png"
  },
  {
    name: "MERS2",
    carClass: "exclusive",
    imgUrl: "/assets/cars/mers.png"
  }
    ]




export default function SlideBar() {
const [carType,setCarType] = useState("passenger");

  return (
    <Wrap>   
    <Title>
    <button 
    onClick={() => setCarType("passenger")} 
    style={{color: carType === "passenger" ? "#18191a" : "#3d3f40" }}
    >Легковые</button>
        /
    <button 
    onClick={() => setCarType("van")}
    style={{color: carType === "passenger" ? "#3d3f40" : "#18191a" }}
    >Фургоны</button>   
    </Title>
    {carType === "passenger" ?
    <Header>
        Нужны 18 лет жизни и водительское удостоверение категории «B»
    </Header> :
    <Header>
        Нужны 18 лет жизни и водительское удостоверение категории «B»
    </Header>}







    <CarList>
      {cars.map((car) => <Card key={car.name}{...car}/>)}
    </CarList>
    </Wrap>
    
  )
}
