import Image from "next/image";

export default function DashboardHeader() {

  return (
    <div className="">
      <header className="bg-white pt-2 flex items-center justify-between">
        {/* Left Section: Icon */}
        <div className="flex items-center ml-12 mb-2">
          <Image
            src="/assets/images/header_bob_logo.svg"
            alt="BobLogo"
            width={147}
            height={73}
          />
        </div>

        {/* Middle Section: Search Button */}
        <div className=" flex items-center w-1/3 border-2 border-neutral-900 rounded-md p-1 mb-2 mr-96">
          {/* Search Icon */}
          <div className="mr-1">
            <Image
              src="/assets/images/search-icon.svg"
              alt="Search Icon"
              width={25}
              height={25}
            />
          </div>
          <input
            id='searchInput'
            type="searchBox"
            placeholder="Search"
            className="p-2 w-4/5 h-8 bg-white-700 text-black outline-none rounded-md border-none"
          />
          {/* Mic Icon */}
          <div className="ml-10">
            <Image src="/assets/images/mic-icon.svg" alt="Mic Icon" width={18} height={18} />
          </div>
        </div>

        {/* Right Section: Button Icons */}
        <div className="flex items-center">
          {/* Example of 4 button icons */}
          <button className="mx-3">
            <Image
              src="/assets/images/header-right-1.svg"
              alt="add"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-3">
            <Image
              src="/assets/images/header-right-2.svg"
              alt="notification"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-3">
            <Image
              src="/assets/images/header-right-3.svg"
              alt="info"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-3">
            <Image
              src="/assets/images/header-right-4.png"
              alt="issues"
              width={15}
              height={21}
            />
          </button>
          <button className="ml-3 mb-1">
            <Image
              src="/assets/images/header-profile-icon.svg"
              alt="profile"
              width={40}
              height={40}
            />
          </button>
          <button className="ml-1 mr-10">
            <Image src="/assets/images/arrow-down.svg" alt="more" width={10} height={10} />
          </button>
        </div>
      </header>
      <hr className={`border-t-2 border-neutral-900`} />
    </div>
  );
}
