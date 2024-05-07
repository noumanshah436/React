import React from "react";
import { db } from "../firebase-config";
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
  setDoc,
  or,
  orderBy,
  limit,
} from "firebase/firestore";

const Queries = () => {
  const citiesRef = collection(db, "cities");

  const createCities = async () => {
    await setDoc(doc(citiesRef, "SF"), {
      name: "San Francisco",
      state: "CA",
      country: "USA",
      capital: false,
      population: 860000,
      regions: ["west_coast", "norcal"],
    });
    await setDoc(doc(citiesRef, "LA"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA",
      capital: false,
      population: 3900000,
      regions: ["west_coast", "socal"],
    });
    await setDoc(doc(citiesRef, "DC"), {
      name: "Washington, D.C.",
      state: null,
      country: "USA",
      capital: true,
      population: 680000,
      regions: ["east_coast"],
    });
    await setDoc(doc(citiesRef, "TOK"), {
      name: "Tokyo",
      state: null,
      country: "Japan",
      capital: true,
      population: 9000000,
      regions: ["kanto", "honshu"],
    });
    await setDoc(doc(citiesRef, "BJ"), {
      name: "Beijing",
      state: null,
      country: "China",
      capital: true,
      population: 21500000,
      regions: ["jingjinji", "hebei"],
    });
  };

  const executeQuery = async () => {
    // createCities();

    // create query ****************************
    // const q = query(citiesRef, where("state", "==", "CA"));
    // const q = query(citiesRef, where("capital", "==", null));

    // const populationQuery = query(citiesRef, where("population", "<", 100000));
    // const nameQuery = query(citiesRef, where("name", ">=", "San Francisco"));

    // This query returns every city document where the capital field exists with a value other than false or null
    // Not-equal (!=) and not-in queries exclude documents where the given field does not exist.
    // const notCapitalQuery = query(citiesRef, where("capital", "!=", false));

    // const q = query(citiesRef, where("regions", "array-contains", "west_coast"));

    // in, not-in, and array-contains-any
    // const q = query(citiesRef, where('country', 'in', ['USA', 'Japan']));
    // const q = query(citiesRef, where('country', 'not-in', ['USA', 'Japan']));
    // const q = query(citiesRef, where('regions', 'array-contains-any', ['west_coast', 'east_coast']));

    // Compound (AND) queries
    // const q1 = query(citiesRef, where("state", "==", "CO"), where("name", "==", "Denver"));
    // const q2 = query(citiesRef, where("state", "==", "CA"), where("population", "<", 1000000));
    // const q1 = query(citiesRef, where("state", ">=", "CA"), where("state", "<=", "IN"));
    // const q2 = query(citiesRef, where("state", "==", "CA"), where("population", ">", 1000000));

    // OR queries
    // const q = query(
    //   citiesRef,
    //   or(where("capital", "==", true), where("state", "==", "CA"))
    // );

    // Order and limit data
    // const q = query(citiesRef, orderBy("name"), limit(3));
    // const q = query(citiesRef, orderBy("name", "desc"), limit(3));
    const q = query(citiesRef, orderBy("state"), orderBy("population", "desc"));

    // execute query ****************************
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return (
    <div>
      <div>
        <button
          onClick={() => {
            executeQuery();
          }}
        >
          Execute Query
        </button>
      </div>
    </div>
  );
};

export default Queries;
