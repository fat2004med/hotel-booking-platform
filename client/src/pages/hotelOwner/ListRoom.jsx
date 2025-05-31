import React, { useState } from "react";
import { roomsDummyData } from "../../assets/assets.js";
import Title from "../../components/Title.jsx";

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);

  // 🔄 Handler to toggle availability
  const handleToggleAvailability = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index].isAvailable = !updatedRooms[index].isAvailable;
    setRooms(updatedRooms);
  };

  return (
    <div>
      <Title
        font="outfit"
        align="left"
        title="Room Listings"
        subTitle="View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best user experience."
      />
      <p className="text-gray-500 mt-8">All Rooms</p>

      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="text-center py-3 px-4 text-gray-800 font-medium">
                Price / night
              </th>
              <th className="text-center py-3 px-4 text-gray-800 font-medium">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.roomType}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  ${item.pricePerNight}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-sm text-center">
                  <button
                    type="button"
                    className={`w-14 h-7 flex  cursor-pointer items-center rounded-full p-1 transition-colors duration-300 focus:outline-none ${
                      item.isAvailable ? "bg-blue-500" : "bg-gray-300"
                    }`}
                    onClick={() => handleToggleAvailability(index)}
                    aria-label={`Toggle room availability for ${item.roomType}`}
                  >
                    <div
                      className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
                        item.isAvailable ? "translate-x-7" : "translate-x-0"
                      }`}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListRoom;
