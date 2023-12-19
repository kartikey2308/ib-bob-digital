import Image from "next/image";

export default function DashboardHeader() {

  return (
    <div className="">
      <header className="bg-white flex items-center justify-between p-1">
        {/* Left Section: Icon */}
        <div className="flex items-center ml-8">
          <Image
            src="/assets/images/header_bob_logo.svg"
            alt="BobLogo"
            width={107}
            height={34}
          />
        </div>

        {/* Middle Section: Search Button */}
        <div className=" flex items-center w-1/3 h-8 border border-neutral-900 rounded mr-80">
          {/* Search Icon */}
          <div className="m-2">
            <Image
              src="/assets/images/search-icon.svg"
              alt="Search Icon"
              width={19}
              height={19}
            />
          </div>
          <input
            id='searchInput'
            type="searchBox"
            placeholder="Search"
            className="w-4/5 placeholder:text-secondary-1100 placeholder:text-base bg-white-700 text-black outline-none rounded-md border-none"
          />
          {/* Mic Icon */}
          <div className="ml-4">
            <Image src="/assets/images/mic-icon.svg" alt="Mic Icon" width={13} height={16} />
          </div>
        </div>

        {/* Right Section: Button Icons */}
        <div className="flex items-center">
          {/* Example of 4 button icons */}
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-1.svg"
              alt="add"
              width={12}
              height={12}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-2.svg"
              alt="notification"
              width={12}
              height={12}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-3.svg"
              alt="info"
              width={12}
              height={12}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-4.svg"
              alt="issues"
              width={11}
              height={16}
            />
          </button>
          <button className="ml-3 mb-1">
            <Image
              src="/assets/images/header-profile-icon.svg"
              alt="profile"
              width={32}
              height={32}
            />
          </button>
          <button className="ml-1 mr-5">
            <Image src="/assets/images/arrow-down.svg" alt="more" width={7} height={4} />
          </button>
        </div>
      </header>
      <hr className={`border-t border-neutral-900`} />
    </div>
  );
}
