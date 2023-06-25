import React, { useContext, useState } from 'react'
import {TextInput,Button} from '@mantine/core';
import { DataContext } from '../data/Context';
import { useNavigate } from 'react-router-dom';
function AddItem() {
    const AllData = useContext(DataContext);
const navigaton = useNavigate();
    const [Title, setTitle] = useState("");
const [custodianDetails, setCustodianDetails] = useState("");
const [otherInformation, setOtherInformation] = useState("");
const [certification, setCertification] = useState("");

const AddItem =()=>{
    AllData.push({
      "id": AllData.length+1,
          "title": Title,
          "requirements": {
            "custodianDetails": custodianDetails,
            "otherInformation": otherInformation,
            "certification": certification
          },
          "actionDate": "2021-02-01"
    });
    
    console.log(AllData);
navigaton('/')
    
    }

  return (
    <div>
         <h2> To Add New Item</h2>
      <form  >
      <div>
          <label htmlFor="custodianDetails"></label>
          <TextInput
          label="Title:"
          className='mb-2'
            type="text"
            id="Title"
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
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
        <Button onClick={()=>{Title.length&certification.length&custodianDetails.length&otherInformation.length?AddItem():alert("enter all data");}} color="indigo" size="md" className='!bg-indigo-500 bg-slate-400 mx-auto block mt-6' uppercase>
     Add Item
    </Button>
      </form>
    </div>
  )
}

export default AddItem