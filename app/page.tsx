import Profile from '@/components/home/Profile';
import News from '@/components/home/News';
import SelectedPapers from '@/components/home/Selected';

export default function Home() {
  return (
    <div className="space-y-8">
      <Profile />
      <div className="grid md:grid-cols-2 gap-8">
        <News />
        <SelectedPapers />
      </div>
    </div>
  );
}