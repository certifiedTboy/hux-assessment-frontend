import { useEffect } from "react";
import ContactCard from "./ContactCard";
import CreateNewContact from "./CreateNewContact";
import {
  useGetAllContactsMutation,
  useDeleteContactMutation,
} from "../../lib/apis/contactApis";

const ContactList = () => {
  const [getAllContacts, { data, isLoading }] = useGetAllContactsMutation();
  const [deleteContact, { isSuccess, data: deleteData, error }] =
    useDeleteContactMutation();

  useEffect(() => {
    getAllContacts();
  }, [isSuccess]);

  // load more contacts
  const getMoreContactsHandler = (event) => {
    getAllContacts();
  };

  const onDeleteContact = async (id) => {
    await deleteContact(id);
  };

  return (
    <>
      <CreateNewContact />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column md:flex-row flex-wrap space-y-4 md:space-y-0 py-4 bg-white dark:bg-gray-900">
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>

          <a
            href="#"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal2"
          >
            {" "}
            Add Contact
          </a>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-all-search"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label for="checkbox-all-search" className="sr-only">
                    checkbox
                  </label>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                Last Name
              </th>

              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.contacts.length > 0 &&
              data?.contacts.map((contact) => {
                return (
                  <ContactCard
                    {...contact}
                    key={contact._id}
                    onDeleteContact={onDeleteContact}
                  />
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ContactList;
