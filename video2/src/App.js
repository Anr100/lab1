import { sendRequest, urlLookup } from "./settings/settings";
import { useState, useEffect } from "react";
import Home from "./pages/home/Home";

function App() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const bodyChiglel = {
      action: "aimagsum",
    };

    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  return (
    <>
      <Home sumname={datas && datas.data[9].sumduud[3]["sumname"]} />
    </>
  );
}

export default App;
