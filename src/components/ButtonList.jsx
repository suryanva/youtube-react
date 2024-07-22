import Button from "./Button";

const ButtonList = () => {
  const list = [
    "All",
    "JavaScript",
    "Java",
    "React",
    "Movies",
    "Cricket",
    "Football",
    "Music",
    "Cooking",
    "Coding",
    "Photography",
    "Travel",
  ];
  return (
    <div className="flex ">
      {list.map((c, index) => (
        <Button name={c} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
