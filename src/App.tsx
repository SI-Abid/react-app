import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Tokyo", "Paris", "London", "Dhaka"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
