import React, {useEffect , useState} from 'react';
import Layout from '../../components/Layout/Layout';
import AdminMenu from '../../components/Layout/AdminMenu';
import toast from 'react-hot-toast'
import axios from 'axios';
import { authEndPoints } from '../../service/auth';
import CategoryForm from '../../components/form/CategoryForm';


import {Modal} from 'antd';

 const CreateCategory = () => {
 
  const[categories, setCategories]=useState([]);
  const [name, setName]=useState("");
  const [visible, setVisible]=useState(false);
  const [selected, setSelected]=useState(null);

  const [updatedName, setUpdatedName]=useState("");


  //handle form
  const handleSubmit= async (e)=>{
    e.preventDefault()
    try{
const {data}=await axios.post(`${authEndPoints.createCategory}`, {name});
      
if (data?.success) {
  toast.success(`${name} is created`);
  getAllCategory();
  
}
else{
  toast.error(data.message);
}
}
    
    catch(error){
      console.log(error);
      toast.error('something went wrong in input form');
    }
  };
  
  //get all cat
  const getAllCategory = async()=>{
    try{
      const { data } = await axios.get(`${authEndPoints.getCategory}`);
      
      if (data?.success) {
        setCategories(data?.category);
      }
    }
    catch(error){
    console.log(error)
    toast.error("Something went wrong in getting category");
    }
  };
  useEffect(() =>{
    getAllCategory();
  }, []);
  
   //update cat
   const handleUpdate =async(id)=>{
  
    try{
      
      const { data } = await axios.put(
        authEndPoints.updateCategory + selected._id,
        {name: updatedName }

      );
      if (data?.success) {
        toast.success(`${updatedName} is updated`);
        setSelected(null);
        // eslint-disable-next-line no-const-assign
        setUpdatedName=("");
        setVisible(false);
        getAllCategory();


      } else {
        toast.error(data.message);
      }
    }
    catch(error){
      toast.error('Something went wrong ');
    }
   };

   //delete cat
   const handleDelete = async(pId)=>{
    try{
      const { data } = await axios.delete(
      authEndPoints.deleteCategory + pId,
      );
      if (data?.success) {
        toast.success(`category is deleted`);
        getAllCategory();
      } else {
        toast.error(data.message);
      }
    }
    catch(error){
      toast.error('Something went wrong ')
    }
   };

  return (
    <Layout title ={"Dashboard - Create Category"}>

       <div className="container-fluid m-3 p-3 dashboard">
    <div className="row">
      <div className="col-md-3">
        <AdminMenu/>
        </div>
        <div className="col-md-9">
            <h1>Manage Category</h1>
            <div className="p-3 w-50">
              <CategoryForm handleSubmit={handleSubmit} value ={name} setValue={setName}/>
            </div>
            <div className='w-75'>
             
           <table className="table">
  <thead>
    <tr>
     
      <th scope="col">Name</th>
      <th scope="col">Actions</th>
   
    </tr>
    </thead>
    <tbody>
      
    {categories?.map(c=>(
      <>
      <tr>
      <td key={c._id}>{c.name}</td>
      <td>
        <button className="btn btn-primary ms-2" onClick={()=> {setVisible(true); setUpdatedName(c.name);  setSelected(c);}}>Edit</button>
        <button className="btn btn-danger ms-2" onClick={() => {handleDelete(c._id)}}>Delete</button>
        </td>
        </tr>
        </>
    ))}
   
  </tbody>
</table>

        </div>
        <Modal onCancel ={()=>setVisible(false)} footer={null} 
        open={visible}>
          <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate}/>

        </Modal>
        </div></div>
        </div>
    </Layout>
  );
};

export default CreateCategory;
