import { formatRupiah } from "../utils/function";

const CardMenu = ({ name, description, photo, price }) => {
  return (
    <div className="flex gap-4 pl-5 pe-7 bg-white py-3 border-b-2 border-dotted">
      <img src={photo} alt="gambar" className="w-10 h-10 object-cover" />
      <div>
        <h1 className="font-semibold">{name}</h1>
        <p className="text-slate-500 text-sm">{description}</p>
      </div>
      <p className="font-semibold">{formatRupiah(price)}</p>
    </div>
  );
};

export default CardMenu;
