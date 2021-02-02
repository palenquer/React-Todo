import TodoField from "../components/TodoField";

export default function Home() {
  return (
    <div className="flex justify-center w-full items-center">
      <div className="flex justify-between flex-col w-full md:max-w-2xl h-11 mt-4">
        <TodoField name="dasdas"/>
      </div>
    </div>
  );
}
