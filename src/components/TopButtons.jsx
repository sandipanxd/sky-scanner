import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "Kolkata",
    },
    {
      id: 2,
      title: "New Delhi",
    },
    {
      id: 3,
      title: "Bangalore",
    },
    {
      id: 4,
      title: "Mumbai",
    },
    {
      id: 5,
      title: "Chennai",
    },
  ];

  return (
    <div className="flex items-center justify-around my-8  ">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-black text-lg font-medium "
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
