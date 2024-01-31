export const Button = ({ children, asLink, full, ...rest }) => {
  const Component = asLink ? "a" : "button";
  return (
    <Component
      className={`bg-[#1e1e1e] hover:bg-[#2f2f2f] text-white rounded-md p-2 ${
        full && "w-full"
      }`}
      {...rest}
    >
      {children}
    </Component>
  );
};
