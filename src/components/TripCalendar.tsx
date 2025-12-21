import { Calendar } from "lucide-react";

const TripCalendar = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-turquoise/20 text-turquoise px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Trip Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Vietnam Trip Calendar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            December 2025 & January 2026
          </p>
        </div>

        <div className="bg-card rounded-2xl shadow-elegant overflow-hidden border border-border/50 p-6 md:p-8">
          {/* December 2025 */}
          <h3 className="text-xl font-semibold text-foreground mb-4">December 2025</h3>
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse text-center min-w-[500px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sun</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Mon</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Tue</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Wed</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Thu</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Fri</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">27</span>
                    <div className="text-xs text-coral mt-1">HCMC</div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">28</span>
                    <div className="text-xs text-coral mt-1">HCMC</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">29</span>
                    <div className="text-xs text-coral mt-1">HCMC</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg bg-sky-blue/20">
                    <span className="font-semibold text-foreground">30</span>
                    <div className="text-xs text-sky-blue mt-1">✈ SGN → DAD</div>
                    <div className="text-xs text-turquoise">Hội An</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">31</span>
                    <div className="text-xs text-turquoise mt-1">Hội An</div>
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* January 2026 */}
          <h3 className="text-xl font-semibold text-foreground mb-4">January 2026</h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-center min-w-[500px]">
              <thead>
                <tr className="bg-muted/50">
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sun</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Mon</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Tue</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Wed</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Thu</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Fri</th>
                  <th className="p-3 text-sm font-medium text-muted-foreground">Sat</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">1</span>
                    <div className="text-xs text-turquoise mt-1">Hội An</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg bg-sky-blue/20">
                    <span className="font-semibold text-foreground">2</span>
                    <div className="text-xs text-sky-blue mt-1">✈ DAD → HAN</div>
                    <div className="text-xs text-primary">Hanoi</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg bg-sunshine/20">
                    <span className="font-semibold text-foreground">3</span>
                    <div className="text-xs text-sunshine mt-1">🚢 Halong Bay</div>
                    <div className="text-xs text-sunshine">Cruise</div>
                  </td>
                </tr>
                <tr>
                  <td className="border border-border/50 p-3 rounded-lg bg-sunshine/20">
                    <span className="font-semibold text-foreground">4</span>
                    <div className="text-xs text-sunshine mt-1">🚢 Halong →</div>
                    <div className="text-xs text-primary">Hanoi</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">5</span>
                    <div className="text-xs text-primary mt-1">Hanoi</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg">
                    <span className="font-semibold text-foreground">6</span>
                    <div className="text-xs text-primary mt-1">Hanoi</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg bg-sky-blue/20">
                    <span className="font-semibold text-foreground">7</span>
                    <div className="text-xs text-sky-blue mt-1">✈ HAN → SGN</div>
                  </td>
                  <td className="border border-border/50 p-3 rounded-lg bg-sky-blue/20">
                    <span className="font-semibold text-foreground">8</span>
                    <div className="text-xs text-sky-blue mt-1">✈ Return</div>
                    <div className="text-xs text-sky-blue">to MEL</div>
                  </td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-sm border-t border-border/50 pt-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-sky-blue/20 border border-sky-blue/50"></div>
              <span className="text-muted-foreground">Flight / Travel Day</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-sunshine/20 border border-sunshine/50"></div>
              <span className="text-muted-foreground">Halong Bay Cruise</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-card border border-border/50"></div>
              <span className="text-muted-foreground">Hotel Stay</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripCalendar;
