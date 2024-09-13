const Input = ({ name, type, onChange, value }) => {
  return (
    <div className="text-center">
      <label htmlFor={name} className="text-gray-300 font-semibold text-sm ">
        {name === "username" ? "Email" : "Password"}
      </label>
      <input
        onChange={onChange}
        type={type}
        id={name}
        name={name}
        value={value}
        className="border shadow-md p-2 w-full rounded-md mt-2"
      />
    </div>
  );
};

export default Input;
