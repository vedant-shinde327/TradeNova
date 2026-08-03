import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = ({username}) => {
  return (
    <>
      <TopBar username={username}/>
      <Dashboard />
    </>
  );
};

export default Home;
