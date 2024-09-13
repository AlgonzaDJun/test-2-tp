import { Link, useParams } from "react-router-dom";
import CardMenu from "../components/CardMenu";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getMenu } from "../redux/actions/menuAction";
import Loading from "../components/Loading";

const Menu = () => {
  // get the route from the URL
  let { route } = useParams();

  if (route === undefined) {
    route = "seasonal-menu";
  }

  const dispatch = useDispatch();
  const result = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getMenu());
  }, []);

  const [menu, setMenu] = useState([]);
  const [filteredMenu, setFilteredMenu] = useState([]);

  useEffect(() => {
    if (result && result.menu.categories) {
      setMenu(result.menu.categories);
    }
  }, [result]);

  useEffect(() => {
    // if route is not undefined
    if (route && menu) {
      const filtered = menu.filter(
        (item) =>
          item.category_name.toLowerCase().split(" ").join("-") === route
      );
      setFilteredMenu(filtered);
    }
  }, [route, menu]);

  // console.log(filteredMenu);

  return (
    <div>
      <div className="bg-white">
        <h1 className="text-center py-5 font-semibold">MENU</h1>

        {/* change menu */}
        <div className="flex gap-10 overflow-scroll">
          {result && result.menu.categories ? (
            result.menu.categories.map((item) => (
              <div key={item.category_name}>
                <Link
                  to={`/menu/${item.category_name
                    .toLowerCase()
                    .split(" ")
                    .join("-")}`}
                  className="cursor-pointer"
                >
                  <h1 className="p-4">{item.category_name}</h1>
                  {route ===
                    item.category_name.toLowerCase().split(" ").join("-") && (
                    <div className="mb-0 h-1 w-full bg-black rounded-lg"></div>
                  )}
                </Link>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>

        {/* CARD MENU */}
        <div className="bg-technopartner h-[calc(100vh-230px)] overflow-scroll">
          <h1 className="p-2 capitalize">{route.replace(/-/g, " ")}</h1>
          {filteredMenu.length > 0 ? (
            filteredMenu[0].menu.map((item) => (
              <CardMenu
                key={item.m}
                name={item.name}
                description={item.description}
                photo={item.photo}
                price={item.price}
              />
            ))
          ) : (
            <h1 className="text-center text-red-600">Menu tidak ditemukan</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
