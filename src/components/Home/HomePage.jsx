import LeftBlock from "./LeftBlock/LeftBlock";
import RightBlock from "./RightBlock/RightBlock";
import { useMediaQuery } from 'react-responsive'

function HomePage() {
  const isMobile = useMediaQuery({ query: '(max-width: 425px)' })
    return (
      <>
       {isMobile? <LeftBlock width="100%"/> : <LeftBlock width="50%"/> }
       {!isMobile && <RightBlock/> }
      </>
    );
  }
  
  export default HomePage;
  