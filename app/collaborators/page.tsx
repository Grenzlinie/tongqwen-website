import CollaboratorGrid from '@/components/collaborators/CollaboratorGrid';

export default function CollaboratorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Collaborators</h1>
        <p className="mt-2 text-slate-600">
          I have been fortunate to work with many talented researchers and professors throughout my academic journey.
        </p>
      </div>
      <CollaboratorGrid />
    </div>
  );
}