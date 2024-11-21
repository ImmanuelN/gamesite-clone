import React, { useEffect, useState } from 'react';
import './Notifs.css'; 

const Notifs = ({ message, type, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
      onClose(); 
    }, 4000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`notification ${type} ${show ? 'show' : ''}`}
      onClick={onClose}
    >
      <span>{message}</span>
    </div>
  );
};

export default Notifs;
