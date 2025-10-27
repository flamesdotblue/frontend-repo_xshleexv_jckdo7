import SummaryCards from "./SummaryCards.jsx";
import MainGrid from "./MainGrid.jsx";

export default function DashboardContent() {
  return (
    <div id="learn-more">
      <div className="mt-6">
        <SummaryCards />
      </div>
      <div className="mt-6">
        <MainGrid />
      </div>
    </div>
  );
}
