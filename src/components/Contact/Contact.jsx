import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, phone, onDelete, id }) => {
  return (
    <>
      <li className={s.listItem}>
        <div className={s.wraper}>
          <p className={s.name}>
            <FaUser className={s.iconUser} />
            {name}
          </p>
          <p className={s.name}>
            <FaPhoneAlt className={s.iconUser} />
            {phone}
          </p>
        </div>

        <button
          type="button"
          className={s.deleteButton}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default Contact;
