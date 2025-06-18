import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: React.ElementType;
};

export default function MainButton({ children, onClick, icon: Icon }: Props) {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded-md px-5 py-2 text-white font-bold text-lg bg-gradient-to-r from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 transition cursor-pointer"
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
}
