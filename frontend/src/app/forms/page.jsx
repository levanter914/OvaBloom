// app/clinical/page.jsx or wherever you want to render
import ClinicalForm from '@/components/clinical-form';
import USGForm from '@/components/usg-form';

function Forms() {
  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      {/* Choose one or show both based on user choice */}
      <ClinicalForm />
      <USGForm />
    </main>
  );
}
export default Forms;