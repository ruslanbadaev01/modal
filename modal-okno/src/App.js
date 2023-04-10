import "./App.css";
import React, { useState } from "react";

const Modal = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [showRecoveryModal, setShowRecoveryModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (phoneNumber === "+7 111 111 11 11" && password === "123456") {
      setShowRecoveryModal(false);
      alert("Вы вошли");
    } else {
      alert("Неверный логин/пароль"); // обработка неверного логина или пароля
    }
  };

  const handleRecoverPassword = () => {
    setShowRecoveryModal(true);
  };

  const handleTempPassword = (e) => {
    e.preventDefault();
    setTempPassword("123456"); // временный пароль
    setShowRecoveryModal(false);
    alert("Мы отправили сообщение на указанный номер");
  };

  return (
    <>
      {!showRecoveryModal ? (
        <div className="modal-container">
          <div className="modal-logo"></div>
          {/* <div className="modal-header">
            <h2>Вход</h2>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </div> */}
          <div></div>
          <div className="modal-content">
            <form className="modal-content-form" onSubmit={handleLogin}>
              <label className="input-fir" htmlFor="phoneNumber">
                Введите логин
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+7 ___ ___ __ __"
                pattern="+7 [0-9]{3} [0-9]{3} [0-9]{2} [0-9]{2}"
                required
              />
              <label className="input-sec" htmlFor="password">
                Введите пароль
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="forgot-pass">
                {/* Забыли пароль?{" "} */}
                <a href="#" onClick={handleRecoverPassword}>
                  Забыли пароль?
                </a>
              </p>
              <button className="button-submit" type="submit">
                Войти
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="modal-container">
          <button
            className="close-btn"
            onClick={() => setShowRecoveryModal(false)}
          >
            X
          </button>
          <div className="modal-logo"></div>
          <div className="modal-header">
            <h2>Восстановление пароля</h2>
          </div>
          <div className="modal-content">
            <p>
              Вам будет отправлено SMS сообщение со временным паролем на номер
              телефона:
              <br /> <strong>{phoneNumber}</strong>
            </p>
            <button className="button-submit" onClick={handleTempPassword}>
              Продолжить
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
