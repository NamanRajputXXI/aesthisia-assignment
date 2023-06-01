import SignForm from "./components/SignForm";
import SignInCard from "./components/SignInCard";

function App() {
  return (
    <div className="bg-[#ffffff] flex justify-between h-screen w-screen items-center p-5">
      <SignInCard />
      <SignForm />
    </div>
  );
}

export default App;
