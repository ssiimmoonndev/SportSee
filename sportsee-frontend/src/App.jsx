import ActivityChart from "./components/ActivityChart";

function App() {
  return (
    <div>
      <ActivityChart />
    </div>
  );
}

export default App;

// import { USER_MAIN_DATA } from "./data/user";

// function App() {
//   return (
//     <div>
//       <h1>Bonjour {USER_MAIN_DATA.userInfos.firstName}</h1>
//       <p>Score : {USER_MAIN_DATA.todayScore * 100}%</p>
//     </div>
//   );
// }

// export default App;


// import { USER_ACTIVITY } from "./data/activity";

// function App() {
//   return (
//     <div>
//       <h1>Activité user</h1>

//       {USER_ACTIVITY.sessions.map((session) => (
//         <p key={session.day}>
//           {session.day} — {session.kilogram}kg — {session.calories}cal
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;

// import { USER_PERFORMANCE } from "./data/performance";

// function App() {
//   return (
//     <div>
//       <h1>Performance</h1>

//       {USER_PERFORMANCE.data.map((item, index) => (
//         <p key={index}>
//           kind {item.kind} → {item.value}
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;


// import { USER_AVERAGE_SESSIONS } from "./data/averageSessions";

// function App() {
//   return (
//     <div>
//       <h1>Sessions moyennes</h1>

//       {USER_AVERAGE_SESSIONS.sessions.map((session) => (
//         <p key={session.day}>
//           Jour {session.day} → {session.sessionLength} min
//         </p>
//       ))}
//     </div>
//   );
// }

// export default App;