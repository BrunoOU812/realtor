import { doc, getDoc, limitToLast } from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
export default function Contact({ userRef, listing }) {
  const [landlord, setLandlord] = React.useState(null);
  const [message, setMessage] = React.useState(".");
  useEffect(() => {
    const getLandlord = async () => {
      const docRef = doc(db, "users", userRef);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLandlord(docSnap.data());
      } else {
        toast.error("Could not get landlord data");
      }
    };
    getLandlord();
  }, [userRef]);
  const onChange = (e) => {
    setMessage(e.target.value);
  };
  return (
    <>
      {landlord !== null && (
        <div className="flex flex-col w-full">
          <p className="">
            Contact {landlord.name} for the {listing.name.toLowerCase()}
          </p>
          <div className="mt-3 pb-6">
            <textarea
              name="message"
              id="message"
              rows="2"
              value={message}
              onChange={onChange}
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-gray-700 focus:bgwhite
              focus:border-slate300"
            ></textarea>
          </div>
          <a
            href={`mailto:${landlord.email}?Subject=${listing.name}&body=${message}`}
          >
            <button
              className="px-7 py-3 bg-blue-600 text-white rounded text-sm uppercase shadow-md hover:bg-blue-700 hover:shadow-lg hover:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full text-center mb-6"
              type="button"
            >
              Send Message
            </button>
          </a>{" "}
        </div>
      )}
    </>
  );
}
