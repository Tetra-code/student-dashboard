const wsProtocol = location.protocol.includes('https') ? 'wss:' : 'ws:';
const socket = new WebSocket(`${wsProtocol}//${location.host}`);

// const guid = function() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
//         var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
//         return v.toString(16);
//     });
// }

socket.onmessage = (message) =>{
    
}
