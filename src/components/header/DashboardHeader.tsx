import Image from "next/image";

export default function DashboardHeader() {

  return (
    <div className="">
      <header className="bg-white pt-2 flex justify-between items-center relative text-white">
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
        <div className=" flex items-center text-center w-1/3 mr-80 border-2 border-neutral-900 rounded-lg p-1 mb-1">
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
          <div className="ml-14">
            <Image src="/assets/images/mic-icon.svg" alt="Mic Icon" width={18} height={18} />
          </div>
        </div>

        {/* Right Section: Button Icons */}
        <div className="flex items-center">
          {/* Example of 4 button icons */}
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-1.svg"
              alt="Icon 1"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-2.svg"
              alt="Icon 2"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-3.svg"
              alt="Icon 3"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-right-4.svg"
              alt="Icon 4"
              width={15}
              height={10}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/assets/images/header-profile-icon.svg"
              alt="Icon 4"
              width={40}
              height={40}
            />
          </button>
          <button className="mx-2">
            <Image src="/assets/images/arrow-down.svg" alt="Icon 4" width={10} height={10} />
          </button>
        </div>
      </header>
      <hr className={`border-t-1 border-neutral-900 mb-5`} />
    </div>
  );
}
