
import { SideBarItem } from '../types/side-nav-type';
import InvestIcon from '@/components/icons/InvestIcon';
import ShopIcon from '@/components/icons/ShopIcon';
import SaveIcon from '@/components/icons/SaveIcon';
import BorrowIcon from '@/components/icons/BorrowIcon';
import Image from 'next/image';
import FundTransferIcon from '@/components/icons/FundTransferIcon';

export const SIDEBAR_ITEMS: SideBarItem[] = [
  {
    title: 'Save',
    path: '/',
    icon:  <SaveIcon/>
  },
  {
    title: 'Invest',
    path: '/invest',
    icon: <InvestIcon />
   
  },
  {
    title: 'Borrow',
    path: '/borrow',
    icon: <BorrowIcon />
  },
  {
    title: 'Shop',
    path: '/shop',
    icon: <ShopIcon/>
   
  },
  {
    title: 'Transfer',
    path: '/fundTransfer',
    icon: <FundTransferIcon/>
  }
];