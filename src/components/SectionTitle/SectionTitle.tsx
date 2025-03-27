import "./SectionTitle.css"

export default function SectionTitle({ titleEn, titleJa }: { titleEn: string, titleJa: string }) {
  return (
    <div className="section-title">
      <span className="section-title__en">{titleEn}</span>
      <h1 className="section-title__ja">{titleJa}</h1>
    </div>
  )
}