import Pusher from 'pusher-js';
let allMessages: any = [];

export const getPusher = (setMessages: any) => {
  const pusher = new Pusher('6e41731044c1abf63e74', {
    cluster: 'us2',
  });

  const channel = pusher.subscribe('chat');
  channel.bind('message', function (data: object) {
    allMessages.push(data);
    setMessages(allMessages);
  });
};
