import { useState } from "react";
import { Box, Heading, Input, Button, Checkbox, Text, VStack, HStack, Spacer, IconButton, Image } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: true },
    { id: 2, text: "Build a todo app", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }
  
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <Image src="/todo-app-image.png" alt="Todo App" mb={8} mx="auto" />
      
      <HStack mb={8}>
        <Input 
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <Button onClick={addTodo} colorScheme="blue" px={8}>
          <FaPlus />
        </Button>
      </HStack>

      <VStack spacing={4} align="stretch">
        {todos.map((todo) => (
          <HStack key={todo.id} spacing={4} p={3} borderWidth={1} borderRadius={4}>
            <Checkbox isChecked={todo.completed} onChange={() => toggleTodo(todo.id)} />
            <Text textDecoration={todo.completed ? "line-through" : "none"}>{todo.text}</Text>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;