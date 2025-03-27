import { useState, useEffect } from "react";

export default function Search() {
  const [query, setQuery] = useState("");

  //useEffect hook syntax
  useEffect(() => {
    function demo() {
      console.log("Demo function executed!");
    }
    demo();
  }, [query]);

  return (
    <div>
      <input
        onChange={(event) => setQuery(event.target.value)}
        type="text"
        value={query}
        placeholder="Enter a food here.."
      />
    </div>
  );
}
