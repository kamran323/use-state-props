import React from './ChildComponent';
import Child from './ChildComponent';

const Parent = () => {
  const data = [
    {
      name: "Sakhawat",
      cast: "Hussain",
      age: 42,
      color: "Pink",
      dish: "Biryani",
    },
    {
      name: "Arif",
      cast: "Sher",
      age: 38,
      color: "Blue",
      dish: "Pizza",
    },
    {
      name: "Yaseen",
      cast: "Shaikh",
      age: 34,
      color: "Pink",
      dish: "Pasta",
    },
  ];

  return (
    <div>
      {data.map((person, index) => (
        <Child
          key={index} 
          name={person.name}
          Cast={person.cast}
          Age={person.age}
          Color={person.color}
          Dish={person.dish}
        />
      ))}
    </div>
  );
};

export default Parent;
