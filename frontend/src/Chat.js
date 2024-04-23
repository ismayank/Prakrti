import React, { Component } from 'react';

class Chat extends Component {
  

  componentDidMount() {
    if (!window.kommunicate) {
      (function(d, m) {
        var kommunicateSettings = {
          appId: '20fed8ee585f7aca1181d1d2756fdce1c',
          popupWidget: true,
          automaticChatOpenOnNavigation: true
        };
        var s = document.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://widget.kommunicate.io/v2/kommunicate.app';
        var h = document.getElementsByTagName('head')[0];
        h.appendChild(s);
        window.kommunicate = m;
        m._globals = kommunicateSettings;
      })(document, window.kommunicate || {});
    }
  }

  render() {
    return (
      <div></div>
    );
  }
}
export default Chat;
