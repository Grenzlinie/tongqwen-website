import Introduction from '@/components/home/Introduction';
import Profile from '@/components/home/Profile'; // Personal profile component
import SelectedPapers from '@/components/home/Selected'; // Selected papers component
import JoinUs from '@/components/home/JoinUs'; // Join Us component

export default function Home() {
  return (
    <div className="space-y-8">
      <Profile />
      <Introduction />
      <SelectedPapers />
      <JoinUs />  {/* Join Us component below the Selected Papers */}
    </div>
  );
}