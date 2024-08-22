import { useEffect, useState } from "react";
import { useCreateNewContactMutation } from "../../lib/apis/contactApis";
import ErrorCard from "../commons/ErrorCard";
import SuccessCard from "../commons/SuccessCard";

const CreateNewContact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // initialize the createNewContact mutation hook
  const [createNewContact, { isSuccess, error, isError, isLoading }] =
    useCreateNewContactMutation();

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    if (!firstName || !lastName || !phoneNumber) return;
    await createNewContact({ firstName, lastName, phoneNumber });
  };

  // clear input data
  useEffect(() => {
    if (isSuccess) {
      setFirstName("");
      setLastName("");
      setPhoneNumber("");
    }
  }, [isSuccess]);

  return (
    <div
      className="modal fade"
      id="exampleModal2"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Add Contact
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {isError && (
            <ErrorCard
              errorMessage={error?.data?.error || "something went wrong"}
            />
          )}

          {isSuccess && <SuccessCard successMessage="Contact Added" />}
          <form onSubmit={formSubmitHandler}>
            <div className="modal-body">
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="First Name"
                  className="form-control"
                  onChange={(event) => setFirstName(event.target.value)}
                  value={firstName}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="form-control"
                  onChange={(event) => setLastName(event.target.value)}
                  value={lastName}
                />
              </div>
              <div className="form-group mb-3">
                <input
                  type="text"
                  placeholder="+2348100000000"
                  className="form-control"
                  onChange={(event) => setPhoneNumber(event.target.value)}
                  value={phoneNumber}
                />
              </div>
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">
                {isLoading ? "Please wait..." : "Save"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContact;
