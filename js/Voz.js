

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[10]; // Note: some voices don't support altering params
msg.voiceURI = 'Monica (es-ES)';
msg.volume = 1; // 0 to 1
msg.rate = 0.8; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = "¡Hola!. Bienvenido a la WEB. de 'Sebastián Roa meneses'. ¡Aqui podras encontrar ayuda!";
msg.lang = 'es-ES';

msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

speechSynthesis.speak(msg);

//de aqui saque el ejemplo https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
