import { USER_MAIN_DATA } from "./data/user";

function App() {
  return (
    <div>
      <h1>Bonjour {USER_MAIN_DATA.userInfos.firstName}</h1>
      <p>Score : {USER_MAIN_DATA.todayScore * 100}%</p>
    </div>
  );
}

export default App;