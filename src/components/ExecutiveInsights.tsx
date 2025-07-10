
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, AlertTriangle, CheckCircle, Shield, Zap } from "lucide-react";

const ExecutiveInsights = () => {
  const criticalInsights = [
    {
      title: "Project Recovery Confirmed",
      value: "67% Above Target",
      description: "Team velocity has accelerated significantly, demonstrating strong recovery from earlier challenges. Current output of 137 parts/day vs 82 required shows decisive turnaround.",
      icon: TrendingUp,
      type: "recovery",
      confidence: "High",
      action: "Momentum Sustained"
    },
    {
      title: "Early Completion Trajectory",
      value: "2 Weeks Early",
      description: "Statistical models show 94% probability of completing 2 weeks ahead of schedule. This buffer provides substantial protection against any unforeseen issues.",
      icon: Target,
      type: "delivery", 
      confidence: "Very High",
      action: "Timeline Secured"
    },
    {
      title: "Quality Assurance Excellence",
      value: "98.2% Success Rate",
      description: "First-pass success rate demonstrates robust processes and quality controls. No rework backlog, ensuring sustainable delivery pace.",
      icon: CheckCircle,
      type: "quality",
      confidence: "Excellent",
      action: "Standards Exceeded"
    },
    {
      title: "Risk Mitigation Complete",
      value: "All Critical Risks Resolved",
      description: "Previous bottlenecks have been eliminated through process optimization and team restructuring. No high-impact risks remain active.",
      icon: Shield,
      type: "risk",
      confidence: "Secured",
      action: "Controls Effective"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'recovery': return { bg: 'bg-green-100', text: 'text-green-800', icon: 'text-green-600', border: 'border-green-500' };
      case 'delivery': return { bg: 'bg-blue-100', text: 'text-blue-800', icon: 'text-blue-600', border: 'border-blue-500' };
      case 'quality': return { bg: 'bg-purple-100', text: 'text-purple-800', icon: 'text-purple-600', border: 'border-purple-500' };
      case 'risk': return { bg: 'bg-emerald-100', text: 'text-emerald-800', icon: 'text-emerald-600', border: 'border-emerald-500' };
      default: return { bg: 'bg-gray-100', text: 'text-gray-800', icon: 'text-gray-600', border: 'border-gray-500' };
    }
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-blue-200">
      <CardHeader className="border-b bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <CardTitle className="text-xl font-bold flex items-center">
          <Zap className="h-6 w-6 mr-3 text-yellow-300" />
          CRITICAL SUCCESS INDICATORS - PROJECT RECOVERY CONFIRMED
        </CardTitle>
        <p className="text-blue-100 text-sm font-medium">
          Demonstrating decisive turnaround and sustainable delivery trajectory
        </p>
      </CardHeader>
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {criticalInsights.map((insight, index) => {
            const colors = getTypeColor(insight.type);
            return (
              <div key={index} className={`bg-white rounded-xl p-6 border-l-4 ${colors.border} shadow-md hover:shadow-lg transition-shadow`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <insight.icon className={`h-6 w-6 ${colors.icon}`} />
                    <h4 className="font-bold text-slate-900 text-lg">{insight.title}</h4>
                  </div>
                  <Badge className={`${colors.bg} ${colors.text} font-semibold px-3 py-1`}>
                    {insight.confidence}
                  </Badge>
                </div>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900 block">{insight.value}</span>
                  <Badge className="mt-2 bg-slate-100 text-slate-700 font-medium">
                    {insight.action}
                  </Badge>
                </div>
                
                <p className="text-slate-700 leading-relaxed text-sm font-medium">
                  {insight.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Executive Confidence Statement */}
        <div className="mt-8 p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
          <div className="flex items-start space-x-4">
            <CheckCircle className="h-8 w-8 text-green-200 mt-1 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-xl mb-3">
                EXECUTIVE CONFIDENCE RESTORED
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">137 parts/day</div>
                  <div className="text-green-100">Current velocity</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">91.8% Complete</div>
                  <div className="text-green-100">Ahead of schedule</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3">
                  <div className="font-bold text-lg">Zero Critical Issues</div>
                  <div className="text-green-100">Risk-free delivery</div>
                </div>
              </div>
              <p className="mt-4 text-green-100 font-medium leading-relaxed">
                The SAP Master Data Simplification project has achieved complete operational recovery. 
                With velocity 67% above target and zero critical risks, we guarantee on-time delivery 
                with 2-week buffer for contingencies. Quality standards exceed expectations at 98.2% success rate.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExecutiveInsights;
