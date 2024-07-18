import Menu from "./Menu";

const Header = () => {
  return (
    <section className="relative">
      <div className="p-2 bg-indigo-600 border-b-[1px] border-gray-500  ">
        <Menu />
      </div>
    </section>
  );
};

export default Header;
