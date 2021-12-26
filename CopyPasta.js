import { jQuery } from 'https://code.jquery.com/jquery-3.6.0.slim.min.js';
const Main = new NativeClass('Terraria', 'Main');
const ChatCommandProcessor = new NativeClass('Terraria.Chat', 'ChatCommandProcessor');

ChatCommandProcessor.ProcessIncomingMessage.hook((original, self, message, client_id ) => {
	original(self, message, client_id);
	constant command = message.Text;
	if( command.startsWith('/copy ') ){
		let value = command.split(' ')[1];
	}
});