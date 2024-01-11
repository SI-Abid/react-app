function ListGroup() {
  const items = ["New York", "Tokyo", "Paris", "London", "Dhaka"];
  let selectedIndex = -1;
  // Event handler
  const handleClick = (item: String, index: number) => {
    selectedIndex = index;
    console.log(item, "clicked!!");
  };

  return (
    <>
      <h1>List</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className="list-group-item"
            onClick={() => handleClick(item, index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
