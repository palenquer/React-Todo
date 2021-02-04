import TodoField from "../../components/TodoField";

export default function Active({todo}) {
  return (
    <div className="flex justify-center flex-col w-full items-center mt-4">
          {todo.length >= 1
            ? todo.map((todoText, todoItem) => {
                return (
                  <div
                    key={todoItem}
                    className="flex justify-between flex-col w-full md:max-w-2xl h-11"
                  >
                    <TodoField name={todoText} />
                  </div>
                );
              })
            : "Enter a todo Item"}
        </div>
  );
}
