function Parent() {
  function handleSayHello() {
    console.log('Hello');
  }

  return <Child onClick={handleSayHello} />;
}

function Child({ onClick }) {
  return <button onClick={onClick}>Clique</button>;
}
