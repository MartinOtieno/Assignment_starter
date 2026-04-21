import { useEffect, useState } from "react";
import {
  getStudents,
  addStudent,
  deleteStudent,
} from "./api";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const handleAdd = async () => {
    await addStudent({
      id: Date.now(),
      name,
      course,
    });
    setName("");
    setCourse("");
    loadStudents();
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Student Management</h1>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={handleAdd}>Add Student</button>

      <hr />

      {students.map((s) => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>{s.course}</p>
          <button onClick={() => handleDelete(s.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;