Part1

- ABOUT MediaDevices

Part2

- ABOUT connection
  there are two things to be done
  1.brower find another brower
  2.exchange some information
  these two things are called **Signaling**
  and the information to be exchanged is called IceCandidate and SDP

  the exchange process will be excuted through a server which is called **Signaling Server** using websocket
  So why don't use http to exchange the info?
  because when a brower request the signaling server to send the info to the another brower, the server is push a response to that brower without a request.Http can't do that, but it's what websocket can do.
