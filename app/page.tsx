import ScenarioGrid from "@/components/ScenarioGrid";


export default async function Home() {

  return (
    <>
    <div className="bg-slate-300 py-20 text-center">
      <h1 className="text-4xl font-bold mb-3">Explore the Landscape of Effective Communication</h1>
      <p className="text-lg">Discover Rich Examples of Healthy Dialogues That Cultivate Stronger Bonds.</p>
    </div>
    <main>
        <ScenarioGrid />
    </main>
    </>
  );
}
