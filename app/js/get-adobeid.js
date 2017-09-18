const getAdobeID = () => {
  const aID = document.cookie.match( '(^|;)\\s*AMCV_2C7336C753C676BA0A490D4B%40AdobeOrg\\s*=\\s*([^;]+)' );
  return aID ? decodeURIComponent(aID.pop()).split('|')[4] : '00000000000000000000000000000000000000';
}

export default getAdobeID;
