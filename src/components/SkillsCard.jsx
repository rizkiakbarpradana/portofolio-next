export default function SkillCard({ nama, level }) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <h3 className="text-lg font-bold text-primary">{nama}</h3>
      <p className="mt-2 text-sm text-muted-foreground">Level: {level}</p>
    </div>
  );
}
