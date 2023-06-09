import SignForm from "./components/SignForm";
import SignInCard from "./components/SignInCard";

const App: React.FC = () => {
  return (
    <div className="bg-[#ffffff] flex md:justify-between justify-center h-screen w-screen items-center p-5">
      <SignInCard />
      <SignForm />
    </div>
  );
};

export default App;
