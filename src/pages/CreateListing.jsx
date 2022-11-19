import React from "react";

export default function CreateListing() {
  const [formData, setFormData] = React.useState({
    type: "sale",
    name: "",
    bedrooms: 1,
    bathrooms: 1,
    parking: false,
    furnished: false,
    address: "",
    description: "",
    offer: false,
    regularPrice: 0,
    discountedPrice: 0,
  });
  const {
    type,
    name,
    bedrooms,
    bathrooms,
    parking,
    furnished,
    address,
    description,
    offer,
    regularPrice,
    discountedPrice,
  } = formData;
  const onChange = (prevState) => {};
  return (
    <main className="max-w-md px-2 mx-auto">
      <h1 className="text-3xl text-center mt-6 font-bold">CreateListing</h1>
      <form action="">
        <p className="text-lg t-6 font-semibold">sell / rent</p>
        <div className="flex space-x-6">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "rent"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            onClick={onChange}
            value="sale"
          >
            Rento
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              type === "sale"
                ? "bg-white text-black"
                : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            onClick={onChange}
            value="sale"
          >
            Sell
          </button>
        </div>
        <p className=" text-lg mt-6 font-semibold">Name</p>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onChange}
          placeholder="Name"
          maxLength={32}
          minLength={10}
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <div className="w-full flex space-x-6 mb-7">
          <div className="w-full">
            <p className="text-lg font-semibold">Beds</p>
            <input
              type="number"
              id="bedrooms"
              value={bedrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
          <div className="w-full">
            <p className="text-lg font-semibold">Baths</p>
            <input
              type="number"
              id="bathrooms"
              value={bathrooms}
              onChange={onChange}
              min="1"
              max="50"
              required
              className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
            />
          </div>
        </div>
        <p className="text-lg t-6 font-semibold">Parking spot</p>
        <div className="flex  mb-6  space-x-6">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            onClick={onChange}
            value={true}
          >
            Yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="type"
            onClick={onChange}
            value={false}
          >
            No
          </button>
        </div>
        <p className="text-lg t-6 font-semibold">Furnished</p>
        <div className="flex mb-6 space-x-6">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !parking ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="parking"
            onClick={onChange}
            value={true}
          >
            Yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              furnished ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="furnished"
            onClick={onChange}
            value={false}
          >
            No
          </button>
        </div>
        <p className=" text-lg mt-6 font-semibold">Address</p>
        <textarea
          type="text"
          id="address"
          value={address}
          onChange={onChange}
          placeholder="Address"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className=" text-lg  font-semibold">Description</p>
        <textarea
          type="text"
          id="description"
          value={description}
          onChange={onChange}
          placeholder="Description"
          required
          className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
        />
        <p className="text-lg font-semibold">Offer</p>
        <div className="flex  mb-6 space-x-6">
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              !offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            onClick={onChange}
            value={true}
          >
            Yes
          </button>
          <button
            className={`px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full ${
              offer ? "bg-white text-black" : "bg-slate-600 text-white"
            }`}
            type="button"
            id="offer"
            onClick={onChange}
            value={false}
          >
            No
          </button>
        </div>
        <div className="flex space-x-6 mb-7">
          <div className="w-full">
            <p className="w-full text-lg font-semibold">Regular Price</p>
            <div className="flex items-center space-x-6">
              <input
                type="number"
                id="regularPrice"
                value={regularPrice}
                onChange={onChange}
                min="50"
                max="400000000"
                required
                className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
              />
              {type === "rent" && (
                <div className="">
                  <p className="text-md w-full whitespace-nowrap">$ / Month</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {offer && (
          <div className="flex space-x-6 mb-7">
            <div className="w-full">
              <p className="w-full text-lg font-semibold">Discounted Price</p>
              <div className="flex items-center space-x-6">
                <input
                  type="number"
                  id="discountedPrice"
                  value={discountedPrice}
                  onChange={onChange}
                  min="50"
                  max="400000000"
                  required={offer}
                  className="w-full px-4 py-2 text-xl text-gray-700 bg-white border border-gray-700 transition duration-150 ease-in-out rounded focus:text-gray-700 focus:bg-white focus:border-slate-600"
                />
                {type === "rent" && (
                  <div className="">
                    <p className="text-md w-full whitespace-nowrap">
                      $ / Month
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        <div className="mb-6">
          <p className="tex-lg font-semibold">images</p>
          <p className="text-gray-600">
            The first image will be the cover (max 6)
          </p>
          <input
            type="file"
            name=""
            id="images"
            onChange={onChange}
            accept=".jpg,.png,.jpeg"
            multiple
            required
            className="w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-300 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600"
          />
        </div>
        <button
          className="mb-6 w-full px-7 py-3 bg-blue-600 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          type="submit"
        >
          Create Listing
        </button>
      </form>
    </main>
  );
}
