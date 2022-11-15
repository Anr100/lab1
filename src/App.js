import { useStat,useEffect } from "react";
import { sendRequest, urlLookup } from "../../settings/settings";

function App() {
  const [datas, setDatas] = useStat();
useEffect(() => {

  const bodyChiglel = {
    action: "chiglel",
  };

  sendRequest(urlLookup,bodyChiglel).then((data) => setDatas(data));
  },[])
  
  return (
  
   <p>{datas && JSON.stringify(datas)}</p>
   
  );


}
export default App;