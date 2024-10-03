"use client"
import React, { useState } from 'react';

const Page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  const renderTask = mainTask.length > 0 ? mainTask.map((t, i) => {
    return (
      <li key={i} className='flex items-center justify-between bg-white shadow-lg p-4 rounded-lg mb-2 hover:shadow-xl transition-shadow duration-300'>
        <div className='flex flex-col w-2/3'>
          <h5 className='text-xl font-semibold text-gray-800'>{t.title}</h5>
          <h6 className='text-lg font-medium text-gray-600'>{t.desc}</h6>
        </div>
        <button onClick={() => deleteHandler(i)} className='bg-red-500 text-white px-4 py-2 rounded-md font-bold hover:bg-red-600 transition-colors duration-300'>Delete</button>
      </li>
    );
  }) : <h2 className="text-gray-500">No Task Available</h2>;

  return (
    <div className='flex flex-col items-center bg-gray-100 min-h-screen p-5'>
      <h1 className='bg-black text-white p-6 text-4xl font-bold text-center rounded-lg shadow-md'>My Todo List</h1>
      <form onSubmit={submitHandler} className='flex flex-col w-full max-w-lg bg-white rounded-lg shadow-md mt-5 p-5'>
        <input 
          type="text" 
          className='text-2xl border border-gray-300 rounded-md m-2 p-2 focus:border-indigo-500 focus:outline-none' 
          placeholder='Enter Task Here' 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required
        />
        <input 
          type="text" 
          className='text-2xl border border-gray-300 rounded-md m-2 p-2 focus:border-indigo-500 focus:outline-none' 
          placeholder='Enter Description Here' 
          value={desc} 
          onChange={(e) => setDesc(e.target.value)} 
          required
        />
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded-md hover:bg- transition-colors duration-300'>Add Task</button>
      </form>
      <hr className='my-4 w-full max-w-lg border-gray-300' />
      <div className='bg-gray-200 rounded-lg w-full max-w-lg p-4'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </div>
  );
}

export default Page;
