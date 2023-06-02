import { useRef, useState } from "react";

const DropDownOptions = (props) => {
  const [selected, setSelected] = useState();
  const [label, setLabel] = useState(props.label);
  const options = useRef();
  return (
    <button className="relative hover:bg-slate-800">
      <p
        onMouseEnter={() => setSelected(false)}
        className="peer px-5 text-white pt-2"
      >
        {label}
      </p>
      <ul
        ref={options}
        className={`absolute z-50 left-0 hidden peer ${
          !selected ? "hover:block" : ""
        } peer-hover:block bg-slate-800 w-full min-w-max text-left px-2 `}
      >
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                props.setSelectedItem(item);
                setSelected(true);
                setLabel(item);
              }}
              className="py-1 hover:text-white"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </button>
  );
};

export default DropDownOptions;
