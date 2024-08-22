import { useState } from "react";
import ContactDetails from "./ContactDetails";
import dummy_image from "../../Assets/dummy.jpg";

const ContactCard = ({
  firstName,
  lastName,
  phoneNumber,
  _id,
  onDeleteContact,
}) => {
  const [contactId, setContactId] = useState("");

  // get sinlge contact handler function
  const getSingleContactHandler = async (event) => {
    setContactId(event.target.getAttribute("value"));
  };

  // delet contact handler
  const deleteContact = (event) => {
    event.preventDefault();
    onDeleteContact(event.target.getAttribute("value"));
  };
  return (
    <>
      <ContactDetails contactId={contactId} />
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td className="w-4 p-4">
          <div className="flex items-center">
            <input
              id="checkbox-table-search-1"
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label for="checkbox-table-search-1" className="sr-only">
              checkbox
            </label>
          </div>
        </td>
        <th
          scope="row"
          className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
        >
          <img
            className="w-10 h-10 rounded-full"
            src={dummy_image}
            alt="profile_image"
          />
          <div className="ps-3">
            <div className="text-base font-semibold text-cyan-900">
              {firstName} {lastName}
            </div>
            <div className="font-normal text-gray-500">{phoneNumber}</div>
          </div>
        </th>

        <td className="px-6 py-4">
          <a
            href="#"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            value={_id}
            onClick={getSingleContactHandler}
          >
            View
          </a>
        </td>
        <td className="px-6 py-4">
          <a
            href="#"
            type="button"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            value={_id}
            onClick={deleteContact}
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
};

export default ContactCard;
