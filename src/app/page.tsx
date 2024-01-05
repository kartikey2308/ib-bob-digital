import { redirect } from 'next/navigation';
// import localFont from 'next/font/local'
// const myFont = localFont({ src: '/assets/fonts/AirbnbCereal_W_Md.otf' })

const Page = () => {
  redirect(`/dashboard`);
};

export default Page;