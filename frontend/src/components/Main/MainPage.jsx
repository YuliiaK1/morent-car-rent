import { useEffect, useState, useRef } from "react"
import style from "./MainPage.module.css"
import MainHeader from "./MainHeader/MainHeader"
import Container from "./Container"
import SideBar from "./SideBar/SideBar"
import Footer from "./Footer"
import { Route, Routes } from "react-router-dom"
import MainContent from "./MainContent"
import Favorites from "./Favorites"
import Reserve from "./Reserve"
import AboutPage from "./About/AboutPage" 
import Context from "./Context"

let useClickOutside = (handler) => {
  let domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

function MainPage({data}) {
  const [isOpen, setIsOpen] = useState(false);
  const [reserveOpen, setReserveOpen] = useState(false);
  const [list, setList] = useState();
  const [searchField, setSearchField] = useState("");
  const [pickUpForm, setPickUpForm] = useState({city: null, date: null, time: null});
  const [dropForm, setDropForm] = useState({city: null, date: null, time: null});  
  const [reserve, setReserve] = useState({name: null, image: null, price: null});
  
  const contextValue = {
    isOpen, setIsOpen,
    reserveOpen, setReserveOpen,
    list, setList,
    data,
    searchField, setSearchField,
    pickUpForm, setPickUpForm,
    dropForm, setDropForm,
    reserve, setReserve
  };

  useEffect(() => {
    setList(data);
  }, [data]);

  let domNode = useClickOutside(() => {
    setIsOpen(false);
  });

  return (
    <Context.Provider value={contextValue}>
    <div className={style.mainPage}>
        <MainHeader/>
        {isOpen && 
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} data={data} setList={setList} refs={domNode}/>}
        <Container>
            <Routes>
              <Route 
                path="/" 
                element={<MainContent isOpen={isOpen} list={list} searchField={searchField}/>} />
              <Route 
                path="favorites" 
                element={<Favorites/>} />
              <Route 
                path="reserve" 
                element={<Reserve/>} />
              <Route 
                path="about" 
                element={<AboutPage/>} />
            </Routes>
        </Container>
        <Footer/>
    </div>
    </Context.Provider>
  );
}

export default MainPage;
