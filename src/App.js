import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import WelcomeClassbased from "./components/WelcomeClassbased";
import ParentComponent from "./components/ParentComponent";
import ConditionRender from "./components/ConditionRender";
import NameList from "./components/NameList";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import ClickCouter from "./components/HOC/ClickCouter";
import HoverCounter from "./components/HOC/HoverCounter";
import User from "./components/Render Props/User";
import Counter from "./components/Render Props/Counter";
import ClickCounterTwo from "./components/Render Props/ClickCounterTwo";
import HoverCounterTwo from "./components/Render Props/HoverCounterTwo";
import ParentComp from "./components/Context-API/ParentComp";

function App() {
  return (
    <div className="App">
      <ParentComponent />

      <hr />

      <ConditionRender />
      <hr />
      <Greet name="xyz" heroName="qqq" />
      <Greet name="abc" heroName="eee">
        <button>Action</button>
      </Greet>
      <Greet name="pqr" heroName="ttt">
        <p>This is Children.</p>
      </Greet>
      <Greet name="ijk" />

      <hr />

      <WelcomeClassbased name="xyz" heroName="qqq" />
      <WelcomeClassbased name="abc" heroName="eee">
        <button>Action</button>
      </WelcomeClassbased>
      <WelcomeClassbased name="pqr" heroName="ttt">
        <p>This is Children.</p>
      </WelcomeClassbased>
      <WelcomeClassbased name="ijk" />

      <hr />

      <NameList />

      <hr />
      <Form />

      <LifeCycleA />

      <hr />

      <ClickCouter name="het" />
      <HoverCounter />

      <hr />

      <User render={(isLoggedIn) => (isLoggedIn ? "het" : "UnKnown")} />
      <Counter
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <Counter
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />
      <hr />
      <p>Context- API</p>
      <ParentComp />
    </div>
  );
}

export default App;
