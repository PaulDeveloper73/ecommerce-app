import Menu from "./Menu";

const Header = () => {
  return (
    <section className="fixed top-0 w-full">
      <div className="p-2 bg-indigo-600 border-b-[1px] border-gray-500  ">
        <Menu />
      </div>
    </section>
  );
};

export default Header;
