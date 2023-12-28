'use client';
import { useState, useEffect } from "react";
import {collection,addDoc,getDocs,updateDoc,deleteDoc,doc,} from "firebase/firestore";
import { db } from "../firebase";

export default function Form({ mails }) {
  const [formAction, setFormAction] = useState(''); 

  const [itemsmails, setItemsmails] = useState([]);
  // State variables
  const [formData, setFormData] = useState({
    NometPrénom: '',
    N_MLLE: '',
    Email: '',
    Période_demande_du: '',
    Période_demande_au: '',
    service: '',
    check: 'http://10.8.1.34/GestorNet/Login/Login.aspx',
  });

  const [showCheckboxes, setShowCheckboxes] = useState(false);

  // Event handlers
  const handleChanges = (e) => {
    const { name, value, options } = e.target;
    const selectedOption = options[e.target.selectedIndex];
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    const selectedEmail = selectedOption.getAttribute('data-email');
    if (name === 'service') {
      setFormAction(`https://formsubmit.co/${selectedEmail}`);
      setShowCheckboxes(value === 'Mécanique');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
    // debut formulaire
    <div class="max-w-lg mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="text-2xl py-4 px-5 bg-orange-600  text-white text-center font-bold uppercase shadow-xl">
        DEMANDE DE CONGE PAYE :{" "}
      </div>
      <form
        className="max-w-sm mx-auto p-4 mt-12  border-black/40"
        action={formAction}
        method="POST"
      >
        {/* form sender options */}
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        {/* form sender options */}

        <div className="mb-4">
          <label htmlFor="NometPrénom" className="block text-md  text-gray-700 font-bold">
            Nom et Prénom : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="NometPrénom"
            value={formData.NometPrénom}
            onChange={handleChange}
            className="mt-1 p-2 w-full  rounded-md border-2  border-black/40"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="N_MLLE" className="block text-md  text-gray-700 font-bold">
            N MLLE : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="N_MLLE"
            value={formData.N_MLLE}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-md  text-gray-700 font-bold"
          >
            Email : <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
            required
            class="hidden"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="requestPeriodStart"
            className="block text-md text-gray-700 font-bold"
          >
            Période demande (du) : <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="requestPeriodStart"
            name="Période_demande_du"
            value={formData.Période_demande_du}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="requestPeriodEnd"
            className="block text-md  text-gray-700 font-bold"
          >
            Période demande (au) : <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="requestPeriodEnd"
            name="Période_demande_au"
            value={formData.Période_demande_au}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="block text-md  text-gray-700 font-bold"
          >
            Service : <span className="text-red-500">*</span>
          </label>
          <select
            id="options"
            name="service"
            value={formData.service}
            onChange={handleChanges}
            className="mt-1 p-2 w-full  rounded-md border-2 border-black/40"
            required
          >
            <option value="" data-id="" data-email="">
              Select Service
            </option>

            {itemsmails.slice(0,3).map((option) => (
              <option
                key={option.id}
                value={option.name}
                data-id={option.id}
                data-email={option.email}
              >
                {option.name}
              </option>

            ))}
          </select>
        </div>
        {/* Conditionally render checkboxes based on the selected option */}
        {showCheckboxes && (
  <div className="mb-4">
    <label className="text-md text-gray-700 font-bold">
      Sélectionner Mécanique :
    </label>
    <div className="block">
      {itemsmails.slice(3,8).map((option, index) => (
        <div className="mb-2" key={index}>
          <input
            type="radio"
            id={`option${option.id}`}
            data-id={option.id}
            data-email={option.mail}
            name="service"
            value={option.name}
          />
          <label htmlFor={`option${option.id}`}>{option.name}</label>
        </div>
      ))}
    </div>
  </div>
)}
<div>
  <input
    type="hidden"
    name="url"
    value={formData.check}
    onChange={handleChange}
    required />
        </div>

        <div className="flex">
          <button
            class="shadow bg-gray-600 mb-12 mt-6 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded"
            type="submit"
          >
            {" "}
            Envoyer{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
