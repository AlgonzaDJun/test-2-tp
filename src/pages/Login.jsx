import { useEffect, useState } from "react";
import Logo from "../assets/logo technopartner.png";
import Input from "../components/Input";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/actions/authAction";

const Login = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const [data, setData] = useState({
    username: "",
    password: "",
    grant_type: "password",
    client_secret: "0a40f69db4e5fd2f4ac65a090f31b823",
    client_id: "e78869f77986684a",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    dispatch(userLogin(data));
  };

  useEffect(() => {
    if (auth && auth.user) {
      localStorage.setItem("access_token", auth.user.access_token);
      alert("Login Berhasil");
      window.location.href = "/";
    } else if (auth && auth.error) {
      alert("Login Gagal : " + auth.error.response.data.message);
    }
  }, [auth]);

  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    window.location.href = "/";
  }

  return (
    <div className="">
      <img src={Logo} alt="technopartner img" className="w-72 mx-auto py-24" />
      <div className="mx-20 space-y-4">
        <Input
          name="username"
          type="email"
          onChange={handleChange}
          value={data.username}
        />
        <Input
          name="password"
          type="password"
          onChange={handleChange}
          value={data.password}
        />

        <div className="flex items-center justify-center pt-6">
          <button
            className="text-center px-8 py-2 border shadow rounded-lg font-semibold text-sm flex"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
