import React from "react";
import * as S from "./style";

export default function index() {
  return (
    <S.Container>
      <h2>Location</h2>
      <p>
        The main Monster Gym is located at FC road near Chanakya academy Narmada
        apartment , Monday to Friday, from 6:00 AM to 10:00 PM, and on Saturdays
        and Sundays, from 8:00 AM to 3:00 PM.
      </p>
      <S.Iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29759.62316481575!2d-47.83389866352083!3d-21.194030107372686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf5bf9278bbb%3A0xcf5aa0e09446ce72!2sBurger%20King!5e0!3m2!1spt-BR!2sbr!4v1659380985699!5m2!1spt-BR!2sbr"
        height="400"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></S.Iframe>
    </S.Container>
  );
}
