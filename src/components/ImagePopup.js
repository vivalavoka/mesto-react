import React from 'react';

export default function ImagePopup(props) {
    return (
      <section className="popup page__popup-photo">
        <div className="popup__figure-container">
          <button type="button" className="button button_action_cross popup__close-button"></button>
          <figure className="popup__figure">
            <img className="popup__photo" src="./images/elbrus.png" alt="Эльбрус" />
            <figcaption className="popup__figcaption"></figcaption>
          </figure>
        </div>
      </section>
    );
}
