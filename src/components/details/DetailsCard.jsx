import { useEffect, useState } from "react";

const DetailsCard = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    // Fetch your data here
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setDetails(data[0])); // Access the first item in the array
  }, []);

  if (!details) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="mt-8 py-8 bg-white px-8">
      <div className="personal-info">
        <p className="font-bold">Personal Information</p>
        <div className="grid my-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5  gap-5">
          <div>
            <p>Full Name</p>
            <p className="font-bold text-gray-800">{details.full_name}</p>
          </div>
          <div>
            <p>Phone Number</p>
            <p className="font-bold text-gray-800">{details.phone_number}</p>
          </div>
          <div>
            <p>Email Address</p>
            <p className="font-bold text-gray-800">{details.email_address}</p>
          </div>
          <div>
            <p>BVN</p>
            <p className="font-bold text-gray-800">
              {details.financial_details.bvn}
            </p>
          </div>
          <div>
            <p>Gender</p>
            <p className="font-bold text-gray-800">{details.gender}</p>
          </div>
          <div>
            <p>Marital Status</p>
            <p className="font-bold text-gray-800">{details.marital_status}</p>
          </div>
          <div>
            <p>Children</p>
            <p className="font-bold text-gray-800">{details.children}</p>
          </div>
          <div>
            <p>Type of Residence</p>
            <p className="font-bold text-gray-800">
              {details.type_of_residence}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 h-[0.05rem]"></div>
      <div>
        <p className="font-bold mt-8">Education and Employment</p>
        <div className="grid my-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <div>
            <p>Level of Education</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.level_of_education}
            </p>
          </div>
          <div>
            <p>Employment Status</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.employment_status}
            </p>
          </div>
          <div>
            <p>Sector of Employment</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.sector_of_employment}
            </p>
          </div>
          <div>
            <p>Duration of Employment</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.duration_of_employment}
            </p>
          </div>
          <div>
            <p>Office Email</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.office_email}
            </p>
          </div>
          <div>
            <p>Monthly Income</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.monthly_income}
            </p>
          </div>
          <div>
            <p>Loan Repayment</p>
            <p className="font-bold text-gray-800">
              {details.education_employment.loan_repayment}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 h-[0.05rem]"></div>
      <div>
        <p className="font-bold mt-8">Socials</p>
        <div className="grid my-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          <div>
            <p>Twitter</p>
            <p className="font-bold text-gray-800">{details.socials.twitter}</p>
          </div>
          <div>
            <p>Facebook</p>
            <p className="font-bold text-gray-800">
              {details.socials.facebook}
            </p>
          </div>
          <div>
            <p>Instagram</p>
            <p className="font-bold text-gray-800">
              {details.socials.instagram}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-400 h-[0.05rem] "></div>
      <div>
        <p className="font-bold mt-8">Guarantor</p>
        <div className="grid my-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-5">
          <div>
            <p>Full Name</p>
            <p className="font-bold text-gray-800">
              {details.guarantor.full_name}
            </p>
          </div>
          <div>
            <p>Phone Number</p>
            <p className="font-bold text-gray-800">
              {details.guarantor.phone_number}
            </p>
          </div>
          <div>
            <p>Email Address</p>
            <p className="font-bold text-gray-800">
              {details.guarantor.email_address}
            </p>
          </div>
          <div>
            <p>Relationship</p>
            <p className="font-bold text-gray-800">
              {details.guarantor.relationship}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
