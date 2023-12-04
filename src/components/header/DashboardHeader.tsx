import Image from "next/image";

export default function DashboardHeader() {

  return (
    <div className="">
      <header className="bg-white pt-2 flex justify-between items-center relative text-white">
        {/* Left Section: Icon */}
        <div className="flex items-center ml-12 mb-2">
          <Image
            src="/header_bob_logo.svg"
            alt="BobLogo"
            width={147}
            height={73}
          />
        </div>

        {/* Middle Section: Search Button */}
        <div className=" flex items-center text-center w-1/3 mr-80">
          {/* Search Icon */}
          <div className="mr-1">
            <Image
              src="/search-icon.svg"
              alt="Search Icon"
              width={25}
              height={25}
            />
          </div>
          <input
            id='searchInput'
            type="text"
            placeholder="Search"
            className="p-2 w-4/5 h-8 bg-white-700 text-black rounded-md border-none focus:border-none"
          />
          {/* Mic Icon */}
          <div className="ml-1">
            <Image src="/mic-icon.svg" alt="Mic Icon" width={18} height={18} />
          </div>
        </div>

        {/* Right Section: Button Icons */}
        <div className="flex items-center">
          {/* Example of 4 button icons */}
          <button className="mx-2">
            <Image
              src="/header-right-1.svg"
              alt="Icon 1"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/header-right-2.svg"
              alt="Icon 2"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/header-right-3.svg"
              alt="Icon 3"
              width={18}
              height={18}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/header-right-4.svg"
              alt="Icon 4"
              width={15}
              height={10}
            />
          </button>
          <button className="mx-2">
            <Image
              src="/header-profile-icon.svg"
              alt="Icon 4"
              width={40}
              height={40}
            />
          </button>
          <button className="mx-2">
            <Image src="/arrow-down.svg" alt="Icon 4" width={10} height={10} />
          </button>
        </div>
      </header>
      <hr className="border-t-1 border-{#EDEDED} mb-5" />
    </div>
  );
}
