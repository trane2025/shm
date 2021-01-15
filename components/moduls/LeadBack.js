import React from 'react';

class LeadBack extends React.Component {

render () {
  const re = /&quot;/gi;
 
  return (
    <script id="leadback">

        var _emv = _emv || [];
        _emv[`campaign`] = `52ef2da9af3b2f6a476839a3`;
    

        var em = document.createElement(`script`); em.type = `text/javascript`; em.async = true;
        em.src = (`https:` == document.location.protocol ? `https://` : `http://`) + `leadback.ru/js/leadback.js`;
        var s = document.getElementsByTagName(`script`)[0]; s.parentNode.insertBefore(em, s);
    </script>
  )
}
}



export default  LeadBack;