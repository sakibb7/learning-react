const PropsChildren = () => {
  return (
    <div>
      <Button textColor="#7950f2">🌳prev</Button>
      <Button textColor="#7950f2">Next 🌴</Button>
    </div>
  );
};

export default PropsChildren;

const Button = ({ textColor, children }) => {
  return <button style={{ color: textColor }}>{children}</button>;
};
