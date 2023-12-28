"use client";

import React, { useState, useEffect } from 'react';

const Formoption = () => {
const [Mails, setMails] = useState([]);






  // useEffect(() => {
  //   const fetchData = async () => {
  //     const newMails = await Mails.find({}).exec();
  //     setMails(newMails);
  //   };
  //   fetchData();
  // }, []);



  return (
    <div className="bg-gray-400/20">
      <div class="max-w-lg mx-auto  bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="text-2xl py-4 px-5 bg-orange-600  text-white text-center font-bold uppercase shadow-xl">
          Mail Chefs  :
        </div>
        <form className="max-w-sm mx-auto p-4 mt-12  border-black/40">
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-md  text-gray-700 font-bold"
            >
             mail Magasin :
            </label>

            <input
            type="text"
            name="option1"
            id="mailMagasin"
            className="mt-1 p-2 w-full border rounded-md border-2 border-black/40"
              
            />
            <label
              htmlFor="lastName"
              className="block text-md  text-gray-700 font-bold"
            >
             mail Electrique :
            </label>
            <input
              value=""
              data-id="2"
              className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
              data-email="anasselmi9@gmail.com"
            />
            <label
              htmlFor="lastName"
              className="block text-md  text-gray-700 font-bold"
            >
             mail Mécanique :
            </label>
            <input
              value=""
              data-id="3"
              className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
              data-email="anasselmissaoui@gmail.com"
            />
          </div>

          <div className="mb-4">
            <label className="text-md text-gray-700 font-bold">
              Mécanique mail chef :
            </label>
            <div className="block">
              <div className="mb-2">
                <label htmlFor="option1">Mécanique cuisson</label>
                <input
                  type="text"
                  id="options"
                  data-id="1"
                  className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
                  data-email="anasselmissaoui@gmail.com"
                  name="service"
                  value={""}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="option2">Mécanique ciment</label>

                <input
                  type="text"
                  id="options"
                  data-id="2"
                  className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
                  data-email="anasselmissaoui@gmail.com"
                  name="service"
                  value={""}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="option3">Mécanique Graissage</label>

                <input
                  type="text"
                  id="options"
                  data-id="3"
                  className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
                  data-email="anasselmissaoui@gmail.com"
                  name="service"
                  value={""}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="option4">Atelier mécanique</label>
                <br />

                <input
                  type="text"
                  id="options"
                  data-id="4"
                  className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
                  data-email="anasselmissaoui@gmail.com"
                  name="service"
                  value={""}
                />
              </div>

              <div className="mb-2">
                <label htmlFor="option5">Mécanique cru</label>
                <br />
                <input
                  type="text"
                  id="options"
                  className="mt-1 p-2 w-full border rounded-md border-2  border-black/40"
                  data-id="5"
                  data-email="anasselmissaoui@gmail.com"
                  name="service"
                  value={""}
                />
              </div>
            </div>
          </div>

          <div className="flex">
            <button
              class="shadow bg-gray-600 mb-12 mt-6 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-12 rounded"
              type="submit"
            > save changes
            </button>
          </div>

      
        </form>
      </div>

  
    </div>
  );
};


export default Formoption;
