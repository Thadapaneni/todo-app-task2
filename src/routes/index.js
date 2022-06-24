import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddBook from "../fetaures/books/Addbook";



const Index = () => {
  return (
    <BrowserRouter>
    
      
      <main>
        <Routes>
          <Route path="/" element={<AddBook/>} />
         
          
        </Routes>
      </main>
   
    </BrowserRouter>
    
    
  );
};

export default Index;
