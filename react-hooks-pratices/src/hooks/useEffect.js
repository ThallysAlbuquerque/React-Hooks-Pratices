import {useState,useEffect} from "react";

const useEffectHook = () => {
    const [resourceType, setResourceType] = useState("posts");

    useEffect(() =>{
        console.log("resource type change");
    }, [resourceType]);

    const changeResourceType = (resourceType) => {
        setResourceType(resourceType);
    };
      
        return (
          <div>
            <h1>UseEffect</h1>
            <h1>{resourceType}</h1>
            <div style={{display: "flex", alignItems: "center"}}>
                <button onClick={()=> changeResourceType("posts")}>Posts</button>
                <button onClick={()=> changeResourceType("comments")}>Comments</button>
                <button onClick={()=> changeResourceType("todos")}>Todos</button>
            </div>

            <br></br>
                <br></br>
                <br></br>
                <br></br>
          </div>
        );
    
      
};

export default useEffectHook;