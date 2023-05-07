import ToggleListView from "./Cards/ToggleListView"
import Banners from "./Banners/BannersSection"
import DatePanel from "./DatePanel/DatePanel"
import CardsSection from "./Cards/CardsSection"
import Card from "./Cards/Card"
import EmptyValue from './Cards/EmptyValue';
import { v4 as uuidv4 } from 'uuid';

export default function MainContent({isOpen, list, searchField}){
  return (
      <>
            <Banners/>
            <DatePanel/>
            {!isOpen && <ToggleListView/>}
            {!list? <p style={{textAlign: "center"}}>Loading...</p> : 
                (list.length===0? <EmptyValue/> : 
                <CardsSection>
                  {list.filter(car =>
                    car.name.toLowerCase().includes(searchField.toLowerCase())
                  )
                  .map((card)=>(<Card key={uuidv4()} card={card}/>))} 
                </CardsSection>)
            }
      </>
    )
}