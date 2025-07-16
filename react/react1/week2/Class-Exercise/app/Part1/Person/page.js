const Person = () => {
  const name = "Amin";
  const age = 36;

  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>{age >= 18 ? `${name} is an adult` : `${name} is a minor`}</div>
    </>
  );
};

export default function cats() {
  return (
    <>
      <Person />
    </>
  );
}

