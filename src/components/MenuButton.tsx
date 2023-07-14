"use client";

const MenuButton = () => {
  const showAlert = () => {
    alert(
      "this component was created just to demonstrate the usage of a client component within a next.js 13 environment"
    );
  };

  return (
    <button
      className="flex flex-col gap-1 border-none bg-transparent"
      type="button"
      onClick={showAlert}
    >
      <span className="block h-1 w-6 relative rounded-sm bg-slate-100"></span>
      <span className="block h-1 w-6 relative rounded-sm bg-slate-100"></span>
      <span className="block h-1 w-6 relative rounded-sm bg-slate-100"></span>
    </button>
  );
};

export default MenuButton;
