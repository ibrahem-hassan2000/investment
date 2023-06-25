import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import { Table , TextInput,Button} from '@mantine/core';
import { DataContext } from '../data/Context';
import { useNavigate } from 'react-router-dom';
function Home() {
const AllData = useContext(DataContext);
/*Because I don't have api real, so I'm going to use data in json's file. 
And I'll write codes to see if I have api. What was I writing? */
const navigaton = useNavigate();


  const [forms, setForms] = useState(AllData);
  
 
   
     
   
    //to get data from api by use 'axios' and put this data in state 'form'

  /*  axios.get("../data/data.json").then((res) => {
      console.log(res);
      setForms(res.data.forms);
    });
    */
  const handleDelete = (id) => {
    //The id to determine the element to be deleted and sent  this request by ' axios.delete'.
    /*
    axios.delete(`/api/forms/${id}`).then((res) => {
      setForms(forms.filter((form) => form.id !== id));
    });
    */
  };





 
  return (
    <div className="table">
          <Table miw={700} className="m-auto">
          <thead >
    <tr>
    <th>Title</th>
            <th>Custodian Details</th>
            <th>Other Information</th>
            <th>Certification</th>
            <th>Action</th>
    </tr>
  </thead>
        <tbody>
          {AllData.map((form) => (
            <tr key={form.id}>
              <td>{form.title}</td>
              <td>{form.requirements.custodianDetails}</td>
              <td>{form.requirements.otherInformation}</td>
              <td>{form.requirements.certification}</td>
              <td>
                <button type="button" onClick={() => handleDelete(form.id)}>
                  Delete
                </button>
                <button type="button">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Button onClick={()=>navigaton('/additem')} color="indigo" size="md" className='!bg-indigo-500 bg-slate-400 mx-auto block mt-6' uppercase>
     Add Item
    </Button>
    </div>
  )
}

export default Home