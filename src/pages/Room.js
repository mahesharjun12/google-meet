import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
const Room = () => {
    let { roomId } = useParams()
    let meeting = async (element) => {
        const appID = 1452785469;
        const serverSecret = "d363c94d95a45d84fb460804cf5cdaf4";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),
            'Mahesh'
            );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'copy link',
                    url:`http://localhost:3000/room/${roomId}`
                    
                }
            ],
            scenario: {
          mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showScreenSharingButton:false

        })
    }
  return (
    <div>
          <div ref={meeting}/>
    </div>
  )
}

export default Room
