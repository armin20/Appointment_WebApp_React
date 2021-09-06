import { BiCalendarPlus } from "react-icons/bi";
import { useState } from "react";

const AddAppointment = ({ onSendAppointment, lastId }) => {
  const cleanData = {
    ownerName: "",
    petName: "",
    aptDate: "",
    aptTime: "",
    aptNotes: "",
  };
  let [toggleForm, setToggleForm] = useState(false);
  let [formData, setFormData] = useState(cleanData);

  function formDataPub() {
    const appointmentInfo = {
      id: lastId + 1,
      ownerName: formData.ownerName,
      petName: formData.petName,
      aptDate: formData.aptDate + "" + formData.aptTime,
      aptNotes: formData.aptNotes,
    };
    onSendAppointment(appointmentInfo);
    setFormData(cleanData);
    setToggleForm(!toggleForm);
  }
  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`bg-blue-400 text-white px-2 py-3 w-full text-left rounded-t-md
        ${toggleForm ? "rounded-t-md" : "rounded-md"}`}
      >
        <div>
          <BiCalendarPlus className="inline-block align-text-top" />
          Add Appointment
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-grey-700 sm:mt-px sm:pt-2"
            >
              Owner Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="ownerName"
                id="ownerName"
                onChange={(event) => {
                  setFormData({ ...formData, ownerName: event.target.value });
                }}
                value={formData.ownerName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-grey-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="petName"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Pet Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="petName"
                id="petName"
                onChange={(event) => {
                  setFormData({ ...formData, petName: event.target.value });
                }}
                value={formData.petName}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptDate"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="aptDate"
                id="aptDate"
                onChange={(event) => {
                  setFormData({ ...formData, aptDate: event.target.value });
                }}
                value={formData.aptDate}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptTime"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Apt Time
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="aptTime"
                id="aptTime"
                onChange={(event) => {
                  setFormData({ ...formData, aptTime: event.target.value });
                }}
                value={formData.aptTime}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="aptNotes"
              className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
            >
              Appointment Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                type="text"
                name="aptNotes"
                id="aptNotes"
                onChange={(event) => {
                  setFormData({ ...formData, aptNotes: event.target.value });
                }}
                value={formData.aptNotes}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <button
                type="submit"
                onClick={formDataPub}
                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AddAppointment;
