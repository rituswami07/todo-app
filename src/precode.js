import React, {useState} from "react";

function Garage () {

    const [page, setPage] = useState(0);
  
        const arr = [
          "W3School Spaces. The easiest way to get started with creatinng HTML files is W#School Spaces!",
          "W3School Learning. It is the perfect place to create, edit, and sharw your work with others!",
        ];
     const handleNextClk = () => {
       if(page === arr.length - 1){
         return; 
       }
       setPage(page + 1);
     }
     const handlePreClk = () => {
      if(page === 0){
        return; 
      }
      setPage(page - 1)  
    }
 
  
  return (
     <div>
      
   <button onClick={handlePreClk}>Pre</button>
   <button onClick={handleNextClk}>Next</button>

   <p>{arr[page]}</p>
   </div>

   

  );
}

function App () {
  const [changeText, setChangeText] = useState(false);
  
  const handleClick = () =>  {
     setChangeText(!changeText);
  };

  return (
    <>
    <div>
      <button style={{color: "red"}} onClick={handleClick}>{changeText ? "Edit" : "Save"}</button>
    
    </div>
    <Garage />
    </>
  );
}




    

export default App;
