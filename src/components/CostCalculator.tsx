import { useState } from "react";
import { ArrowRight, Calculator } from "lucide-react";

export const CALCULATOR_STANDARDS = [
  { rate: 3000, label: "Grey structure" },
  { rate: 4500, label: "Standard finishing" },
  { rate: 6000, label: "Premium finishing" },
] as const;

/** Preliminary budget estimate: covered area x floors x rate (+10% contingency if ticked). */
export default function CostCalculator() {
  const [area, setArea] = useState("1000");
  const [rate, setRate] = useState("4500");
  const [floors, setFloors] = useState("1");
  const [contingency, setContingency] = useState(true);
  const areaValue = Math.max(0, Number(area) || 0);
  const floorValue = Math.max(1, Number(floors) || 1);
  const baseCost = areaValue * floorValue * (Number(rate) || 0);
  const estimatedCost = Math.round(baseCost * (contingency ? 1.1 : 1));
  const formatPKR = (amount: number) =>
    new Intl.NumberFormat("en-PK", {
      style: "currency",
      currency: "PKR",
      maximumFractionDigits: 0,
    }).format(amount);

  return (
    <div className="border border-border bg-card p-6 md:p-8">
      <div className="mb-6 flex items-center gap-3">
        <Calculator className="h-6 w-6 text-gold" />
        <h3 className="text-2xl">Estimate your project</h3>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm text-muted-foreground">
          Covered area per floor (sq. ft.)
          <input
            type="number"
            min="1"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            className="mt-2 w-full border border-input bg-transparent px-3 py-3 text-foreground outline-none focus:border-gold"
          />
        </label>
        <label className="block text-sm text-muted-foreground">
          Number of floors
          <select
            value={floors}
            onChange={(e) => setFloors(e.target.value)}
            className="mt-2 w-full border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-gold"
          >
            <option value="1">1 floor</option>
            <option value="2">2 floors</option>
            <option value="3">3 floors</option>
            <option value="4">4 floors</option>
            <option value="5">5 floors</option>
          </select>
        </label>
        <label className="block text-sm text-muted-foreground sm:col-span-2">
          Construction standard
          <select
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="mt-2 w-full border border-input bg-background px-3 py-3 text-foreground outline-none focus:border-gold"
          >
            {CALCULATOR_STANDARDS.map((s) => (
              <option key={s.rate} value={String(s.rate)}>
                {s.label} — PKR {s.rate.toLocaleString("en-PK")} / sq. ft.
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="mt-5 flex cursor-pointer items-center gap-3 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={contingency}
          onChange={(e) => setContingency(e.target.checked)}
          className="h-4 w-4 accent-yellow-600"
        />
        Include 10% contingency allowance
      </label>
      <div className="mt-7 border-t border-border pt-6">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Estimated construction budget
        </p>
        <p className="mt-2 break-words font-display text-3xl text-gold-gradient md:text-4xl">
          {formatPKR(estimatedCost)}
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          Total covered area: {(areaValue * floorValue).toLocaleString("en-PK")} sq. ft.
        </p>
        <a
          href="/#contact"
          className="mt-6 inline-flex items-center gap-2 bg-gold-gradient px-6 py-3 font-semibold text-primary-foreground"
        >
          Request an accurate quote <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
