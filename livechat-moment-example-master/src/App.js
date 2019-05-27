import React, {useEffect} from 'react';
import LiveChat from "./widget-sdk";

const App = () => {
  useEffect( ()=> {
    (async ()=>{
      await LiveChat.init();
    })();
  });

  const sendMoment = async () => {
    await LiveChat.sendCards({
      title: "I can talk",
      subtitle: "Simple app for big things",
      image: {
        url: "https://image.flaticon.com/icons/svg/1742/1742324.svg",
      },
      buttons: [
        {
          type: "webview",
          webview_height: "full",
          text: "Start your conversation",
          value: "https://jponiatowski.github.io/hackathon-client/",
          postback_id: "action_yes"
        }
      ]
    });
  };

  return (
    <div>
      <p>
        Example app for sending LiveChat moment
      </p>
      <button onClick={sendMoment}>
        Send Moment
      </button>
    </div>
  );
};



export default App;
