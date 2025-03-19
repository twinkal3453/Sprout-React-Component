import React from "react";

export interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div
      style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
