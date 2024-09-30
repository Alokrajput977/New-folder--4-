import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/appContext";
import { assets } from "../../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbols } = useContext(AppContext);
  const daysofweek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const [DocInfo, setDocInfo] = useState(null);
  const [docSlots, setdocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0); // Initialize slotIndex

  const fetchDocInfo = () => {
    const DocInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(DocInfo);
    console.log(DocInfo);
  };

  const getAvailableSlots = async () => {
    setdocSlots([]);

    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currDate = new Date(today);
      currDate.setDate(today.getDate() + i);

      let endtime = new Date();
      endtime.setDate(today.getDate() + i);
      endtime.setHours(21, 0, 0, 0);

      if (today.getDate() === currDate.getDate()) {
        currDate.setHours(currDate.getHours() > 10 ? currDate.getHours() + 1 : 10);
        currDate.setMinutes(currDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currDate.setHours(10);
        currDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currDate < endtime) {
        let formattedTime = currDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currDate),
          time: formattedTime,
        });
        currDate.setMinutes(currDate.getMinutes() + 30);
      }
      setdocSlots(prev => [...prev, ...timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [DocInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  const handleSlotClick = (index) => {
    setSlotIndex(index); // Update slotIndex when a slot is clicked
  };

  return (
    DocInfo && (
      <div className="">
        {/* ----------doctor details------------*/}
        <div className="flex flex-col sm:flex-row gap-4">
          {DocInfo ? (
            <div>
              <img
                className="bg-primary w-full sm:max-w-72 rounded-lg"
                src={DocInfo.image}
                alt={DocInfo.name}
              />
            </div>
          ) : (
            <p>Doctor not found.</p>
          )}
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {DocInfo.name}
              <img className="w-5" src={assets.verified_icon} alt="" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {DocInfo.degree}-{DocInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-sm rounded-full ">
                {DocInfo.experience}
              </button>
            </div>
            {/*----doctor about------- */}
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {DocInfo.about}
              </p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbols}
                {DocInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* BOOKING SLOTS */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p className="text-lg font-semibold">Booking Slots</p>
          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length > 0 ? (
              docSlots.map((slot, index) => (
                <div
  key={index}
  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? ' text-white bg-primary' : 'border border-gray-200 text-gray-800'}`}
  onClick={() => handleSlotClick(index)} // Set click handler
>
                  <p className="text-gray-800">{daysofweek[slot.datetime.getDay()]}</p>
                  <p className="text-gray-600">{slot.datetime.getDate()}</p>
                  <p className="text-gray-500">{slot.time}</p> {/* Display the time as well */}
                </div>
              ))
            ) : (
              <p className="text-gray-500">No available slots.</p>
            )}
          </div>

          <button className="bg-primary text-white text-sm font-light px-14 py-3  rounded-full my-6">Book an Appointment</button>
        </div>

        { /* related doctors list*/}

        <RelatedDoctors docId={docId} speciality={DocInfo.speciality} />
      </div>
    )
  );
};

export default Appointment;
