import MenuButton from "@/components/MenuButton";

const Header = () => {
  return (
    <header className="flex justify-between my-4">
      <h1 className="text-4xl">Schedules</h1>
      <MenuButton />
    </header>
  );
};
export default Header;
