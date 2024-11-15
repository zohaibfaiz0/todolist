// pages/index.tsx
import TodoList from "../components/todo"

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <TodoList />
    </div>
  );
};

export default Home;
