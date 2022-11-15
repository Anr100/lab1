import { sendRequest, urlLookup } from "./settings/settings";
import { useState, useEffect } from "react";

function App() {
  const [datas, setDatas] = useState();
  useEffect(() => {
    const bodyChiglel = {
      action: "chiglel",
    };

    sendRequest(urlLookup, bodyChiglel).then((data) => setDatas(data));
  }, []);

  return (
    <>
      <p>{datas && JSON.stringify(datas)}</p>
    </>
  );
}
export default App;
