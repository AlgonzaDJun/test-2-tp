import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import DataDiri from "../components/DataDiri";
import Header from "../components/Header";
import { useEffect } from "react";
import { getData } from "../redux/actions/homeAction";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const homeData = useSelector((state) => state.home);

  useEffect(() => {
    dispatch(getData());
  }, []);

  // console.log(homeData);

  return (
    <div className="relative">
      {homeData.loading && homeData.data_diri ? (
        <Loading />
      ) : (
        <>
          <Header data={homeData.data_diri?.result} />
          <DataDiri data={homeData.data_diri?.result} />
          <Banner data={homeData.data_diri?.result} />
        </>
      )}
    </div>
  );
};

export default Home;
