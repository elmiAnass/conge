"use client";
import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Addmails = () => {
  const [mails, setMails] = useState({ name: "", email: "" });
  const [itemsmails, setItemsmails] = useState([]);
  const [selectedMail, setSelectedMail] = useState(null);

  const showToastMessage = () => {
    toast.error("Element Deleted , refrech page ", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const updatemessage = () => {
    toast.success("Element Updated , refrech page ", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const addmail = async (e) => {
    e.preventDefault();
    await addDoc(collection(db, "mails"), {
      name: mails.name,
      email: mails.email,
    });
    setMails({ name: "", email: "" });
  };

  const editMail = (itemmails) => {
    setSelectedMail(itemmails);
    setMails({
      name: itemmails.name,
      email: itemmails.email,
    });
  };

  const updateMail = async () => {
    if (!selectedMail) return;

    const mailRef = doc(db, "mails", selectedMail.id);
    await updateDoc(mailRef, {
      name: mails.name,
      email: mails.email,
    });

    setMails({ name: "", email: "" });
    setSelectedMail(null);
  };

  const deleteMail = async (id) => {
    const mailRef = doc(db, "mails", id);
    await deleteDoc(mailRef);
  };

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "mails"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
      });
      setItemsmails(items);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 ">
      <div className="mb-4">
        <input
          type="text"
          placeholder="name"
          value={mails.name}
          onChange={(e) => setMails({ ...mails, name: e.target.value })}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="email"
          value={mails.email}
          onChange={(e) => setMails({ ...mails, email: e.target.value })}
          className="mr-2 p-2 border border-gray-300 rounded"
        />
        <button
          onClick={addmail}
          className="p-2 bg-green-500/80 font-bold text-white/70 rounded"
        >
          Add mail
        </button>
      </div>

      {selectedMail && (
        <div className="mb-4 p-4 border border-gray-300 rounded bg-gray-200/80 ">
          <h2 className="text-xl font-bold">Edit Mail</h2>
          <input
            type="text"
            placeholder="name"
            value={mails.name}
            onChange={(e) => setMails({ ...mails, name: e.target.value })}
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="email"
            value={mails.email}
            onChange={(e) => setMails({ ...mails, email: e.target.value })}
            className="mr-2 p-2 border border-gray-300 rounded"
          />
          <div className="mt-2 space-x-2">
            <button
              onClick={() => {
                updateMail();
                updatemessage();
              }}
              className="p-2 bg-green-500 text-white rounded font-bold"
            >
              Update
            </button>
            <button
              onClick={() => setSelectedMail(null)}
              className="p-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      {itemsmails.map((itemmails) => (
        <div
          key={itemmails.id}
          className="mb-4 p-4 border border-gray-300 rounded"
        >
          <h1 className="text-xl font-bold">{itemmails.name}</h1>
          <h1 className="text-lg">{itemmails.email}</h1>
          <div className="mt-2 space-x-2">
            <button
              onClick={() => editMail(itemmails)}
              className="p-2 bg-orange-500 text-white/80 font-mono rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                deleteMail(itemmails.id);
                showToastMessage();
              }}
              className="p-2 bg-red-500 text-white rounded font-mono "
            >
              Delete
            </button>
            <ToastContainer />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Addmails;
