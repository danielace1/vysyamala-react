import { Link } from "react-router-dom";
import ContentCard from "../Components/RegistrationForm/ContentBlackCard";
import InputField from "../Components/RegistrationForm/InputField";
import SideContent from "../Components/RegistrationForm/SideContent";
import arrow from "../assets/icons/arrow.png";

interface ContactDetailsProps {
  heading?: string;
  desc?: string;
  name?: string;
  label?: string;
  type?: string; // Make type optional with a default value
}

const ContactDetails: React.FC<ContactDetailsProps> = () => {
  return (
    <div className="py-20">
      <ContentCard
        heading={"Contact Information"}
        desc="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis "
      />

      <div className="container mt-5 flex justify-between space-x-24">
        <div className="w-full space-y-5">
          <InputField label={"Address *"} name={"address"} />

          <div>
            <label htmlFor="country" className="block mb-1">
              Country *
            </label>
            <select
              name="country"
              id="country"
              className="outline-none w-full px-4 py-1.5 border border-ashSecondary rounded"
            >
              <option value="" selected disabled>
                -- Select Country --
              </option>
              <option value="IN">India</option>
              <option value="PKN">Pakistan</option>
              <option value="SL">Sri Lanka</option>
              <option value="MLA">Malaysia</option>
              <option value="SK">South Korea</option>
            </select>
          </div>

          <div>
            <label htmlFor="state" className="block mb-1">
              State * (Based on country selection )
            </label>
            <select
              name="state"
              id="state"
              className="outline-none w-full px-4 py-1.5 border border-ashSecondary rounded"
            >
              <option value="" selected disabled>
                -- Select State --
              </option>
              <option value="TamilNadu">TamilNadu</option>
              <option value="Delhi">Delhi</option>
              <option value="Assam">Assam</option>
              <option value="Kerala">Kerala</option>
            </select>
          </div>

          <div>
            <label htmlFor="city" className="block mb-1">
              City * (Based on country selection )
            </label>
            <select
              name="city"
              id="city"
              className="outline-none w-full px-4 py-1.5 border border-ashSecondary rounded"
            >
              <option value="" selected disabled>
                -- Select City --
              </option>
              <option value="Chennai">Chennai</option>
              <option value="Tirunelveli">Tirunelveli</option>
              <option value="Trichy">Trichy</option>
              <option value="Salem">Salem</option>
            </select>
          </div>

          <InputField
            label={"Pincode (Based on country selection)"}
            name={"pincode"}
            type="number"
          />

          <InputField
            label={"Alternate Mobile Number"}
            name={"alternatemobileNumber"}
            type="tel"
          />

          <InputField
            label={"Whatsapp Number"}
            name={"whatsappNumber"}
            type="tel"
          />

          <div className="!mt-12">
            <h1 className="font-bold text-xl text-primary mb-3">
              For Admin Verification
            </h1>

            <div className="space-y-5">
              <InputField
                label={"Daughter Mobile Number"}
                name={"daughterMobileNumber"}
                type="number"
              />

              <InputField
                label={"Daughter Email"}
                name={"daughterEmail"}
                type="email"
              />
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              {/* <button className="text-main px-7 py-1.5 font-semibold  border-2  border-main rounded">
                Skip
              </button> */}
              <Link to="/UploadImages">
                <button className="flex items-center py-[10px] px-14 bg-gradient text-white rounded-[6px] mt-2">
                  Next
                  <span>
                    <img src={arrow} alt="next arrow" className="ml-2" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        <SideContent />
      </div>
    </div>
  );
};

export default ContactDetails;
