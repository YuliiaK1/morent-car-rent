import { useState, useEffect, useCallback } from 'react'
import style from "./SideBar.module.css"
import { useMediaQuery } from 'react-responsive'
import CheckboxMui from './CheckboxMui'
import SliderPrice from './SliderPrice'

export default function SideBar({isOpen, setIsOpen, data, setList, refs}){
  const isMaxSidebar = useMediaQuery({ query: '(max-width: 768px)' })
  const [selectedPrice, setSelectedPrice] = useState([50, 100]);
  const [carsType, setCarsType] = useState([{id: 1, checked: false, label: "Sport"}, {id: 2, checked: false, label: "SUV"}, {id: 3, checked: false, label: "Sedan"}, {id: 4, checked: false, label: "Pickup"}, {id: 5, checked: false, label: "Hatchback"}])
  const [carsRoominess, setCarsRoominess] = useState([{id: 1, checked: false, label: "2 Person"},{id: 2, checked: false, label: "4 Person"},{id: 3, checked: false, label: "5 Person"},{id: 4, checked: false, label: "6 Person"}])
  
  const changeTypeChecked = (id) => {
    const carsTypeList = carsType;
    const changeChecked = carsTypeList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCarsType(changeChecked);
  };

  const changeRoominessChecked = (id) => {
    const carsRoominessList = carsRoominess;
    const changeChecked = carsRoominessList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCarsRoominess(changeChecked);
  };

  const handleChangePrice = (e, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = useCallback(() => {
  let updatedList = data;
  // Type Filter
  const typeChecked = carsType
  .filter((item) => item.checked)
  .map((item) => item.label);

  if (typeChecked.length) {
    updatedList = updatedList.filter((item) =>
    typeChecked.includes(item.type)
    );
  }
  // Roominess Filter
  const roominessChecked = carsRoominess.filter((item) => item.checked).map((item) => item.label.split(' ')[0]);
  if (roominessChecked.length) {
    updatedList = updatedList.filter((item) =>
    roominessChecked.includes(item.roominess)
    );
  }

  // Price Filter
  const minPrice = selectedPrice[0];
  const maxPrice = selectedPrice[1];
  updatedList = updatedList.filter(
    (item) => item.price >= minPrice && item.price <= maxPrice
  );

  setList(updatedList);
}, [data, carsRoominess, carsType, setList, selectedPrice]);

useEffect(() => {
  applyFilters();
}, [carsType, carsRoominess, applyFilters]);

const handleClear = () => {
  // Clear all checked values for carsType
  const clearedCarsType = carsType.map(car => ({ ...car, checked: false }));
  setCarsType(clearedCarsType);
  // Clear all checked values for carsRoominess
  const clearedCarsRoominess = carsRoominess.map(car => ({ ...car, checked: false }));
  setCarsRoominess(clearedCarsRoominess);
  setSelectedPrice([50, 100]);
};
    return (
        <div className={style.sideBar} ref={refs}>
        <div className={style.sideSection}>
          <div className={style.typeFilter}>
            <span className={style.sectionName}>Type</span>
            {carsType.map((item) => (
              <CheckboxMui
                key={item.id}
                typeFilter={item}
                changeChecked={changeTypeChecked}
              />
            ))}
          </div>

          <div className={style.capacityFilter}>
            <span className={style.sectionName}>Capacity</span>
            {carsRoominess.map((item) => (
              <CheckboxMui
                key={item.id}
                typeFilter={item}
                changeChecked={changeRoominessChecked}
              />
            ))}
          </div>

          <div className={style.priceFilter}>
          <span className={style.sectionName}>Price</span>
            <SliderPrice value={selectedPrice} changePrice={handleChangePrice}/>
          </div>

          {isMaxSidebar && <div className={style.btnSideBar}>
            <button onClick={handleClear}>Clear</button>
            <button onClick={()=>setIsOpen(!isOpen)}>Apply</button>
          </div>}
        </div>
      </div>
    )
}