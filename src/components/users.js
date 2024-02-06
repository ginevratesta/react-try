const DisplayUsers = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <h4>{props.age}</h4>
      <h4>{props.email}</h4>
    </div>
  );
};

const UsersInfo = () => {
  return (
    <div>
      <DisplayUsers name="Vanessa" age={35} email="email@vanessa" />
      <DisplayUsers name="Valentino" age={22} email="email@valentino" />
      <DisplayUsers name="Viktor" age={86} email="email@viktor" />
    </div>
  );
};

export default UsersInfo;
