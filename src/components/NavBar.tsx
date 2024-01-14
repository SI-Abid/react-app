interface Props {
  count: number;
}
const NavBar = ({ count }: Props) => {
  return <div>Count: {count}</div>;
};

export default NavBar;
