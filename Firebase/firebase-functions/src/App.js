import { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setNewAge] = useState(0);

  const [users, setUsers] = useState([]);

  // we are just getting the specific users collection from firestore database
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge) });
    alert("User added successfully");
  };

  const updateUser = async (id, age) => {
    const userDoc = doc(db, "users", id);
    const newFields = { age: age + 1 };
    // this will update the fields of the given document
    await updateDoc(userDoc, newFields);
    alert("User updated successfully");
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    alert("User deleted successfully");
  };

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef);
    // console.log(data);
    // doc.data() is a function that return the actual fields of the document

    setUsers(
      data.docs.map((doc) => {
        // console.log(doc.data());               // {name: 'Nouman', age: 24}
        return { ...doc.data(), id: doc.id };
      })
    );
  };

  const getUsersAndListenForRealTimeUpdates = () => {
    // https://firebase.google.com/docs/firestore/query-data/listen
    // onSnapshot listen to the real time updates in firebase firestore
    const unsub = onSnapshot(usersCollectionRef, (data) => {
      setUsers(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    return unsub;
  };

  const getFilteredUsers = async () => {
    // https://softauthor.com/firebase-firestore-where-query/
    const nameQuery = query(usersCollectionRef, where("name", "==", "Ahmad"));
    const ageEqualQuery = query(usersCollectionRef, where("age", "==", 24));
    const ageGreateOrEqualQuery = query(
      usersCollectionRef,
      where("age", ">=", 24)
    );

    const data = await getDocs(ageGreateOrEqualQuery);

    setUsers(
      data.docs.map((doc) => {
        // console.log(doc.data());               // {name: 'Nouman', age: 24}
        return { ...doc.data(), id: doc.id };
      })
    );
  };

  

  useEffect(() => {
    // getFilteredUsers()

    // ****************************

    // this will only get users
    getUsers();

    // ****************************

    // // this will get users and also listen for real time updates
    // const unsub = getUsersAndListenForRealTimeUpdates();

    // // Cleanup: this will stop listening for real time updates when the component unmounts
    // return () => {
    //   unsub();
    // };
  }, []);

  console.log(users);
  return (
    <div className="App">
      <input
        placeholder="Name..."
        onChange={(event) => {
          setNewName(event.target.value);
        }}
      />

      <input
        type="number"
        placeholder="Age..."
        onChange={(event) => {
          setNewAge(event.target.value);
        }}
      />
      <button onClick={createUser}> Create User</button>

      {/* users list */}
      <div>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h1>Name: {user.name}</h1>
              <h1>Age: {user.age}</h1>
              <button
                onClick={() => {
                  updateUser(user.id, user.age);
                }}
              >
                Increase Age
              </button>
              <button
                onClick={() => {
                  deleteUser(user.id);
                }}
              >
                Delete User
              </button>
            </div>
          );
        })}
      </div>
      

      
      
    </div>
  );
}

export default App;
