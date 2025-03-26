import { useState } from "react";

export default function Form() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form>
        <input
          onChange={(event) =>
            setName({
              ...name,
              firstName: event.target.value,
            })
          }
          type="text"
          value={name.firstName}
          placeholder="Enter your name here"
        />

        <input
          onChange={(event) =>
            setName({ ...name, lastName: event.target.value })
          }
          type="text"
          value={name.lastName}
          placeholder="Enter your last name here"
        />
      </form>
    </div>
  );
}
