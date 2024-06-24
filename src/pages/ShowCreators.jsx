import { useEffect, useState } from "react";
import supabase  from "../client.js";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);
  useEffect(() => {
    const getCreatores = async () => {
      const { data } = await supabase.from("creators").select("*");
      setCreators(data);
    }

    getCreatores()
 
  }, []);

  return <div>
    <h1>Creators</h1>
    {creators.map((creator) => (
      <div key={creator.id}>
        <h1>{creator.name}</h1>
        <h2>{creator.url}</h2>
        <h3>{creator.description}</h3>
      </div>
    ))}
  </div>;
};
export default ShowCreators;
