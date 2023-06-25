import { Button, TextInput } from '@mantine/core';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom';
import formData from '../data/data.json'
import { DataContext } from '../data/Context';

function UpDate() {
  const [form, setForm] = useState([]);
  const [custodianDetails, setCustodianDetails] = useState("");
  const [otherInformation, setOtherInformation] = useState("");
  const [certification, setCertification] = useState("");
  const { id } = useParams();
const get = useContext(DataContext);
console.log(get.push( {
  "id": 22,
  "title": "Form B",
  "requirements": {
    "custodianDetails": "Name of Custodian",
    "otherInformation": "Other information about the form",
    "certification": "Certification details"
  },
  "actionDate": "2022-02-01"
},));


const filterDate = formData.filter((item)=> item.id !== +id);
console.log(filterDate);
useEffect(()=>{

  const findDate = formData.find((item)=> item.id === +id);
  setForm(findDate);
},[])
  const handleUpdate = () => {
   /* axios
      .put(`/api/forms/${id}`, {
        requirements: {
          custodianDetails,
          otherInformation,
          certification,
        },
      })
      .then((res) => {
        console.log(res);
      });*/

      setForm({...form,id: 5});
      console.log({...form,id: 5});
  };

  console.log(id);
  return (
    <div className=" max-w-[600px] m-auto">

<h1 className="text-[24px] text-center mb-3 font-bold md:text-[30px] text-indigo-500">Edit Form</h1>
      <form onSubmit={handleUpdate} >
        <div>
          <label htmlFor="custodianDetails"></label>
          <TextInput
          label="Custodian Details:"
          className='mb-2'
            type="text"
            id="custodianDetails"
            value={custodianDetails}
            onChange={(e) => setCustodianDetails(e.target.value)}
          />
        </div>
        <div>
       
          <TextInput
          label="Other Information:"
          className='mb-2'
            type="text"
            id="otherInformation"
            value={otherInformation}
            onChange={(e) => setOtherInformation(e.target.value)}
          />
        </div>
        <div>

          <TextInput
          label="Certification:"
          className='mb-2'
            type="text"
            id="certification"
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
          />
        </div>
        <Button  onClick={handleUpdate} color="indigo" size="md" className='!bg-indigo-500 bg-slate-400 mx-auto block mt-6' uppercase>
      Update
    </Button>
      </form>
    </div>
  )
}

export default UpDate