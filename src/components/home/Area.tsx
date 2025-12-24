import { NavLink } from "react-router";
import map from "../../../public/bangladash-map.svg";
import { Button } from "../ui/button";

const Area = () => {
  return (
    <div className="bg-secondary py-10 mt-24">
      <div className="container px-5 m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10 p-4">
          {/* Map */}
          <div className="flex justify-center items-center">
            <img
              src={map}
              alt="Map of Bangladesh showing coverage"
              className="w-full max-w-[300px] object-contain"
            />
          </div>

          {/* Text Content */}
          <div className="flex justify-center items-center">
            <div>
              <h1 className="text-2xl text-justify font-semibold">
                Nationwide Logistics Coverage
              </h1>
              <p className="text-lg mt-4 text-justify">
                Easy Parcel ensures reliable and efficient delivery services
                across all 64 districts and 493 sub-districts of Bangladesh.
                From urban centers to remote areas, we make sure your parcels
                reach their destination quickly and safely.
              </p>
              <p className="text-lg my-4 text-justify">
                Our dedicated logistics network, modern tracking systems, and
                professional staff guarantee a seamless shipping experience,
                whether you're sending documents, packages, or larger shipments.
              </p>
              <NavLink to="/register">
                <Button>Start Shipping</Button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
