import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Table, TextInput, Button } from "@mantine/core";
import { DataContext } from "../data/Context";
import { useNavigate } from "react-router-dom";
function Home() {
  const AllData = useContext(DataContext);
  /*Because I don't have api real, so I'm going to use data in json's file. 
And I'll write codes to see if I have api. What was I writing? */
  const navigaton = useNavigate();

  const [forms, setForms] = useState([]);
  const [forms2, setForms2] = useState(AllData);
  const [editingItem, setEditingItem] = useState(null);
  const [editingID, setEditingID] = useState();

  const [Title, setTitle] = useState("");
  const [custodianDetails, setCustodianDetails] = useState("");
  const [otherInformation, setOtherInformation] = useState("");
  const [certification, setCertification] = useState("");

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  useEffect(() => {
    setForms(AllData);
    setTitle(editingID?forms.find((item)=>item.id === editingID).title:"")
    setCustodianDetails(editingID?forms.find((item)=>item.id === +editingID).requirements.custodianDetails:"");
    setOtherInformation(editingID?forms.find((item)=>item.id === +editingID).requirements.otherInformation:"");
    setCertification(editingID?forms.find((item)=>item.id === +editingID).requirements.certification:"")
  }, [editingID]);

  //to get data from api by use 'axios' and put this data in state 'form'

  /*  axios.get("../data/data.json").then((res) => {
      console.log(res);
      setForms(res.data.forms);
    });
    */
    const editItem =()=>{
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
  const handleDelete = (id) => {
    setForms(forms.filter((item) => item.id !== +id));

    //The id to determine the element to be deleted and sent  this request by ' axios.delete'.
    /*
    axios.delete(`/api/forms/${id}`).then((res) => {
      setForms(forms.filter((form) => form.id !== id));
    });
    */
  };
 /* const handleUpdate = (event) => {
    event.preventDefault();
    setForms(prevItems => prevItems.map(item => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          name: event.target.name.value,
          description: event.target.description.value
        };
      } else {
        return item;
      }
    }))
    // Update the item with the new data
    setItems(prevItems => prevItems.map(item => {
      if (item.id === editingItem.id) {
        return {
          ...item,
          name: event.target.name.value,
          description: event.target.description.value
        };
      } else {
        return item;
      }
    }));
    // Clear the editing state
    setEditingItem(null);
  };*/
  return (
    <div className="table">
      <Table miw={700} className="m-auto">
        <thead>
          <tr>
            <th>Title</th>
            <th>Custodian Details</th>
            <th>Other Information</th>
            <th>Certification</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form.id}>
              <td>{form.title}</td>
              <td>{form.requirements.custodianDetails}</td>
              <td>{form.requirements.otherInformation}</td>
              <td>{form.requirements.certification}</td>
              <td>
                <button type="button" onClick={() => handleDelete(form.id)}>
                  Delete
                </button>
                <button type="button" onClick={()=>{setEditingID(form.id) ; console.log(editingID);}}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
   
    
      <Button
        onClick={() => navigaton("/additem")}
        color="indigo"
        size="md"
        className="!bg-indigo-500 bg-slate-400 mx-auto block mt-6"
        uppercase
      >
        Add Item
      </Button>
      <h2>for edit</h2>
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
        <Button onClick={()=>{Title.length!==0&certification.length!==0&custodianDetails.length!==0&otherInformation.length!==0?editItem():alert("Enter all data");}} color="indigo" size="md" className='!bg-indigo-500 bg-slate-400 mx-auto block mt-6' uppercase>
     Add Item
    </Button>
      </form>
    </div>
  );
}

export default Home;
