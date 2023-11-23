import HomeCards from "./HomeCards";
import MainHome from "./MainHome";
import Navbar from "./Navbar";
function HomeScreen() {
  return (
    <>
      <Navbar></Navbar>
      <MainHome></MainHome>
      <HomeCards />
    </>
  );
}

export default HomeScreen;
