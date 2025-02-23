import PaperList from '@/components/papers/PaperList';

export default function PapersPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Publications</h1>
        <p className="mt-2 text-slate-600">
          My research publications, sorted by year. You can also find my papers on
          {' '}
          <a 
            href="https://scholar.google.com/citations?user=YOUR_ID"
            className="text-sky-500 hover:text-sky-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar
          </a>
          .
        </p>
      </div>
      <PaperList />
    </div>
  );
}