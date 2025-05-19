'use client';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import Introduction from '@/components/home/Introduction';
import Profile from '@/components/home/Profile'; // Personal profile component
import SelectedPapers from '@/components/home/Selected'; // Selected papers component
import JoinUs from '@/components/home/JoinUs'; // Join Us component
import RecentNews from '@/components/home/RecentNews';

const TRACKING_ID = 'G-2CZYC6X9SY';

export default function Home() {
  useEffect(() => {
    if (TRACKING_ID) {
      ReactGA.initialize(TRACKING_ID);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
    }
  }, []);
  
  return (
    <div className="space-y-8">
      <Profile />
      <Introduction />
      <RecentNews />
      <SelectedPapers />
      <JoinUs />
    </div>
  );
}